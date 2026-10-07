1. Mengapa Merge Conflict bisa terjadi?

Merge Conflict terjadi ketika Git bingung menentukan perubahan mana yang harus dipakai saat menggabungkan dua branch. Biasanya terjadi karena ada perubahan yang saling bertabrakan pada bagian file yang sama.

Minimal 2 situasi yang bisa menyebabkan conflict:

Dua orang mengedit baris yang sama pada file yang sama, tetapi isinya berbeda.
Satu orang mengubah atau menghapus bagian file, sementara orang lain juga mengubah bagian yang sama.

Contoh skenario nyata:

Misalnya ada file index.html.

Andi di branch feature-navbar mengubah:

<h1 style="color: red;">Selamat Datang</h1>

Budi di branch feature-design mengubah baris yang sama menjadi:

<h1 style="color: blue;">Selamat Datang</h1>

Ketika branch tersebut digabung, Git tidak tahu apakah harus memakai merah atau biru. Akhirnya Git memberikan Merge Conflict dan meminta kita menentukan versi yang benar.

2. Memahami tanda Merge Conflict

Kode:

<<<<<<< HEAD
<h1 style="color: red;">Selamat Datang</h1>
=======
<h1 style="color: blue;">Selamat Datang</h1>
>>>>>>> branch-teman
a. Arti masing-masing penanda

<<<<<<< HEAD

Menandai awal dari versi yang berasal dari branch yang sedang aktif.

=======

Menjadi pemisah antara dua versi yang sedang konflik.

>>>>>>> branch-teman

Menandai akhir dari versi yang berasal dari branch yang sedang dimasukkan/datang, yaitu branch-teman.

b. Mana versi branch aktif?

Versi branch aktif adalah:

<h1 style="color: red;">Selamat Datang</h1>

Karena berada di antara:

<<<<<<< HEAD

dan

=======
c. Mana versi branch yang datang?

Versi dari branch-teman adalah:

<h1 style="color: blue;">Selamat Datang</h1>

Karena berada di antara:

=======

dan

>>>>>>> branch-teman

Jadi sederhananya:

<<<<<<< HEAD
VERSI BRANCH AKTIF
=======
VERSI BRANCH YANG DATANG
>>>>>>> branch-teman
3. Cara menyelesaikan Merge Conflict

Ada dua cara yang umum digunakan.

A. Menggunakan Visual Studio Code

Langkah-langkahnya:

Buka project menggunakan Visual Studio Code.
Buka file yang mengalami conflict.
VS Code biasanya akan menampilkan pilihan seperti:
Accept Current Change → menggunakan perubahan dari branch aktif.
Accept Incoming Change → menggunakan perubahan dari branch yang datang.
Accept Both Changes → menggunakan keduanya.
Pilih sesuai kebutuhan.
Pastikan tanda conflict seperti <<<<<<<, =======, dan >>>>>>> sudah hilang.
Simpan file.

Cek dengan:

git status
Setelah yakin sudah benar, lakukan git add dan commit.
B. Menggunakan editor teks secara manual

Kalau menggunakan Notepad atau editor teks lainnya:

Buka file yang mengalami conflict.

Cari bagian:

<<<<<<< HEAD
Tentukan versi mana yang ingin digunakan.

Hapus penanda:

<<<<<<< HEAD
=======
>>>>>>> branch-teman
Hapus kode yang tidak ingin digunakan.
Sisakan kode final yang benar.
Simpan file.

Cek menggunakan:

git status
Lanjutkan proses Git dengan git add dan commit.

Kenapa VS Code lebih direkomendasikan untuk pemula?

Karena VS Code menampilkan conflict dengan lebih jelas dan menyediakan tombol seperti Accept Current Change dan Accept Incoming Change. Jadi kita tidak perlu menghapus tanda conflict secara manual dan risiko salah edit lebih kecil.

4. Perintah setelah conflict diselesaikan

Setelah semua conflict sudah diperbaiki, urutannya bisa seperti ini:

1. Cek status
git status

Fungsinya untuk melihat file mana yang masih mengalami conflict atau sudah berhasil diperbaiki.

2. Tandai conflict sudah selesai
git add .

Fungsinya memberitahu Git bahwa perubahan pada file tersebut sudah selesai dan siap dicatat.

3. Commit hasil merge
git commit -m "resolve merge conflict"

Fungsinya menyimpan hasil penyelesaian conflict ke dalam riwayat Git.

Jadi urutan sederhananya:

git status
git add .
git commit -m "resolve merge conflict"

Kalau setelah itu ingin mengirim hasilnya ke GitHub, bisa dilanjutkan:

git push
5. Fungsi git merge --abort

Perintah:

git merge --abort

digunakan untuk membatalkan proses merge yang sedang berlangsung dan mengembalikan kondisi repository seperti sebelum merge dimulai.

Contoh situasi nyata:

Misalnya kita melakukan:

git merge branch-teman

Ternyata muncul banyak sekali conflict di 20 file dan kita sadar bahwa branch yang ingin digabung ternyata salah.

Daripada memperbaiki 20 conflict satu per satu, kita bisa membatalkannya:

git merge --abort

Dengan begitu, proses merge dibatalkan dan kita bisa mengecek kembali branch yang benar sebelum mencoba merge lagi.

6. Praktik terbaik untuk mengurangi Merge Conflict
1. Sering melakukan git pull

Sebelum mulai bekerja, biasakan mengambil perubahan terbaru:

git pull

Alasannya: kita bekerja berdasarkan kode terbaru sehingga kemungkinan perubahan kita bertabrakan dengan perubahan anggota tim bisa lebih kecil.

2. Jangan mengerjakan terlalu banyak hal dalam satu branch

Sebaiknya satu branch fokus pada satu fitur atau satu perbaikan.

Contoh:

feature/login
feature/search
fix/navbar

Alasannya: perubahan menjadi lebih terarah dan kemungkinan menyentuh file yang sama secara bersamaan lebih kecil.

3. Commit secara rutin

Jangan menunggu sampai mengerjakan banyak perubahan baru melakukan commit.

Contoh:

git commit -m "feat: menambahkan form login"

Alasannya: perubahan menjadi lebih kecil dan mudah dilacak atau digabungkan.

4. Komunikasi dengan anggota tim

Misalnya bilang:

"Aku lagi edit bagian navbar index.html."

Alasannya: anggota tim bisa menghindari mengedit bagian yang sama secara bersamaan.

5. Gunakan branch untuk setiap fitur

Jangan semua anggota langsung bekerja di main.

Misalnya:

main
 ├── feature/login
 ├── feature/search
 └── feature/profile

Alasannya: pekerjaan setiap orang terpisah sehingga perubahan lebih aman sebelum digabungkan.

7. Pentingnya pesan commit yang jelas

Pesan commit penting karena commit adalah seperti catatan sejarah proyek. Dari pesan commit, kita bisa mengetahui perubahan apa yang dilakukan tanpa harus membuka semua kode.

Pesan yang jelas juga memudahkan ketika:

mencari perubahan tertentu,
melakukan debugging,
bekerja dalam tim,
melihat riwayat project.
Contoh commit buruk:
git commit -m "update"
git commit -m "fix"
git commit -m "asdf"

Masalahnya adalah kita tidak tahu sebenarnya apa yang diubah.

Contoh commit baik:
git commit -m "feat: menambahkan fitur pencarian produk"
git commit -m "fix: memperbaiki tombol login yang tidak berfungsi"
git commit -m "docs: memperbarui README instalasi project"

Dari pesannya saja sudah bisa diketahui perubahan yang dilakukan.

8. Format Conventional Commits

Format dasarnya:

<type>: <deskripsi perubahan>

Contohnya:

feat: menambahkan fitur pencarian produk

Beberapa tipe yang umum:

Tipe	Fungsi	Contoh
feat	Menambahkan fitur baru	feat: menambahkan fitur login
fix	Memperbaiki bug	fix: memperbaiki tombol login
docs	Perubahan dokumentasi	docs: memperbarui README
style	Perubahan format/style kode tanpa mengubah fungsi	style: memperbaiki format CSS
refactor	Merapikan struktur kode tanpa mengubah fungsi	refactor: menyederhanakan fungsi login
test	Menambah atau memperbaiki testing	test: menambahkan test login

Jadi kalau kita menambahkan fitur baru, biasanya menggunakan:

feat:

Kalau memperbaiki bug:

fix:
9. Mana pesan commit yang paling baik?

Dari ketiga pilihan:

git commit -m "update"
git commit -m "fix bug tombol"
git commit -m "feat: menambahkan fitur pencarian produk di navbar"

Yang paling baik adalah nomor 3:

git commit -m "feat: menambahkan fitur pencarian produk di navbar"

Alasannya:

Menggunakan format Conventional Commits dengan feat.
Menjelaskan apa yang dilakukan.
Lebih spesifik daripada "update".
Lebih jelas daripada "fix bug tombol" yang tidak menjelaskan tombol apa dan masalahnya apa.

Jadi ketika melihat riwayat commit, kita langsung tahu bahwa commit tersebut menambahkan fitur pencarian produk pada navbar.

10. Fungsi .gitignore

.gitignore adalah file yang digunakan untuk memberi tahu Git file atau folder mana yang tidak perlu dimasukkan ke repository.

Contohnya:

1. File rahasia
.env

Biasanya berisi password, API key, database credential, dan informasi rahasia lainnya.

Kenapa tidak di-upload? Karena bisa membocorkan informasi sensitif.

2. Folder dependency
node_modules/

Kenapa tidak di-upload? Karena ukurannya bisa sangat besar dan dependency bisa di-install kembali menggunakan npm install.

3. File hasil build
dist/
build/

Kenapa tidak di-upload? Karena biasanya file tersebut merupakan hasil generate dari source code dan bisa dibuat ulang.

4. File dari editor/OS

Contohnya:

.vscode/
.DS_Store
Thumbs.db

Kenapa tidak di-upload? Karena biasanya hanya berisi pengaturan pribadi editor atau sistem operasi dan tidak diperlukan oleh project.

Contoh .gitignore sederhana:

node_modules/
.env
dist/
.vscode/
.DS_Store
11. Format penamaan branch

Penamaan branch sebaiknya jelas, konsisten, singkat, dan menggambarkan pekerjaan yang dilakukan.

Format yang umum:

<jenis>/<deskripsi>

Contohnya:

feature/login
feature/search-product
fix/navbar-mobile
Contoh 1
feature/login

Artinya branch tersebut digunakan untuk membuat fitur login.

Contoh 2
feature/search-product

Artinya untuk membuat fitur pencarian produk.

Contoh 3
fix/navbar-mobile

Artinya untuk memperbaiki masalah navbar pada tampilan mobile.

Kenapa lebih baik daripada penamaan bebas?

Karena seluruh anggota tim menggunakan pola yang sama. Jadi kita bisa langsung mengetahui tujuan sebuah branch tanpa harus membukanya.

Penamaan seperti:

branchbaru
punyaBudi
coba2
test123

kurang bagus karena tidak menjelaskan tujuan branch tersebut.

12. Peran HTML, CSS, dan JavaScript

Ketiga teknologi ini bisa dibayangkan seperti membangun sebuah rumah.

HTML → Struktur

HTML menentukan isi dan struktur website.

Contohnya:

<h1>Selamat Datang</h1>
<p>Ini website saya.</p>
<button>Klik Saya</button>

HTML seperti kerangka dan ruangan rumah.

CSS → Tampilan

CSS mengatur bagaimana website terlihat.

Contohnya:

h1 {
    color: blue;
}

CSS seperti cat, dekorasi, dan desain rumah.

JavaScript → Interaksi

JavaScript membuat website bisa melakukan sesuatu secara dinamis.

Contohnya:

button.onclick = function() {
    alert("Tombol diklik!");
};

JavaScript seperti listrik dan sistem otomatisasi rumah.

Singkatnya:

HTML       = Struktur
CSS        = Tampilan
JavaScript = Interaksi/Logika
13. Dua lingkungan JavaScript

JavaScript bisa dijalankan di banyak tempat, tetapi dua lingkungan yang paling umum adalah:

1. Browser

JavaScript dapat dijalankan langsung di browser seperti Chrome, Firefox, atau Edge.

Contohnya:

alert("Halo!");

JavaScript di browser bisa digunakan untuk membuat tombol interaktif, validasi form, animasi, manipulasi HTML, dan sebagainya.

2. Node.js

JavaScript juga bisa dijalankan di luar browser menggunakan Node.js.

Contohnya JavaScript dapat digunakan untuk:

membuat backend/server,
membuat API,
mengelola file,
membuat aplikasi command-line,
menjalankan tools development.

Jadi:

Browser → JavaScript untuk website/frontend
Node.js → JavaScript di luar browser, termasuk backend
14. Perbedaan JavaScript dan ECMAScript (ES)

JavaScript adalah bahasa pemrograman yang kita gunakan.

Sedangkan ECMAScript (ES) adalah standar/spesifikasi yang mendefinisikan bagaimana bahasa tersebut bekerja.

Sederhananya:

ECMAScript = aturan/standar
JavaScript = implementasi bahasa yang mengikuti standar tersebut

Contohnya, JavaScript modern mengikuti standar ECMAScript terbaru dan menyediakan fitur-fitur seperti let, const, arrow function, class, dan sebagainya.

Contoh gaya lama
var nama = "Budi";

function sapa(nama) {
    return "Halo " + nama;
}
Contoh gaya modern
const nama = "Budi";

const sapa = (nama) => {
    return `Halo ${nama}`;
};

Pada contoh modern:

const digunakan daripada var ketika nilainya tidak perlu diubah.
Arrow function digunakan untuk membuat fungsi lebih ringkas.
Template literal menggunakan backtick ` sehingga penggabungan teks menjadi lebih mudah.

Jadi, ECMAScript bukan bahasa yang berbeda dari JavaScript, melainkan standar yang menjadi dasar perkembangan JavaScript.
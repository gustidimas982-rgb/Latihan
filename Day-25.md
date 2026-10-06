1. Dua arah aliran kode: push dan pull

Ada dua arah utama antara komputer lokal dan GitHub:

git push → mengirim perubahan dari komputer lokal → GitHub.
git pull → mengambil perubahan terbaru dari GitHub → komputer lokal.

Contoh push:
Kamu selesai membuat fitur login di komputer. Setelah di-commit, kamu ingin menyimpan dan mengirim hasil pekerjaan tersebut ke GitHub. Maka kamu melakukan git push.

Contoh pull:
Kamu bekerja dalam satu tim. Temanmu sudah memperbaiki style.css dan melakukan push ke GitHub. Sebelum melanjutkan pekerjaan, kamu perlu mengambil perubahan tersebut ke komputer dengan git pull.

2. Fungsi git push

git push digunakan untuk mengirim commit yang ada di repository lokal ke repository remote, misalnya GitHub.

Contoh:

git push origin main

Artinya: kirim branch main dari komputer lokal ke repository bernama origin di GitHub.

a. Apa fungsi opsi -u?

Pada:

git push -u origin main

-u atau --set-upstream digunakan untuk menghubungkan branch lokal main dengan branch main di remote origin.

Jadi Git akan mengingat bahwa:

main lokal → origin/main

b. Apa yang terjadi jika -u tidak digunakan pada push pertama?

Misalnya:

git push origin main

Push tetap bisa dilakukan, tetapi hubungan upstream belum ditetapkan.

Akibatnya, pada push berikutnya Git mungkin meminta kita menentukan remote dan branch lagi.

c. Mengapa setelah -u ditetapkan cukup git push?

Karena Git sudah tahu tujuan push-nya.

Setelah:

git push -u origin main

Git sudah mengingat hubungan:

main lokal → origin/main

Jadi berikutnya cukup:

git push

Git otomatis tahu harus mengirim ke origin/main.

3. Perbedaan git clone dan git init

git init digunakan untuk membuat repository Git baru di folder yang sudah ada.

Contoh:

mkdir proyek
cd proyek
git init

Sedangkan git clone digunakan untuk menyalin repository yang sudah ada, misalnya dari GitHub, ke komputer lokal.

Contoh:

git clone https://github.com/andi/proyek.git

Perbedaan sederhananya:

Perintah	Fungsi
git init	Membuat repository Git baru
git clone	Menyalin repository Git yang sudah ada

Setelah git clone, kita tidak perlu menjalankan git init lagi karena hasil clone tersebut sudah menjadi repository Git lengkap, termasuk folder .git.

Kalau menjalankan git init lagi, sebenarnya tidak diperlukan dan hanya akan menginisialisasi ulang repository yang sudah ada.

4. Fungsi git pull

git pull digunakan untuk mengambil perubahan terbaru dari repository remote ke repository lokal.

Secara sederhana:

GitHub → komputer kita

git pull sangat penting dalam kerja tim karena anggota tim bisa saja sudah melakukan perubahan dan push ke GitHub. Kalau kita tidak mengambil perubahan tersebut, repository lokal kita bisa menjadi ketinggalan.

Dua momen ketika sebaiknya menjalankan git pull:

Sebelum mulai bekerja di pagi hari

Misalnya teman sudah melakukan push kemarin. Kita melakukan:

git pull

supaya kode lokal kita terbaru.

Sebelum melakukan push setelah bekerja cukup lama

Kalau selama kita bekerja ada kemungkinan anggota tim lain melakukan perubahan, kita bisa melakukan:

git pull

terlebih dahulu untuk memastikan perubahan terbaru sudah masuk ke lokal.

5. Alur kerja harian yang direkomendasikan

Salah satu alur sederhananya:

git switch main
git pull
git switch -c fitur-baru

Kemudian setelah selesai mengerjakan:

git add .
git commit -m "Menambahkan fitur baru"
git push -u origin fitur-baru

Jika menggunakan branch yang sudah ada:

git switch fitur-baru
git pull

Alurnya secara sederhana:

1. git switch main
Memastikan kita berada di branch utama sebelum memperbarui kode.

2. git pull
Mengambil perubahan terbaru dari GitHub.

3. git switch -c fitur-baru
Membuat branch baru agar pekerjaan tidak langsung mengubah main.

4. git add .
Memasukkan perubahan yang ingin disimpan ke staging area.

5. git commit
Menyimpan perubahan sebagai riwayat Git dengan pesan yang jelas.

6. git push -u origin fitur-baru
Mengirim branch dan commit ke GitHub agar bisa dilihat atau dibuatkan Pull Request.

Jadi prinsipnya:

Pull → Kerja di branch → Add → Commit → Push → Pull Request
6. Apa itu Fork?

Fork adalah membuat salinan repository milik orang/organisasi lain ke akun GitHub kita sendiri.

Misalnya ada repository:

github.com/andi/proyek

Kita melakukan fork, sehingga muncul salinannya di akun kita:

github.com/budi/proyek
Contoh situasi membutuhkan Fork

Situasi 1:
Kamu ingin berkontribusi ke proyek open source milik orang lain, tetapi kamu bukan anggota yang memiliki izin langsung untuk push ke repository tersebut.

Situasi 2:
Kamu ingin mencoba melakukan perubahan pada proyek orang lain tanpa mengganggu repository aslinya.

Fork vs Clone
Fork	Clone
Membuat salinan repository di akun GitHub kita	Menyalin repository ke komputer lokal
Dilakukan di GitHub	Dilakukan melalui Git
Cocok untuk kontribusi ke repository orang lain	Cocok untuk bekerja secara lokal

Biasanya keduanya digunakan bersama:

Repository asli
       ↓
     Fork
       ↓
Repository di GitHub kita
       ↓
     Clone
       ↓
Komputer lokal
7. Enam langkah kontribusi open source dengan Fork + Pull Request
1. Fork repository

Klik Fork pada repository GitHub yang ingin dikontribusikan.

Tujuan: membuat salinan repository di akun GitHub kita sehingga kita bisa bekerja tanpa membutuhkan akses langsung ke repository asli.

2. Clone repository hasil fork
git clone https://github.com/username/proyek.git

Tujuan: mengambil repository hasil fork dari GitHub ke komputer sehingga kita bisa mengedit kode secara lokal.

3. Buat branch baru
git switch -c perbaikan-bug

Tujuan: memisahkan pekerjaan kita dari main, sehingga perubahan lebih aman dan mudah ditinjau.

4. Edit, add, dan commit

Contohnya:

git add .
git commit -m "Memperbaiki bug validasi"

Tujuan: menyimpan perubahan sebagai riwayat Git yang jelas.

5. Push branch ke GitHub
git push -u origin perbaikan-bug

Tujuan: mengirim branch dan perubahan kita ke repository hasil fork di GitHub.

6. Buat Pull Request

Di GitHub, kita membuat Pull Request dari branch kita menuju repository asli.

Tujuan: meminta pemilik atau maintainer proyek untuk meninjau dan mempertimbangkan perubahan kita agar digabungkan ke proyek utama.

8. Apa itu Pull Request?

Pull Request (PR) adalah sebuah permintaan untuk menggabungkan perubahan dari satu branch ke branch lain, biasanya ke main.

Misalnya:

branch perbaikan-bug
        ↓
   Pull Request
        ↓
      main

PR penting dalam kerja tim karena perubahan tidak langsung masuk ke main.

Tim profesional biasanya tidak langsung merge karena perubahan perlu ditinjau terlebih dahulu.

Contohnya, ketika kita membuat fitur baru, mungkin saja ada:

bug,
kesalahan logika,
kode yang tidak sesuai standar,
konflik dengan fitur lain,
atau masalah keamanan.

Dengan PR, anggota tim lain bisa melakukan code review sebelum perubahan digabungkan.

Keuntungan PR:

Code review — anggota tim lain bisa memeriksa kode.
Mengurangi bug — kesalahan dapat ditemukan sebelum masuk ke main.
Diskusi — developer bisa memberikan komentar atau saran.
Riwayat perubahan lebih jelas — alasan dan pembahasan perubahan tersimpan di GitHub.
9. Skenario Andi dan Budi
a. Apa yang kemungkinan terjadi saat Budi melakukan push?

Kemungkinan besar Git akan menolak push Budi karena branch Budi sudah tertinggal dari branch di GitHub.

Biasanya muncul pesan seperti:

! [rejected] main -> main (non-fast-forward)

atau pesan yang intinya mengatakan bahwa remote memiliki perubahan yang belum dimiliki Budi.

b. Mengapa hal ini terjadi?

Karena:

Budi pull kemarin
      ↓
Andi melakukan perubahan
      ↓
Andi push ke GitHub
      ↓
Budi belum pull lagi
      ↓
Budi mengedit + commit
      ↓
Budi mencoba push

Jadi repository lokal Budi belum memiliki commit milik Andi.

Git menolak push supaya perubahan Andi tidak begitu saja tertimpa.

Inilah alasan git pull penting dalam kerja tim.

c. Apa yang seharusnya Budi lakukan sebelum mengedit?

Sebaiknya Budi mengambil perubahan terbaru terlebih dahulu:

git pull

Dengan begitu kode Budi sudah diperbarui sebelum mulai bekerja.

d. Urutan perintah Budi sejak pagi

Jika menggunakan main:

git switch main
git pull

Kemudian membuat branch pekerjaan:

git switch -c perbaikan-style

Setelah selesai mengedit:

git add style.css
git commit -m "Memperbaiki style CSS"
git push -u origin perbaikan-style

Lalu membuat Pull Request di GitHub.

Kalau workflow tugasnya memang mengizinkan push langsung ke main, maka setelah mengedit bisa:

git add style.css
git commit -m "Memperbaiki style CSS"
git pull
git push

Tetapi untuk kerja tim, branch + Pull Request biasanya lebih aman.

10. Studi Kasus Alur Kerja Lengkap

Perintah yang diberikan:

git clone https://github.com/andi/proyek.git
cd proyek
git switch -c perbaikan-bug
touch fix.js
git add fix.js
git commit -m "Memperbaiki bug pada validasi form"
git push origin perbaikan-bug
a. Apa yang dilakukan git clone?
git clone https://github.com/andi/proyek.git

Perintah tersebut mengambil repository milik Andi dari GitHub dan membuat salinannya di komputer lokal.

Clone biasanya juga membawa:

file-file proyek,
seluruh riwayat commit,
branch,
konfigurasi remote origin.

Jadi setelah clone, kita sudah mempunyai repository Git yang siap digunakan.

b. Mengapa membuat branch perbaikan-bug?

Perintah:

git switch -c perbaikan-bug

membuat branch baru bernama perbaikan-bug sekaligus berpindah ke branch tersebut.

Tujuannya agar perbaikan bug tidak langsung dilakukan di main.

Contohnya:

main
 │
 ├── kode utama
 │
 └── perbaikan-bug
       └── perubahan bug

Keuntungannya, main tetap relatif stabil dan perubahan bisa diperiksa terlebih dahulu melalui Pull Request.

c. Apa tujuan git push origin perbaikan-bug?
git push origin perbaikan-bug

Artinya:

Kirim branch lokal perbaikan-bug ke remote origin.

Mengapa tidak cukup git push?

Karena pada kasus ini branch tersebut belum memiliki upstream yang ditetapkan. Jadi kita secara eksplisit memberitahu Git:

Remote  = origin
Branch  = perbaikan-bug

Kalau menggunakan:

git push -u origin perbaikan-bug

maka setelah itu cukup:

git push

untuk push berikutnya.

d. Apa yang dilakukan di GitHub setelah push?

Setelah branch berhasil di-push, buka repository di GitHub.

Biasanya GitHub akan menawarkan tombol seperti “Compare & pull request”.

Kemudian:

Klik Pull Request.
Pastikan branch sumber adalah perbaikan-bug.
Pastikan tujuan adalah branch yang benar, misalnya main.
Isi judul PR.
Jelaskan perubahan yang dibuat.
Klik Create pull request.

Setelah itu pemilik repository bisa melakukan review terhadap perubahan tersebut.

e. Jika pemilik repo meminta revisi?

Tidak perlu membuat Pull Request baru selama PR yang sama masih terbuka.

Kita tinggal memperbaiki kode di branch yang sama.

Contohnya:

git switch perbaikan-bug

Lakukan perubahan pada fix.js, kemudian:

git add fix.js
git commit -m "Memperbaiki validasi sesuai hasil review"
git push

Karena branch sudah terhubung dengan remote, cukup git push.

Alurnya:

Pemilik memberi komentar
        ↓
Kita perbaiki kode
        ↓
git add
        ↓
git commit
        ↓
git push
        ↓
PR otomatis diperbarui
        ↓
Pemilik melakukan review lagi
        ↓
Jika sudah oke → Merge

Jadi tidak perlu membuat PR baru untuk setiap revisi. PR yang sama akan otomatis mendapatkan commit terbaru dari branch tersebut.
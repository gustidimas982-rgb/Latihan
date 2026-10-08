const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = "2020";
const TARIF_PAJAK = 0.11;
let statusBuka = true;

// FIX: Hapus deklarasi "let website" yang kedua.
// Sebelumnya website dideklarasikan dua kali dengan let dalam scope yang sama.
let website;
website = null;

var jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

// FIX: JavaScript membedakan huruf besar dan kecil.
// "namaUsaha" adalah variabel yang benar.
console.log(namaUsaha);

console.log("Kota: " + kotaUsaha);

// FIX: tahunBerdiri berupa String, jadi ubah ke Number
// agar 2020 + 1 menghasilkan 2021, bukan "20201".
console.log("Tahun berdiri berikutnya: " + (Number(tahunBerdiri) + 1));

// FIX: TARIF_PAJAK adalah const, jadi nilainya tidak boleh diubah.
// Jika ingin tetap 0.11, baris pengubahan nilai dihapus.
// TARIF_PAJAK = 0.12;

let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK);

// FIX: Operator perkalian JavaScript adalah "*" bukan "x".
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + hargaTermurah);

// FIX: produk[3] memang tidak menghasilkan error,
// tetapi indeks ke-3 tidak ada karena array dimulai dari indeks 0.
// Jika ingin menampilkan produk ketiga, gunakan produk[2].
console.log("Produk ke-3: " + produk[2]);


/*
Catatan Bug

No | Baris/bagian | Jenis (Error / Tidak error tapi salah) | Penyebab | Perbaikan
1  | let website; lalu let website = null; | Error | Variabel dengan let tidak boleh dideklarasikan dua kali dalam scope yang sama. | Hapus deklarasi kedua atau cukup deklarasikan sekali lalu beri nilai null.
2  | console.log(namausaha); | Error | JavaScript bersifat case-sensitive. namausaha berbeda dengan namaUsaha. | Ganti menjadi namaUsaha.
3  | tahunBerdiri + 1 | Tidak error tapi salah | tahunBerdiri berisi String "2020", sehingga operator + melakukan penggabungan String. Hasilnya "20201". | Gunakan Number(tahunBerdiri) + 1.
4  | TARIF_PAJAK = 0.12; | Error | Variabel TARIF_PAJAK dibuat menggunakan const sehingga nilainya tidak boleh diubah. | Hapus baris tersebut atau gunakan let jika nilainya memang harus dapat diubah.
5  | hargaProduk[0] x (1 + TARIF_PAJAK) | Error | JavaScript tidak memiliki operator perkalian "x". | Ganti "x" menjadi "*".
6  | produk[3] | Tidak error tapi salah/undefined | Array memiliki 3 item dengan indeks 0, 1, dan 2. Indeks 3 belum memiliki data. | Gunakan produk[2] jika ingin mengambil produk ketiga.
7  | Console.log(...) | Error | JavaScript membedakan huruf besar dan kecil. Fungsi yang benar adalah console.log(), bukan Console.log(). | Gunakan console.log().
8  | let statusBuka = true | Tidak error | Tidak ada titik koma, tetapi JavaScript tetap dapat menjalankan kode karena semicolon tidak selalu wajib. | Tidak wajib diperbaiki, tetapi bisa ditulis let statusBuka = true; agar lebih rapi.
9  | let website; website = null; | Tidak error | Variabel boleh diberi nilai null setelah dideklarasikan. | Tidak perlu diperbaiki.

/*
Jawaban singkat:

1. Mengapa namausaha dan namaUsaha dianggap dua hal berbeda?
   Karena JavaScript bersifat case-sensitive. Artinya, huruf besar dan huruf kecil
   dianggap berbeda. Jadi "namausaha" dan "namaUsaha" adalah dua nama variabel
   yang berbeda.

2. Mengapa TARIF_PAJAK = 0.12 ditolak, sementara mengubah statusBuka diperbolehkan?
   Karena TARIF_PAJAK dibuat menggunakan "const", sehingga nilainya tidak boleh
   diubah setelah dibuat. Sedangkan statusBuka dibuat menggunakan "let", sehingga
   nilainya masih boleh diubah, misalnya menjadi false.

3. Mengapa "2020" + 1 menghasilkan "20201", dan apa perbaikannya?
   Karena "2020" adalah String. Operator + jika digunakan dengan String akan
   melakukan penggabungan teks, bukan penjumlahan angka.
   Perbaikannya adalah mengubah String menjadi Number:
   Number(tahunBerdiri) + 1
*/
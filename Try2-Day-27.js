const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = 2020; // FIX: mengganti dari String ke Number
const TARIF_PAJAK = 0.11;
let statusBuka = true
let website = null; // FIX: Menghapus deklarasi let website yang pertama.
var jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

console.log(namaUsaha); // FIX: Mengganti variabel "namausaha" menjadi "namaUsaha"
console.log("Kota: " + kotaUsaha);
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1));

// FIX: Menghapus deklarasi TARIF_PAJAK = 0.12
let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK); //FIX: mengganti operator x menjadi *
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + hargaTermurah);
console.log("Produk ke-3: " + produk[2]); // FIX: mengganti produk[3] menjadi produk[2]

/*
Catatan Bug

No | Baris/bagian | Jenis (Error / Tidak error tapi salah) | Penyebab | Perbaikan
1  | "2020"; | Tidak error tapi salah | Data berisi String, sehingga operator + pada baris console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1)) melakukan penggabungan String | Gunakan Number.
2  | let website; lalu let website = null; | Error | Variabel dengan let tidak boleh dideklarasikan dua kali dalam scope yang sama. | Hapus deklarasi pertama.
3  | console.log(namausaha); | Error | JavaScript bersifat case-sensitive. namausaha berbeda dengan namaUsaha. | Ganti menjadi namaUsaha.
4  | TARIF_PAJAK = 0.12; | Error | Variabel TARIF_PAJAK dibuat menggunakan const sehingga nilainya tidak boleh diubah. | Hapus deklarasinya.
5  | let hargaProduk[0] x (1 + TARIF_PAJAK) | Error | JavaScript tidak memiliki operator perkalian "x". | Ganti x menjadi *.
6  | produk[3] | Tidak error tapi salah | Indeks 3 belum memiliki data. | Gunakan produk[2] jika ingin mengambil produk ketiga.

*/


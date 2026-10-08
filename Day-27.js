const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = 2020;
const TARIF_PAJAK = 0.11;
let statusBuka = true
let website = null;
var jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

console.log(namaUsaha);
Console.log("Kota: " + kotaUsaha);
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1));

TARIF_PAJAK = 0.12;
let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK);
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + hargaTermurah);
console.log("Produk ke-3: " + produk[2]);


// === LANGKAH 1 ===

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
/*
Jawabannya

1. Karena JavaScript bersifat case-sensitive. Artinya, huruf besar dan huruf kecil
   dianggap berbeda. Jadi "namausaha" dan "namaUsaha" adalah dua nama variabel
   yang berbeda.

2. Karena TARIF_PAJAK dibuat menggunakan const, sehingga nilainya tidak boleh
   diganti setelah dibuat. Sedangkan statusBuka dibuat menggunakan let, sehingga
   nilainya masih boleh diganti, misalnya menjadi false.

3. Karena "2020" adalah String. Operator + jika digunakan dengan String akan
   melakukan penggabungan teks, bukan penjumlahan angka.
   Perbaikannya adalah mengubah String menjadi Number:
   Number(tahunBerdiri) + 1
*/


// === LANGKAH 2 ===

// FIX: Tahun berdiri lebih tepat disimpan sebagai number, bukan string.
const usaha = {
    nama: "kopi Senja",
    pemilik: "Gusti Dimas Achmad",
    kota: "Yogyakarta",
    tahunBerdiri: 2020,
    statusBuka: true,
    nomorWhatsApp: "081336011353",
    website: null
};

// Satu array berisi object. Dengan cara ini nama dan harga suatu produk tetap berpasangan.
const daftarProduk = [
    { nama: "Kopi Susu", harga: 18000},
    { nama: "Es Teh Manis", harga: 7500},
    { nama: "Roti Bakar", harga: 15000},
    { nama: "Kentang Goreng", harga: 10000}
];

// Notasi titik
console.log("Nama usaha:", usaha.nama);
// Notasi kurung siku
console.log("Kota:", usaha["kota"]);
// Produk pertama menggunakan indeks 0
console.log("Produk pertama:", daftarProduk[0]);
// Produk terakhir menggunakan indeks 3
console.log("Produk terakhir:", daftarProduk[3]);

/*
Jawabannya

1. Karena nomor WhatsApp bukan angka yang akan dihitung. Contohnya
   "08123456789" memiliki angka 0 di depan. Kalau disimpan sebagai
   number, angka 0 di depan bisa hilang menjadi 8123456789.

2. null berarti kita sengaja memberikan nilai "kosong/belum ada". Sedangkan undefined
   biasanya berarti sebuah variabel/properti belum diberi nilai. Contohnya:
   let website;        // undifined
   let website = null; // nilai "kosong"

3. Karena indeks array dimulai dari 0. Jika mengakses daftarProduk[4],
   hasilnya adalah undefined karena saat ini baru ada 4 produk.
*/


// === LANGKAH 3 ===

const tahunSekarang = 2025;
const tarifPajak = 0.11;

//Usia usaha
const usiaUsaha = tahunSekarang - usaha.tahunBerdiri;

// Mengambil semua harga produk
const semuaHarga = daftarProduk.map(function(produk) {
    return produk.harga;
})

// Harga termurah
const hargaTermurah = Math.min(...semuaHarga);

// Harga termahal
const hargaTermahal = Math.max(...semuaHarga);

// Membuat daftar harga setelah pajak
const produkSetelahPajak = daftarProduk.map(function(produk) {
    const hargaPajak = produk.harga * (1 + tarifPajak);

    return {
        nama: produk.nama,
        harga: produk.harga,
        hargaSetelahPajak: hargaPajak
    };
});

// Tampilan menggunakan template literal
console.log(
    ===== KARTU USAHA =====
    Nama Usaha : ${usaha.nama}
    Pemilik : ${usaha.pemilik}
    Kota : ${usaha.kota}
    Usia Usaha : ${usiaUsaha} tahun
    Status : ${usaha.statusBuka ? "Buka" : "Tutup"}
    Website : ${usaha.website ?? "belum ada"}

    Daftar Produk (harga + PPN 11%):
    ${produkSetelahPajak.map(function(produk, index) {
        return `${index + 1}. ${produk.nama.padEnd(15)} : Rp ${produk.hargaSetelahPajak}`;
    }).join("\n")}

    Termurah : Rp ${hargaTermurah}
    Termahal : Rp ${hargaTermahal}
    =======================
)

/*
Jawabnnya

1. Semua variabel di atas menggunakan const karena nilainya tidak perlu di-assign ulang.
   const juga membuat kode lebih aman dari perubahan nilai yang tidak sengaja.

2. Kopi Susu [Pajak => 18000 * 11/100 = 1980]
   Harga Setelah Pajak [18000 + 1980 = 19980]
   Dengan Program [18000 * (1 + 0.11) = 18000 * 1.11 = 19980]

3. // Harga Kopi Susu sebelum diubah
   console.log(
   "Harga Kopi Susu sebelum diubah:",
   daftarProduk[0].harga
   );
   
   // Mengubah harga di object
   daftarProduk[0].harga = 20000;

   // Jika dihitung ulang, hasilnya ikut berubah.
   const hargaKopiBaru = daftarProduk[0].harga * (1 + tarifPajak);
   console.log(
   "Harga Kopi Susu setelah diubah:",
   hargaKopiBaru
   );

   // Perhitungan ulangnya => 20.000 x 1,11 = Rp22.200
   Jadi data object berubah dan jika perhitungannya dilakukan lagi, hasilnya juga berubah.
   Tetapi hasil yang SUDAH tercetak sebelumnya tidak berubah secara otomatis.
   Console hanya menampilkan hasil pada saat kode tersebut dijalankan.
*/


// === LANGKAH 4 ===

// Tebakan: "number"
console.log(typeof 42);
// Hasil asli: "number" ✔

// Tebakan: "string"
console.log(typeof "42");
// Hasil asli: "string" ✔

// Tebakan: "boolean"
console.log(typeof true);
// Hasil asli: "boolean" ✔

// Tebakan: "undefined"
console.log(typeof undefined);
// Hasil asli: "undefined" ✔

// Tebakan: "null"
console.log(typeof null);
// Hasil asli: "object" ❌

// Tebakan: "array"
console.log(typeof [1, 2, 3]);
// Hasil asli: "object" ❌

// Tebakan: "object"
console.log(typeof { nama: "Budi" });
// Hasil asli: "object" ✔

// Tebakan: "53"
console.log("5" + 3);
// Hasil asli: "53" ✔

// Tebakan: 15
console.log("5" * 3);
// Hasil asli: 15 ✔

// Tebakan: "abc2"
console.log("abc" * 2);
// Hasil asli: NaN ❌

// Tebakan: Infinity
console.log(10 / 0);
// Hasil asli: Infinity ✔

// Tebakan: "null"
console.log(typeof usaha.website);
// Hasil asli: "object" ❌

/*
Jawabannya

1. Untuk setiap tebakan yang meleset, penjelasannya yaitu:
   a. typeof null
      Hasilnya "object", bukan "null". Hal ini merupakan perilaku lama JavaScript.
      Walaupun typeof-nya "object", null itu nilai khusus yang berarti kosong/tidak ada nilai.
   b. typeof [1, 2, 3]
      Hasilnya "object", bukan "array". Soalnya, di JavaScript array termasuk jenis object khusus.
      Kalau mau mengecek apakah suatu nilai benar-benar array, kita bisa menggunakan Array.isArray().
   c. "abc" * 2
      Hasilnya NaN, bukan "abc2". Operator * digunakan untuk perkalian, jadi JavaScript mencoba
      mengubah "abc" menjadi angka. Karena "abc" bukan angka yang valid, hasilnya menjadi NaN (Not a Number).
   d. typeof usaha.website
      Hasilnya "object", bukan "null". Ini karena properti website memiliki nilai null,
      sedangkan typeof null di JavaScript memang menghasilkan "object".

2. Bukan berarti null benar-benar object seperti object yang punya properti dan nilai.
   Null digunakan untuk menunjukkan bahwa suatu variabel sengaja tidak memiliki nilai atau nilainya kosong.
   Hasil "object" itu merupakan perilaku lama JavaScript yang masih dipertahankan sampai sekarang.

3. Karena operator + dan * punya fungsi yang berbeda. Perbedaannya yaitu:
   a. "5" + 3 menghasilkan "53" karena operator + bisa digunakan untuk menggabungkan string.
      Angka 3 diubah menjadi string "3", lalu digabungkan dengan "5".
   b. "5" * 3 menghasilkan 15 karena operator * digunakan untuk perkalian.
      JavaScript mengubah string "5" menjadi angka 5, lalu menghitung 5 x 3 = 15.
*/


// === LANGKAH 5 ===

// 1. Menambahkan satu produk baru
daftarProduk.push({
   nama: "Nasi Goreng",
   harga: 20000
});

// 2. Menambahkan properti baru ke object usaha
usaha.instagram = "@namausaha";

// 3. Perhitungan baru: total harga semua produk
const totalHarga = daftarProduk.reduce(function(total, produk) {
   return total + produk.harga;
}, 0);

console.log(
   ===== MODIFIKASI USAHA =====
   Instagram     : ${usaha.instagram}
   Jumlah Produk : ${daftarProduk.length}
   Total Harga   : Rp ${totalHarga}
);

/*
Jawabannya

1. Bagian yang harus ditambahkan atau diubah:
   a. Menambahkan produk baru ke array daftarProduk menggunakan push().
      Contohnya, menambahkan produk Nasi Goreng dengan harga Rp20000.
   b. Menambahkan properti instagram ke object usaha dengan nilai "@namausaha".
   c. Menambahkan perhitungan baru, misalnya total harga semua produk menggunakan reduce().
   Bagian yang tidak perlu diubah:
   a. Struktur object usaha tidak perlu dibuat ulang karena kita bisa langsung menambahkan properti instagram ke dalamnya.
   b. Struktur array daftarProduk juga tidak perlu diubah karena produk baru tetap menggunakan format { nama, harga }.
   c. Rumus perhitungan pajak tidak perlu diubah karena rumusnya masih sama, yaitu harga * (1 + tarifPajak).
   Alasannya, kode yang dibuat sudah cukup fleksibel. Kita bisa menambahkan produk atau properti baru tanpa harus menulis ulang
   seluruh program. Namun, kalau ingin hasil total harga, jumlah produk, harga termurah, dan harga termahal ikut menyesuaikan,
   perhitungannya harus dijalankan kembali setelah data diubah.

2. Contoh statement pertama:
   daftarProduk.push({
   nama: "Nasi Goreng",
   harga: 20000
   });
   Penjelasannya, ini termasuk statement karena merupakan perintah untuk menambahkan produk baru ke dalam array daftarProduk.
   Contoh statement kedua:
   usaha.instagram = "@namausaha";
   Penjelasannya, ini termasuk statement karena merupakan perintah untuk menambahkan atau mengubah nilai properti instagram pada object usaha.
   Contoh expression pertama:
   usaha.nama
   Hasilnya: "Kopi Senja"
   Penjelasannya, Expression di atas mengambil nilai properti nama dari object usaha.
   Contoh expression kedua:
   20000 * (1 + 0.11)
   Hasilnya: 22200
   Penjelasannya, Expression di atas menghitung harga Rp20.000 setelah ditambah pajak 11%, sehingga hasilnya Rp22.200.
   Kesimpulannya, statement adalah perintah yang dijalankan oleh program, sedangkan expression adalah bagian kode yang menghasilkan suatu nilai.
*/
// === LANGKAH 1 ===

console.log(7 + 3 * 2);
// Tebakan: 13 ✔, alasannya karena karena perkalian lebih didahulukan dari penjumlahan.
// Hasil Asli: 13 ✔
console.log((7 + 3) * 2);
// Tebakan: 20 ✔, alasannya karena penjumlahan di dalam kurung lebih didahulukan dari perkalian.
// Hasil Asli: 20 ✔
console.log(17 % 5);
// Tebakan: 2 ✔, alasannya karena 17 dibagi 5 = 3 sisa 2.
// Hasil Asli: 2 ✔
console.log(2 ** 3);
// Tebakan: 8 ✔, alsannya karena 2 pangkat 3 = 8.
// Hasil Asli: 8 ✔
console.log(5 == "5");
// Tebakan: true ✔, alasannya karena angka 5 dan string "5" dianggap sama karena nilainya mirip.
// Hasil Asli: true ✔
console.log(5 === "5");
// Tebakan: false ✔, alasannya karena perbedaan tipe, yaitu Number dan String
// Hasil Asli: false ✔
console.log(true && false);
// Tebakan: false ✔, alasannya karena && mengharuskan semuanya sama, sedangkan disitu tidak.
// Hasil Asli: false ✔
console.log(true || false);
// Tebakan: true ✔, alasannya karena ada yang harus dibandingkan.
// Hasil Asli: true ✔
console.log(!true);
// Tebakan: false ✔, alasannya karena kebalikan true ialah false.
// Hasil Asli: false ✔
console.log(10 > 5 && 3 > 8);
//Tebakan: false ✔, alasannya karena pada (10 > 5) itu true dan (3 > 8) itu false, sedangkan && menuntut sama semuanya.
// Hasil Asli: false ✔

/*
Jawabannya
1. Tidak Ada
2. Karena perkalian lebih didahulukan daripada penjumlahan
3. Karena '5 == "5"' merupakan Perbandingan Longgar, sedangkan '5 === "5"'
*/


// === LANGKAH 2 ===

const hargaKopi = 18000;
const hargaTeh = 7500;

let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = 51000; // FIX: Mengganti dari string menjadi number

// Total 2 kopi + 2 teh. Seharusnya: 51000
let totalPesanan = (hargaKopi * 2) + (hargaTeh * 2);
// FIX: Mengkalikan masing-masing harga dengan jumlah barang

// Uang diterima sama persis dengan total? Seharusnya: true
let uangPas = uangDiterima === totalPesanan;
// FIX: Mengganti dari == menjadi === setelah kedua nialinya sama-sama bernilai bertipe number

// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
jumlahMember += 1;
// FIX: Mengganti dari + menjadi += agar nilai jumlahMember benar-benar bertambah

// Dapat diskon jika sudah member ATAU total lebih dari 100000
let dapatDiskon = sudahMember || totalPesanan > 100000;
// FIX: Mengganti && menjadi || sesuai ketentuan ATAU

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);

// Hasil:
// 51000 true 6 true

/*
Jawabannya
1. Kesalahannya yaitu:
   a. uangDiterima bertipe string, jadi diganti menjadi number agar bisa dibandingkan dengan ===.
   b. rumus total yang hanya menghitung 2 kopi + 2 teh, jadi diperbaiki menjadi (hargaKopi * 2) + (hargaTeh * 2).
   c. operator perbandingan bertipe Perbandingan Longgar, jadi diganti menjadi ke Perbandingan Ketat.
   d. jumlahMember + 1 tidak menyimpan perubahan, jadi diperbaiki menjadi jumlahMember += 1.
   e. memakai &&, padahal syarat diskon menggunakan ATAU, jadi diganti dengan ||.

2. Hal ini terjadi karena pada uangDiterima bertipe String, makanya hasilnya false. Agar hasilnya true, maka ubah uangDiterima menjadi number.
3. && berarti kedua kondisi harus true. Contohnya, sudahMember && totalPesanan > 100000 akan false karena total pesanan tidak lebih dari 100000.
   Sedangkan || cukup membutuhkan salah satu kondisi true. Karena sudahMember bernilai true, dapatDiskon menjadi true.
*/


// === LANGKAH 3 ===

const namaBarang = "Kopi Susu";
const hargaSatuan = 18000;
const TARIF_PAJAK = 0.11;

let jumlahBeli = 4;
let uangDibayar = 100000;

// Menghitung subtotal
let subtotal = hargaSatuan * jumlahBeli;

// Menghitung pajak
let pajak = subtotal * TARIF_PAJAK;

// Menghitung total pembayaran
let totalBayar = subtotal + pajak;

// Operator penugasan ringkas pertama
let potongan = 2000;
totalBayar -= potongan;

// Operator penugasan ringkas kedua
let biayaKemasan = 1000;
totalBayar += biayaKemasan;

// Menghitung kembalian
let kembalian = uangDibayar - totalBayar;

// Boolean 1: Apakah uang cukup?
let uangCukup = uangDibayar >= totalBayar;

// Boolean 2: Apakah pembelian mendapat gratis kantong?
let gratisKantong = subtotal >= 100000 || jumlahBeli >= 5;

// Boolean 3: Apakah jumlah beli genap?
let jumlahGenap = jumlahBeli % 2 === 0;

// Contoh penggunaan tanda kurung
let contohDenganKurung = (10 + 5) * 2;
let contohTanpaKurung = 10 + 5 * 2;

// Menampilkan hasil
console.log("===== STRUK PEMBELIAN =====");
console.log("Barang       :", namaBarang);
console.log("Harga satuan : Rp" + hargaSatuan);
console.log("Jumlah       :", jumlahBeli);
console.log("Subtotal     : Rp" + subtotal);
console.log("Pajak (11%)  : Rp" + pajak);
console.log("Potongan     : Rp" + potongan);
console.log("Biaya kemasan: Rp" + biayaKemasan);
console.log("Total bayar  : Rp" + totalBayar);
console.log("Uang dibayar : Rp" + uangDibayar);
console.log("Kembalian    : Rp" + kembalian);

console.log("Uang cukup?  :", uangCukup);
console.log("Gratis kantong?", gratisKantong);
console.log("Jumlah genap?:", jumlahGenap);

console.log("Dengan kurung:", contohDenganKurung);
console.log("Tanpa kurung :", contohTanpaKurung);

/*
Jawabannya
1. Variabel uangCukup digunakan untuk mengecek apakah uang yang dibayar pelanggan cukup untuk membayar total.
   Hasilnya true karena uang dibayar Rp100.000, sedangkan total bayar Rp79.720.

2. Pada gratisKantong, operator || bisa diganti dengan &&. Sebelum diganti, hasilnya true karena jumlah beli 4 gelas
   memenuhi kondisi jumlahBeli >= 5? Tidak, tetapi subtotal mencapai Rp72.000? Tidak juga. Jadi hasil yang benar untuk
   nilai contoh ini sebenarnya false. Setelah diganti menjadi &&, hasilnya juga false karena kedua kondisi tidak terpenuhi.

3. Dengan kurung, (10 + 5) * 2 menghasilkan 30. Tanpa kurung, 10 + 5 * 2 menghasilkan 20 karena perkalian dikerjakan lebih dulu.
*/


// === BONUS ===

let totalMenit = 250;

let jam = Math.floor(totalMenit / 60);
let menit = totalMenit % 60;

console.log("250 menit =", jam, "jam", menit, "menit");

/*
Jawabannya: Operator / digunakan untuk membagi total menit dengan 60.
            Math.floor() membulatkan hasil pembagian ke bawah agar mendapatkan jumlah jam penuh.
            Operator % digunakan untuk mendapatkan sisa menit setelah dikurangi jam penuh.
Hasil: 250 menit = 4 jam 10 menit
*/
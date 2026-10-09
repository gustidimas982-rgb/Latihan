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

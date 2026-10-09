# Tugas Day 28: Kasir Warung dengan Operator

**Materi:** Operator JavaScript (aritmatika, penugasan, perbandingan, logika, urutan prioritas)
**Bentuk tugas:** Satu file `tugas_day_28.js`, berisi praktik coding dan penjelasan singkat
**Total nilai:** 100 (+ bonus 5)

---

## Gambaran Tugas

Kamu membantu sebuah warung membuat program kasir sederhana. Ada 3 langkah yang dikerjakan **berurutan di satu file**:

1. **Tebak dulu, baru cek:** menebak hasil operator.
2. **Perbaiki kode yang salah:** ada 4 kesalahan kecil.
3. **Bikin kasir sendiri:** program kecil dari nol.

Tidak perlu terburu-buru. Kerjakan satu langkah sampai selesai, baru lanjut.

---

## Aturan Pengerjaan

- Ketik kode sendiri, jangan copy-paste dari teman.
- Jalankan di **Console browser** (F12 → Console) atau lewat file `.html`.
- Pakai `let` dan `const` saja (**tanpa `var`**).
- Nama variabel pakai **camelCase** (contoh: `totalBelanja`). Konstanta pakai **HURUF_BESAR** (contoh: `TARIF_PAJAK`).
- Penjelasan ditulis sebagai **komentar** di bawah kodenya, dengan **bahasa sendiri**, cukup **1–2 kalimat**.
- Jika bingung, tulis apa yang kamu pahami dulu. Jawaban yang jujur dan mendekati benar tetap dihargai.

**Pengumpulan:** push ke Git repository masing-masing.

```
tugas-day-28/
├── tugas_day_28.js
└── README.md   ← nama kamu + 1 hal yang kamu pelajari + 1 hal yang masih membingungkan
```

Commit minimal **3 kali** (misalnya setelah selesai tiap langkah) dengan pesan yang jelas, seperti `selesai langkah 1: tebak operator`.

Terlambat mengumpulkan: nilai dikurangi 10% per hari, maksimal 3 hari.

---

## Langkah 1: Tebak Dulu, Baru Cek (20 poin)

Salin kode di bawah ke `tugas_day_28.js`. Untuk **setiap baris**:

1. **Tulis tebakanmu** di komentar **sebelum** menjalankan kode.
2. Jalankan, lalu tulis **hasil aslinya**.

```javascript
console.log(7 + 3 * 2);
console.log((7 + 3) * 2);
console.log(17 % 5);
console.log(2 ** 3);
console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(10 > 5 && 3 > 8);
```

Contoh format:

```javascript
// Tebakan: 13
// Hasil asli: 13 ✔
console.log(7 + 3 * 2);
```

**Pertanyaan** (jawab di komentar):

1. Untuk tebakan yang **meleset**, tulis kenapa hasilnya begitu. Jika semua benar, tulis tebakan yang menurutmu paling sulit dan alasannya.
2. Kenapa `7 + 3 * 2` hasilnya `13`, bukan `20`?
3. Kenapa `5 == "5"` hasilnya `true`, tetapi `5 === "5"` hasilnya `false`?

> **Tips:** `%` adalah sisa bagi. `17 % 5` artinya 17 dibagi 5 = 3, sisa 2.

---

## Langkah 2: Perbaiki 4 Kesalahan (25 poin)

Salin kode di bawah di bawah Langkah 1. Kode ini punya **4 kesalahan**. Komentar `Seharusnya` memberi tahu hasil yang benar.

```javascript
const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = "51000";

// Total 2 kopi + 2 teh. Seharusnya: 51000
let totalPesanan = hargaKopi + hargaTeh * 2;

// Uang diterima sama persis dengan total? Seharusnya: true
let uangPas = uangDiterima == totalPesanan;

// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
jumlahMember + 1;

// Dapat diskon jika sudah member ATAU total lebih dari 100000. Seharusnya: true
let dapatDiskon = sudahMember && totalPesanan > 100000;

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);
```

**Yang dikerjakan:**

1. Perbaiki ke-4 kesalahan. Tandai tiap perbaikan dengan komentar `// FIX: ...`.
2. Pastikan hasil akhirnya sesuai komentar `Seharusnya`: `51000 true 6 true`.

**Pertanyaan** (jawab di komentar):

1. Tulis 4 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
2. Jika kamu mengganti `==` menjadi `===` pada `uangPas`, ternyata hasilnya `false`. Kenapa? Apa yang harus diubah supaya hasilnya `true`?
3. Apa beda `&&` dan `||`? Jelaskan dengan contoh dari kode `dapatDiskon`.

> **Tips:** Kesalahan nomor 3 tidak menimbulkan error, tapi nilainya tidak berubah. Perhatikan: apakah ada tanda `=` di sana?

---

## Langkah 3: Bikin Kasir Sendiri (35 poin)

Buat program kasir kecil di bagian paling bawah file. Pilih sendiri barang yang dijual (bebas, misalnya nasi goreng, kopi, atau kaos).

**Yang harus ada:**

| No | Syarat | Poin |
|----|--------|------|
| 1 | Variabel `const` untuk: nama barang, harga satuan, dan `TARIF_PAJAK` (0.11) | 4 |
| 2 | Variabel `let` untuk: jumlah beli dan uang dibayar | 3 |
| 3 | Hitung `subtotal` (harga × jumlah), `pajak`, dan `totalBayar` | 5 |
| 4 | Pakai **minimal 2 operator penugasan ringkas** (`+=`, `-=`, atau `*=`). Contoh: kurangi total dengan potongan memakai `totalBayar -= potongan` | 3 |
| 5 | Hitung `kembalian` (uang dibayar dikurangi total bayar) | 2 |
| 6 | Pakai `%` untuk mengecek apakah jumlah beli **genap**: `jumlahBeli % 2 === 0` | 2 |
| 7 | Buat **3 variabel Boolean** dari operator perbandingan dan logika (lihat contoh di bawah) | 5 |
| 8 | Tampilkan semua hasil dengan `console.log` yang rapi | 2 |
| 9 | Pakai `()` minimal 1 kali agar urutan hitungan jelas | 3 |

**Contoh 3 variabel Boolean** (boleh pakai ide sendiri):

```javascript
let uangCukup = uangDibayar >= totalBayar;
let gratisKantong = subtotal >= 100000 || jumlahBeli >= 5;
let jumlahGenap = jumlahBeli % 2 === 0;
```

**Contoh bentuk output** (isi bebas):

```
Barang      : Nasi Goreng
Jumlah      : 3
Subtotal    : 60000
Pajak (11%) : 6600
Total bayar : 66600
Uang dibayar: 70000
Kembalian   : 3400
Uang cukup? : true
Jumlah genap? : false
```

**Pertanyaan** (jawab di komentar):

1. Pilih **satu** variabel Boolean buatanmu. Jelaskan artinya dengan kata-kata sendiri. Apa hasilnya sekarang, dan kenapa?
2. Coba ganti `&&` menjadi `||` (atau sebaliknya) di salah satu Boolean-mu. Apakah hasilnya berubah? Tulis hasil sebelum dan sesudah, lalu jelaskan.
3. Tulis satu contoh di programmu di mana tanda kurung `()` mengubah hasil perhitungan. Apa hasilnya **dengan** kurung dan **tanpa** kurung?

---

## Bonus (+5 poin)

Ubah **250 menit** menjadi "berapa jam dan berapa menit" memakai `/` dan `%`. Karena `/` menghasilkan desimal, cari tahu cara membulatkannya ke bawah (petunjuk: `Math.floor()`). Cetak hasilnya, misalnya `4 jam 10 menit`. Jelaskan secara singkat peran `/` dan `%` di sini.

---

## Penilaian

### Ringkasan Nilai

| Komponen | Nilai Maks |
|----------|-----------|
| Langkah 1: Tebak dulu, baru cek | 20 |
| Langkah 2: Perbaiki 4 kesalahan | 25 |
| Langkah 3: Bikin kasir sendiri | 35 |
| Kerapian kode, komentar, dan commit | 20 |
| **Total** | **100** |
| Bonus | +5 |

Nilai akhir tidak lebih dari 100.

### Aspek Penilaian Langkah 1 dan 2

| Aspek | Bobot |
|-------|-------|
| Kode benar dan berjalan | 60% |
| Penjelasan benar dan memakai bahasa sendiri | 40% |

Langkah 3 dinilai berdasarkan tabel syarat (kode, 29 poin), ditambah 6 poin untuk 3 pertanyaan penjelasan (masing-masing 2 poin).

### Kerapian Kode dan Pengumpulan (20 poin)

| Aspek | Poin |
|-------|------|
| `let` / `const` dipilih tepat, tidak ada `var` | 4 |
| Nama variabel jelas dan memakai camelCase | 4 |
| Komentar membantu (menjelaskan *mengapa*, bukan hanya *apa*) | 4 |
| Kode rapi, titik koma konsisten | 4 |
| Commit minimal 3 kali dan `README.md` terisi | 4 |

---

## Daftar Periksa Sebelum Dikumpulkan

- [ ] Tebakan di Langkah 1 ditulis **sebelum** kode dijalankan
- [ ] Ke-4 kesalahan di Langkah 2 sudah diperbaiki, dan hasilnya `51000 true 6 true`
- [ ] Kasir di Langkah 3 memenuhi semua 9 syarat
- [ ] Semua pertanyaan dijawab di komentar dengan bahasa sendiri
- [ ] Tidak ada `var`, tidak ada error di console
- [ ] Sudah di-*push* ke repository dan `README.md` terisi

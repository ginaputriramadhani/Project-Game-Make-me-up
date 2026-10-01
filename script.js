// ambil elemen tombol start dari HTML
const startButton = document.getElementById("start-button");

// ambil setiap screen dari HTML
const header = document.querySelector("header");
const startScreen = document.getElementById("start-screen");
const makeupScreen = document.getElementById("makeup-screen");
const hairScreen = document.getElementById("hair-screen");
const outfitScreen = document.getElementById("outfit-screen");
const resultScreen = document.getElementById("result-screen");

// menampilkan start screen saat website dibuka
startScreen.style.display = "flex";

// sembunyikan semua screen lainnya saat website dibuka
makeupScreen.style.display = "none";
hairScreen.style.display = "none";
outfitScreen.style.display = "none";
resultScreen.style.display = "none";

// tambahkan event listener pada tombol start
startButton.addEventListener("click", function() {
    // sembunyikan start screen
    startScreen.style.display = "none";
    // sembunyikan header
    header.style.display = "none";
    // tampilkan makeup screen
    makeupScreen.style.display = "block";
});

// menyimpan pilihan makeup
let selectedMakeup = "";

//BAGIAN MAKEUP SOFT PINK
// ambil tombol soft pink
const softPinkButton = document.querySelector('[data-makeup="soft-pink"]');

// jalankan fungsi saat tombol soft pink diklik
softPinkButton.addEventListener("click", function() {
    // simpan pilihan makeup
    selectedMakeup = "soft-pink";
    //ubah tampilan karakter sesuai pilihan makeup
    document.getElementById("karakter-makeup").src = "soft pink.png";
    // sembunyikan makeup screen
    makeupScreen.style.display = "none";
    // tampilkan hair screen
    hairScreen.style.display = "block";
    // bawa tampilan soft pink ke hair screen
    document.getElementById("karakter-hair").src = "softpink.png";
});


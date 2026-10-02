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
    //jalankan animasi saat masuk makeup screen
    animateScreen(makeupScreen);
});

// menyimpan pilihan makeup
let selectedMakeup = "";
let selectedHair = "";

//Membuat efek animasi saat screen ditampilkan
function animateScreen(screen) {
    screen.classList.remove("screen-animate");
    // ulang animasi tiap screen
    void screen.offsetWidth;
    screen.classList.add("screen-animate");
}

//BAGIAN MAKEUP SOFT PINK
// ambil tombol soft pink
const softPinkButton = document.querySelector('[data-makeup="soft-pink"]');

// jalankan fungsi saat tombol soft pink diklik
softPinkButton.addEventListener("click", function() {
    // simpan pilihan makeup
    selectedMakeup = "soft-pink";
    //ubah tampilan karakter sesuai pilihan makeup
    document.getElementById("karakter-makeup").src = "softpink.png";
    // sembunyikan makeup screen
    makeupScreen.style.display = "none";
    // tampilkan hair screen
    hairScreen.style.display = "block";
    // bawa tampilan soft pink ke hair screen
    document.getElementById("karakter-hair").src = "softpink.png";
    //jalankan animasi saat masuk hair screen
    animateScreen(hairScreen);
});


//BAGIAN MAKEUP SOFT RED GLAM
// ambil tombol soft red glam
const softRedGlamButton = document.querySelector('[data-makeup="soft-red"]');

// jalankan fungsi saat tombol soft red glam diklik
softRedGlamButton.addEventListener("click", function() {
    // simpan pilihan makeup
    selectedMakeup = "soft-red-glam";
    //ubah tampilan karakter sesuai pilihan makeup
    document.getElementById("karakter-makeup").src = "soft glam.png";
    // sembunyikan makeup screen
    makeupScreen.style.display = "none";
    // tampilkan hair screen
    hairScreen.style.display = "block";
    // bawa tampilan soft red glam ke hair screen
    document.getElementById("karakter-hair").src = "soft glam.png";
    //jalankan animasi saat masuk hair screen
    animateScreen(hairScreen);
});

//BAGIAN HAIR DOWN
// ambil tombol hair down
const hairDownButton = document.querySelector('[data-hair="long"]');

// jalankan fungsi saat tombol hair down diklik
hairDownButton.addEventListener("click", function() {
    // cek makeup yang  sebelumnya dipilih
    if (selectedMakeup === "soft-pink") {
        //ubah tampilan karakter sesuai pilihan hair dan makeup
        document.getElementById("karakter-outfit").src = "softpink, long.png";
        // menyimpan pilihan hair
        selectedHair = "long";
        // sembunyikan hair screen
        hairScreen.style.display = "none";
        // tampilkan outfit screen
        outfitScreen.style.display = "block";
        // bawa tampilan soft pink dan hair down ke outfit screen
        document.getElementById("karakter-outfit").src = "softpink, long.png";
        //jalankan animasi saat masuk outfit screen
        animateScreen(outfitScreen); 
    } else {
        //ubah tampilan karakter sesuai pilihan hair dan makeup
        document.getElementById("karakter-outfit").src = "softglam, long.png";
        // menyimpan pilihan hair
        selectedHair = "long";
        // sembunyikan hair screen
        hairScreen.style.display = "none";
        // tampilkan outfit screen
        outfitScreen.style.display = "block";
        // bawa tampilan soft red glam dan hair down ke outfit screen
        document.getElementById("karakter-outfit").src = "softglam, long.png";
        //jalankan animasi saat masuk outfit screen
        animateScreen(outfitScreen);
    }
});


//BAGIAN HIGH BUN
// ambil tombol high bun
const highBunButton = document.querySelector('[data-hair="short"]');

// jalankan fungsi saat tombol high bun diklik
highBunButton.addEventListener("click", function() {
    // cek makeup yang  sebelumnya dipilih
    if (selectedMakeup === "soft-pink") {
        //ubah tampilan karakter sesuai pilihan hair dan makeup
        document.getElementById("karakter-outfit").src = "softpink, short.png";
        // menyimpan pilihan hair
        selectedHair = "short";
        // sembunyikan hair screen
        hairScreen.style.display = "none";
        // tampilkan outfit screen
        outfitScreen.style.display = "block";
        // bawa tampilan soft pink dan high bun ke outfit screen
        document.getElementById("karakter-outfit").src = "softpink, short.png";  
        //jalankan animasi saat masuk outfit screen
        animateScreen(outfitScreen);  
    } else {
        //ubah tampilan karakter sesuai pilihan hair dan makeup
        document.getElementById("karakter-outfit").src = "softglam, short.png";
        // menyimpan pilihan hair
        selectedHair = "short";
        // sembunyikan hair screen
        hairScreen.style.display = "none";
        // tampilkan outfit screen
        outfitScreen.style.display = "block";
        // bawa tampilan soft red glam dan high bun ke outfit screen
        document.getElementById("karakter-outfit").src = "softglam, short.png";
        //jalankan animasi saat masuk outfit screen
        animateScreen(outfitScreen);
    }
});

// BAGIAN PINK OUTFIT
// ambil tombol pink outfit
const pinkOutfitButton = document.querySelector('[data-outfit="pink"]');

// jalankan fungsi saat tombol pink outfit diklik
pinkOutfitButton.addEventListener("click", function() {
    // cek makeup yang  sebelumnya dipilih
    if (selectedMakeup === "soft-pink") {
        //cek hair yang sebelumnya dipilih
        if (selectedHair === "long") {
            //ubah tampilan karakter sesuai pilihan outfit, hair, dan makeup
            document.getElementById("karakter-outfit").src = "softpink, long, outpink.png";
        } else {
            //ubah tampilan karakter sesuai pilihan outfit, hair, dan makeup
            document.getElementById("karakter-outfit").src = "softpink, short, pink outfit.png";
        }
        
    } else {
        //cek hair yang sebelumnya dipilih
        if (selectedHair === "long") {
            //ubah tampilan karakter sesuai pilihan outfit, hair, dan makeup
            document.getElementById("karakter-outfit").src = "softglam, long, pink outfit.png";
        } else {
            //ubah tampilan karakter sesuai pilihan outfit, hair, dan makeup
            document.getElementById("karakter-outfit").src = "softglam, short, pink outfit.png";
        }
    }
    // sembunyikan outfit screen
    outfitScreen.style.display = "none";
    // tampilkan result screen
    resultScreen.style.display = "block";
    // bawa tampilan karakter ke result screen
    document.getElementById("karakter-result").src = document.getElementById("karakter-outfit").src;
    //jalankan animasi saat masuk result screen
    animateScreen(resultScreen);
}); 

// BAGIAN RED OUTFIT
// ambil tombol red outfit
const redOutfitButton = document.querySelector('[data-outfit="red"]');

// jalankan fungsi saat tombol red outfit diklik
redOutfitButton.addEventListener("click", function() {
    // cek makeup yang  sebelumnya dipilih
    if (selectedMakeup === "soft-pink") {
        //cek hair yang sebelumnya dipilih
        if (selectedHair === "long") {
            //ubah tampilan karakter sesuai pilihan outfit, hair, dan makeup
            document.getElementById("karakter-outfit").src = "softpink, long, red outfit.png";
        } else {
            //ubah tampilan karakter sesuai pilihan outfit, hair, dan makeup
            document.getElementById("karakter-outfit").src = "softpink, short, red outfit.png";
        }
        
    } else {
        //cek hair yang sebelumnya dipilih
        if (selectedHair === "long") {
            //ubah tampilan karakter sesuai pilihan outfit, hair, dan makeup
            document.getElementById("karakter-outfit").src = "softglam, long, red outfit.png";
        } else {
            //ubah tampilan karakter sesuai pilihan outfit, hair, dan makeup
            document.getElementById("karakter-outfit").src = "softglam, short, red outfit.png";
        }
    }
    // sembunyikan outfit screen
    outfitScreen.style.display = "none";
    // tampilkan result screen
    resultScreen.style.display = "block";
    // bawa tampilan karakter ke result screen
    document.getElementById("karakter-result").src = document.getElementById("karakter-outfit").src;
    //jalankan animasi saat masuk result screen
    animateScreen(resultScreen);
});

// BAGIAN RESTART
// ambil tombol home
const homeButton = document.getElementById("home-button")

//jalankan fungsi saat tombol home diklik
homeButton.addEventListener("click", function() {
    // sembunyikan result screen
    resultScreen.style.display = "none";
    // tampilkan start screen
    startScreen.style.display = "flex";
    //tampilkan header
    header.style.display = "block";
})

//ambil tombol play again
const playAgainButton = document.getElementById("play-again")

//jalankan fungsi saat tombol play again diklik
playAgainButton.addEventListener("click", function() {
    // kosongkan pilihan makeup dan hair
    selectedMakeup = "";
    selectedHair = "";
    // sembunyikan result screen
    resultScreen.style.display = "none";
    // tampilkan makeup screen
    makeupScreen.style.display = "block";
    //kembalikan tampilan karakter ke base
    document.getElementById("karakter-makeup").src = "base.png";
});



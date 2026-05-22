// script.js

document.getElementById("exploreBtn").addEventListener("click", function () {

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});
// AUTO ACCURATE ISLAMIC DATE

async function loadHijriDate(){

    try{

        const response = await fetch(
        "https://api.aladhan.com/v1/gToH");

        const data = await response.json();

        const hijri =
        data.data.hijri;

        const gregorian =
        data.data.gregorian;

        document.getElementById("hijri-date")
        .innerHTML =
        `${hijri.day} ${hijri.month.en} ${hijri.year} AH`;

        document.getElementById("gregorian-date")
        .innerHTML =
        `${gregorian.weekday.en}, ${gregorian.day} ${gregorian.month.en} ${gregorian.year}`;

    }

    catch(error){

        console.log("Hijri date error");

    }

}

loadHijriDate();
// QURAN VERSE OF THE DAY

const quranVerses = [

    "Indeed, Allah is with the patient. — Surah Al-Baqarah 2:153",

    "And He found you lost and guided you. — Surah Ad-Duha 93:7",

    "So remember Me; I will remember you. — Surah Al-Baqarah 2:152",

    "Indeed, with hardship comes ease. — Surah Ash-Sharh 94:6",

    "Allah is sufficient for us. — Surah Aal-e-Imran 3:173"

];

const randomVerse =
    quranVerses[Math.floor(Math.random() * quranVerses.length)];

document.getElementById("quran-verse").innerHTML = randomVerse;
// HADITH SLIDER

const hadiths = [

    "The best among you are those who learn the Quran and teach it.",

    "Make things easy and do not make them difficult.",

    "Allah does not look at your appearance, but at your hearts.",

    "Speak good or remain silent.",

    "The strong person is the one who controls anger."

];

let hadithIndex = 0;

function changeHadith() {

    document.getElementById("hadith").innerHTML =
        hadiths[hadithIndex];

    hadithIndex++;

    if (hadithIndex >= hadiths.length) {
        hadithIndex = 0;
    }
}
// LOADER

window.addEventListener("load", function(){

    document.getElementById("loader")
    .style.display = "none";

});
changeHadith();

setInterval(changeHadith, 3000);
// TYPING EFFECT

const text =
"Serving The Ummah Since 1998...";

let index = 0;

function typeText(){

    if(index < text.length){

        document.querySelector(".typing-text")
        .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }

}

typeText();

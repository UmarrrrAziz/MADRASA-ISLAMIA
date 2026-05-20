// script.js

document.getElementById("exploreBtn").addEventListener("click", function () {

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});
// ISLAMIC CALENDAR

// ISLAMIC CALENDAR FIXED

const today = new Date();

/* 1 day subtract */
today.setDate(today.getDate() - 1);

const hijriDate = new Intl.DateTimeFormat(
    'en-TN-u-ca-islamic', {

    day: 'numeric',
    month: 'long',
    year: 'numeric'

}).format(today);

const gregorianDate = new Date().toDateString();

document.getElementById("hijri-date").innerHTML =
    hijriDate;

document.getElementById("gregorian-date").innerHTML =
    gregorianDate;
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

changeHadith();

setInterval(changeHadith, 3000);

"use strict";
console.log("Enter prayer name!");
let prayer = "Zuhr";
console.log(prayer);
let Fajr = "Total: 4 rakats (2 Sunnat Mokadda and 2 Fard)";
let Zuhr = "Total: 12 rakats (4 Sunnat Mokadda, 4 Fard, 2 Sunnat Mokadda and 2 Nafl)";
let Asr = "Total: 8 rakats (4 Sunnat Ghair Mokadda and 4 Fard)";
let Maghrib = "Total: 7 rakats (3 Fard, 2 Sunnat Mokadda and 2 Nafl)";
let Isha = "Total: 17 rakats (4 Sunnat Mokadda, 4 Fard, 2 Sunnat Mokadda, 2 Nafl, 3 Witr, 2 Nafl)";
if (prayer === "Fajr") {
    console.log(Fajr);
}
else if (prayer === "Zuhr") {
    console.log(Zuhr);
}
else if (prayer === "Asr") {
    console.log(Asr);
}
else if (prayer === "Maghrib") {
    console.log(Maghrib);
}
else if (prayer === "Isha") {
    console.log(Isha);
}
else {
    console.log("Please enter correct name of prayer!");
}

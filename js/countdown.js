"use strict";

/* ==========================================================
   LOVE STORY PROJECT
   LOVE COUNTER MODULE
========================================================== */

import { CONFIG } from "./config.js";

/* ==========================================================
   ELEMENTS
========================================================== */

const daysElement = document.getElementById("countdown-days");
const hoursElement = document.getElementById("countdown-hours");
const minutesElement = document.getElementById("countdown-minutes");
const secondsElement = document.getElementById("countdown-seconds");

/* ==========================================================
   UPDATE LOVE COUNTER
========================================================== */

function updateCounter() {

    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }

    const startDate = new Date(CONFIG.love.startDate);
    const now = new Date();

    let difference = now.getTime() - startDate.getTime();

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;

    daysElement.textContent =
        days.toLocaleString("vi-VN");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}

/* ==========================================================
   START COUNTER
========================================================== */

function startCounter() {

    updateCounter();

    setInterval(updateCounter, 1000);

}

/* ==========================================================
   INIT
========================================================== */

export function initCountdown() {

    startCounter();

}
"use strict";

/* ==========================================================
   LOVE STORY PROJECT
   APPLICATION
========================================================== */

import { initCountdown } from "./countdown.js";
import { initTimeline } from "./timeline.js";
import { initGallery } from "./gallery.js";
import { initPopup } from "./popup.js";
import { initMusic } from "./music.js";
import { initEffects } from "./effects.js";
import { initLetter } from "./letter.js";

/* ==========================================================
   INIT APPLICATION
========================================================== */

function initApp() {

    initCountdown();

    initTimeline();

    initGallery();

    initPopup();

    initMusic();

    initEffects();

    initLetter();

}

/* ==========================================================
   START
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    initApp

);
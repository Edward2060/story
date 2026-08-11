"use strict";

/* ==========================================================
   LOVE STORY PROJECT
   MUSIC MODULE
========================================================== */

import { CONFIG } from "./config.js";
import { $ } from "./utils.js";

/* ==========================================================
   ELEMENTS
========================================================== */

const audio = $("#background-music");

const musicButton = $("#music-toggle");

const musicIcon = $("#music-icon");

/* ==========================================================
   STATE
========================================================== */

let isPlaying = false;

/* ==========================================================
   SETUP
========================================================== */

function setupAudio() {

    if (!audio) return;

    audio.loop = CONFIG.music.loop;

    audio.volume = CONFIG.music.volume;

}

/* ==========================================================
   UPDATE ICON
========================================================== */

function updateIcon() {

    if (!musicIcon) return;

    musicIcon.textContent =

        isPlaying

            ? "🔊"

            : "🔈";

}

/* ==========================================================
   PLAY
========================================================== */

function playMusic() {

    if (!audio) return;

    audio.play()

        .then(() => {

            isPlaying = true;

            updateIcon();

        })

        .catch(error => {

            console.warn(

                "Cannot autoplay music:",

                error

            );

        });

}

/* ==========================================================
   PAUSE
========================================================== */

function pauseMusic() {

    if (!audio) return;

    audio.pause();

    isPlaying = false;

    updateIcon();

}

/* ==========================================================
   TOGGLE
========================================================== */

function toggleMusic() {

    if (isPlaying) {

        pauseMusic();

    }

    else {

        playMusic();

    }

}
/* ==========================================================
   EVENTS
========================================================== */

function bindEvents() {

    musicButton?.addEventListener(

        "click",

        toggleMusic

    );

}
/* ==========================================================
   INIT
========================================================== */

export function initMusic() {

    setupAudio();

    updateIcon();

    if (

        CONFIG.music.autoplay

    ) {

        playMusic();

    }

    bindEvents();

}
"use strict";

/* ==========================================================
   LOVE STORY PROJECT
   EFFECTS MODULE
========================================================== */

import { $, $$ } from "./utils.js";

/* ==========================================================
   ELEMENTS
========================================================== */

const backToTopButton = $("#back-to-top");

/* ==========================================================
   REVEAL ANIMATION
========================================================== */

function revealElements() {

    const elements = $$(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    elements.forEach(element => {

        observer.observe(element);

    });

}
/* ==========================================================
   BACK TO TOP
========================================================== */

function updateBackToTop() {

    if (!backToTopButton) return;

    if (window.scrollY > 400) {

        backToTopButton.classList.add("show");

    }

    else {

        backToTopButton.classList.remove("show");

    }

}
/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
/* ==========================================================
   SCROLL EVENTS
========================================================== */

function bindScrollEvents() {

    window.addEventListener(

        "scroll",

        updateBackToTop

    );

    backToTopButton?.addEventListener(

        "click",

        scrollToTop

    );

}
/* ==========================================================
   HERO PARALLAX
========================================================== */

function updateHero() {

    const hero = $(".hero");

    if (!hero) return;

    hero.style.backgroundPositionY =

        `${window.scrollY * 0.3}px`;

}
/* ==========================================================
   WINDOW EVENTS
========================================================== */

function bindWindowEvents() {

    window.addEventListener(

        "scroll",

        updateHero

    );

}
/* ==========================================================
   INIT
========================================================== */

export function initEffects() {

    revealElements();

    updateBackToTop();

    bindScrollEvents();

    bindWindowEvents();

}
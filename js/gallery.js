"use strict";

/* ==========================================================
   LOVE STORY PROJECT
   GALLERY MODULE
========================================================== */

import { $, createElement } from "./utils.js";
import { galleryData } from "../data/gallery-data.js";

/* ==========================================================
   ELEMENTS
========================================================== */

const galleryGrid = $("#gallery-grid");
const filterButtons = document.querySelectorAll("[data-filter]");

/* ==========================================================
   STATE
========================================================== */

let currentFilter = "all";

/* ==========================================================
   CREATE CARD
========================================================== */

function createGalleryCard(item) {

    const card = createElement("article", [
        "gallery-card"
    ]);

    card.dataset.id = item.id;
    card.dataset.category = item.category;

    card.innerHTML = `

        <div class="gallery-image">

            <img

                src="${item.thumbnail}"

                alt="${item.title}"

                loading="lazy">

        </div>

        <div class="gallery-info">

            <h3>

                ${item.title}

            </h3>

            <p>

                ${item.description}

            </p>

        </div>

    `;

    return card;

}
/* ==========================================================
   RENDER
========================================================== */

function renderGallery() {

    if (!galleryGrid) return;

    galleryGrid.innerHTML = "";

    const fragment = document.createDocumentFragment();

    galleryData

        .filter(item => {

            return currentFilter === "all"

                || item.category === currentFilter;

        })

        .forEach(item => {

            fragment.appendChild(

                createGalleryCard(item)

            );

        });

    galleryGrid.appendChild(fragment);

}
/* ==========================================================
   FILTER
========================================================== */

function updateFilter(button) {

    filterButtons.forEach(btn => {

        btn.classList.remove("active");

    });

    button.classList.add("active");

    currentFilter =

        button.dataset.filter;

    renderGallery();

}
/* ==========================================================
   EVENTS
========================================================== */

function bindEvents() {

    filterButtons.forEach(button => {

        button.addEventListener(

            "click",

            () => {

                updateFilter(button);

            }

        );

    });

    galleryGrid?.addEventListener(

        "click",

        event => {

            const card =

                event.target.closest(

                    ".gallery-card"

                );

            if (!card) return;

            const id =

                Number(

                    card.dataset.id

                );

            const image =

                galleryData.find(

                    item =>

                        item.id === id

                );

            document.dispatchEvent(

                new CustomEvent(

                    "gallery:select",

                    {

                        detail: image

                    }

                )

            );

        }

    );

}
/* ==========================================================
   INIT
========================================================== */

export function initGallery() {

    renderGallery();

    bindEvents();

}
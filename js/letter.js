"use strict";

/* ==========================================================
   LOVE STORY PROJECT
   LETTER MODULE
========================================================== */

import { $, createElement } from "./utils.js";
import { letterData } from "../data/letter-data.js";

/* ==========================================================
   ELEMENTS
========================================================== */

const letterTitle = $("#letter-title");
const letterAuthor = $("#letter-author");
const letterDate = $("#letter-date");
const letterContent = $("#letter-content");

/* ==========================================================
   RENDER CONTENT
========================================================== */

function renderContent() {

    if (!letterContent) return;

    letterContent.innerHTML = "";

    const fragment = document.createDocumentFragment();

    letterData.content.forEach(text => {

        const paragraph = createElement("p");

        paragraph.textContent = text;

        fragment.appendChild(paragraph);

    });

    letterContent.appendChild(fragment);

}

/* ==========================================================
   RENDER HEADER
========================================================== */

function renderHeader() {

    if (letterTitle) {

        letterTitle.textContent =

            letterData.title;

    }

    if (letterAuthor) {

        letterAuthor.textContent =

            letterData.author;

    }

    if (letterDate) {

        letterDate.textContent =

            letterData.date;

    }

}

/* ==========================================================
   RENDER
========================================================== */

function renderLetter() {

    renderHeader();

    renderContent();

}

/* ==========================================================
   INIT
========================================================== */

export function initLetter() {

    renderLetter();

}
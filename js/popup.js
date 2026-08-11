"use strict";

/* ==========================================================
   LOVE STORY PROJECT
   POPUP MODULE
========================================================== */

import { $ } from "./utils.js";

/* ==========================================================
   ELEMENTS
========================================================== */

const popup = $("#popup");

const popupImage = $("#popup-image");

const popupTitle = $("#popup-title");

const popupDescription = $("#popup-description");

const popupDate = $("#popup-date");

const popupLocation = $("#popup-location");

const popupClose = $("#popup-close");

/* ==========================================================
   OPEN
========================================================== */

function openPopup(item) {

    if (!popup || !item) return;

    popupImage.src =

        item.image;

    popupImage.alt =

        item.title;

    popupTitle.textContent =

        item.title;

    popupDescription.textContent =

        item.description;

    // Gan ngay + dia diem (neu du lieu co)
    if (popupDate) {

        popupDate.textContent = item.date ?? "";

    }

    if (popupLocation) {

        popupLocation.textContent = item.location ?? "";

    }

    popup.classList.add("active");

}
/* ==========================================================
   CLOSE
========================================================== */

function closePopup() {

    popup.classList.remove(

        "active"

    );

}
/* ==========================================================
   TIMELINE EVENT
========================================================== */

function bindTimelineEvent() {

    document.addEventListener(

        "timeline:select",

        event => {

            openPopup(

                event.detail

            );

        }

    );

}
/* ==========================================================
   GALLERY EVENT
========================================================== */

function bindGalleryEvent() {

    document.addEventListener(

        "gallery:select",

        event => {

            openPopup(

                event.detail

            );

        }

    );

}
/* ==========================================================
   CLOSE EVENTS
========================================================== */

function bindCloseEvents() {

    popupClose?.addEventListener(

        "click",

        closePopup

    );

    popup?.addEventListener(

        "click",

        event => {

            if (

                event.target === popup

            ) {

                closePopup();

            }

        }

    );

    document.addEventListener(

        "keydown",

        event => {

            if (

                event.key === "Escape"

            ) {

                closePopup();

            }

        }

    );

}
/* ==========================================================
   INIT
========================================================== */

export function initPopup() {

    bindTimelineEvent();

    bindGalleryEvent();

    bindCloseEvents();

}
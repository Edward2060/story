"use strict";

/* ==========================================================
   LOVE STORY PROJECT
   TIMELINE MODULE
========================================================== */

import { $, createElement } from "./utils.js";
import { timelineData } from "../data/timeline-data.js";

/* ==========================================================
   ELEMENTS
========================================================== */

const timelineList = $("#timeline-list");
const timelineProgress = $("#timeline-progress");

/* ==========================================================
   CREATE CARD
========================================================== */

function createTimelineCard(item) {

    const card = createElement("article", [
        "timeline-card"
    ]);

    card.innerHTML = `

        <div class="timeline-image">

            <img
                src="${item.image}"
                alt="${item.title}"
                loading="lazy">

        </div>

        <div class="timeline-content">

            <span class="timeline-date">

                ${item.icon} ${item.date}

            </span>

            <h3 class="timeline-title">

                ${item.title}

            </h3>

            <p class="timeline-description">

                ${item.description}

            </p>

            <span class="timeline-location">

                📍 ${item.location}

            </span>

        </div>

    `;

    return card;

}

/* ==========================================================
   CREATE ITEM
========================================================== */

function createTimelineItem(item, index) {

    const wrapper = createElement("div", [
        "timeline-item"
    ]);

    wrapper.classList.add(

        index % 2 === 0

            ? "left"

            : "right"

    );

    wrapper.dataset.id = item.id;

    const dot = createElement("span", [
        "timeline-dot"
    ]);

    wrapper.appendChild(dot);

    wrapper.appendChild(

        createTimelineCard(item)

    );

    return wrapper;

}

/* ==========================================================
   RENDER
========================================================== */

function renderTimeline() {

    if (!timelineList) return;

    timelineList.innerHTML = "";

    const fragment = document.createDocumentFragment();

    timelineData.forEach((item, index) => {

        fragment.appendChild(

            createTimelineItem(item, index)

        );

    });

    timelineList.appendChild(fragment);

}

/* ==========================================================
   PROGRESS
========================================================== */

function updateProgress() {

    if (!timelineProgress) return;

    const maxScroll =

        document.documentElement.scrollHeight

        - window.innerHeight;

    const percent =

        (window.scrollY / maxScroll) * 100;

    timelineProgress.style.height =

        `${percent}%`;

}

/* ==========================================================
   EVENTS
========================================================== */

function bindEvents() {

    if (!timelineList) return;

    timelineList.addEventListener("click", event => {

        const item =

            event.target.closest(

                ".timeline-item"

            );

        if (!item) return;

        const id = Number(

            item.dataset.id

        );

        const data =

            timelineData.find(

                timeline =>

                    timeline.id === id

            );

        document.dispatchEvent(

            new CustomEvent(

                "timeline:select",

                {

                    detail: data

                }

            )

        );

    });

    window.addEventListener(

        "scroll",

        updateProgress

    );

}

/* ==========================================================
   INIT
========================================================== */

export function initTimeline() {

    renderTimeline();

    updateProgress();

    bindEvents();

}
"use strict";

/* ==========================================================
   LOVE STORY PROJECT
   UTILITY FUNCTIONS
========================================================== */

/**
 * Lấy phần tử đầu tiên.
 *
 * @param {string} selector
 * @param {ParentNode} parent
 * @returns {Element|null}
 */
export function $(selector, parent = document) {

    return parent.querySelector(selector);

}

/**
 * Lấy danh sách phần tử.
 *
 * @param {string} selector
 * @param {ParentNode} parent
 * @returns {Element[]}
 */
export function $$(selector, parent = document) {

    return [...parent.querySelectorAll(selector)];

}

/**
 * Tạo phần tử HTML.
 *
 * @param {string} tag
 * @param {string[]} classNames
 * @returns {HTMLElement}
 */
export function createElement(tag, classNames = []) {

    const element = document.createElement(tag);

    if (classNames.length) {

        element.classList.add(...classNames);

    }

    return element;

}

/**
 * Thêm sự kiện.
 */
export function on(element, event, handler) {

    element.addEventListener(event, handler);

}

/**
 * Xóa sự kiện.
 */
export function off(element, event, handler) {

    element.removeEventListener(event, handler);

}

/**
 * Thêm class.
 */
export function addClass(element, className) {

    element.classList.add(className);

}

/**
 * Xóa class.
 */
export function removeClass(element, className) {

    element.classList.remove(className);

}

/**
 * Toggle class.
 */
export function toggleClass(element, className) {

    element.classList.toggle(className);

}
/**
 * Giới hạn giá trị.
 */
export function clamp(value, min, max) {

    return Math.min(

        Math.max(value, min),

        max

    );

}

/**
 * Random số.
 */
export function random(min, max) {

    return Math.random() * (max - min) + min;

}

/**
 * Format 2 chữ số.
 */
export function formatNumber(number) {

    return String(number).padStart(2, "0");

}
/**
 * Debounce
 */
export function debounce(callback, delay = 300) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/**
 * Throttle
 */
export function throttle(callback, delay = 100) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, delay);

    };

}
/**
 * Sleep
 */
export function sleep(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}
/**
 * Scroll mượt.
 */
export function scrollToElement(target) {

    target.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}
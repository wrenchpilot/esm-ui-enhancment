// ==UserScript==
// @name         ESM Fix Max Height
// @namespace    http://greasemonkey.net/
// @version      1.9
// @description  Remove max-height from ESM grids.
// @author       JSC
// @include      
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    const ADMIN_DIV_SCROLL = '.admin-div-scroll';
    const CSS_GRID = '.css-grid';
    const ADMIN_ENV_SERVERS = '#admin-env-servers';

    const selectors = [ADMIN_DIV_SCROLL, CSS_GRID, ADMIN_ENV_SERVERS];

    const removeMaxHeight = () => {
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.style.setProperty('max-height', 'none', 'important');
            });
        });
    };

    const observer = new MutationObserver(removeMaxHeight);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });

    // Initial call to remove max-height on page load
    removeMaxHeight();

})();

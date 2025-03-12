// ==UserScript==
// @name         ESM Fix Max Height
// @namespace    http://greasemonkey.net/
// @version      1.7
// @description  Remove max-height from .admin-div-scroll and .css-grid
// @author       JSC
// @include      
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const selectors = ['.admin-div-scroll', '.css-grid', '#admin-env-servers'];
    
    function removeMaxHeight(selector) {
        document.querySelectorAll(selector).forEach(el => {
            el.style.setProperty('max-height', 'none', 'important');
        });
    }

    function applyFixes() {
        selectors.forEach(removeMaxHeight);
    }

    applyFixes();

    const observer = new MutationObserver(applyFixes);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });

})();

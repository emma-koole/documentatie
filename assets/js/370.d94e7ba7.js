'use strict';
exports.id = 370;
exports.ids = [370];
exports.modules = {
 /***/ 13707: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ c: () => /* binding */ clsx,
   /* harmony export */
  });
  function r(e) {
   var t,
    f,
    n = '';
   if ('string' == typeof e || 'number' == typeof e) n += e;
   else if ('object' == typeof e)
    if (Array.isArray(e)) {
     var o = e.length;
     for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += ' '), (n += f));
    } else for (f in e) e[f] && (n && (n += ' '), (n += f));
   return n;
  }
  function clsx() {
   for (var e, t, f = 0, n = '', o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += ' '), (n += t));
   return n;
  }

  //# sourceMappingURL=clsx-eca3fadc.js.map

  /***/
 },

 /***/ 50370: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_pagination: () => /* binding */ Pagination,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80830);
  /* harmony import */ var _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13707);

  const paginationCss = '.utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-pagination{font-family:var(--utrecht-pagination-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-pagination-font-size, var(--utrecht-document-font-family));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-start, 0))}.utrecht-pagination--distanced{--utrecht-space-around:1}.utrecht-pagination__relative-link{background-color:var(--utrecht-pagination-relative-link-background-color);border-color:var(--utrecht-pagination-relative-link-border-color);border-radius:var(--utrecht-pagination-relative-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-relative-link-border-width, 0);color:var(--utrecht-pagination-relative-link-color);display:inline-block;font-weight:var(--utrecht-pagination-relative-link-font-weight);padding-block-end:var(--utrecht-pagination-relative-link-padding-block-end);padding-block-start:var(--utrecht-pagination-relative-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-relative-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-relative-link-padding-inline-start);text-decoration:var(--utrecht-pagination-relative-link-text-decoration);text-transform:var(--utrecht-pagination-relative-link-text-transform)}.utrecht-pagination__relative-link--next{margin-inline-start:var(--utrecht-pagination-relative-link-distanced-margin-inline-start)}.utrecht-pagination__relative-link--prev{margin-inline-end:var(--utrecht-pagination-relative-link-distanced-margin-inline-end)}.utrecht-pagination__relative-link--disabled{background-color:var(--utrecht-pagination-relative-link-disabled-background-color, var(--utrecht-pagination-relative-link-background-color));color:var(--utrecht-pagination-relative-link-disabled-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__relative-link--hover,.utrecht-pagination__relative-link:hover{background-color:var(--utrecht-pagination-relative-link-hover-background-color, var(--utrecht-pagination-relative-link-background-color));border-color:var(--utrecht-pagination-relative-link-hover-border-color, var(--utrecht-pagination-relative-link-border-color));color:var(--utrecht-pagination-relative-link-hover-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__page-link{background-color:var(--utrecht-pagination-page-link-background-color);border-color:var(--utrecht-pagination-page-link-border-color, 0);border-radius:var(--utrecht-pagination-page-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-page-link-border-width);color:var(--utrecht-pagination-page-link-color);display:inline-block;font-weight:var(--utrecht-pagination-page-link-font-weight);padding-block-end:var(--utrecht-pagination-page-link-padding-block-end);padding-block-start:var(--utrecht-pagination-page-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-page-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-page-link-padding-inline-start);text-decoration:var(--utrecht-pagination-page-link-text-decoration)}.utrecht-pagination__page-link--current{--utrecht-pagination-page-link-background-color:var(--utrecht-pagination-page-link-current-background-color);--utrecht-pagination-page-link-border-color:var(--utrecht-pagination-page-link-current-border-color);--utrecht-pagination-page-link-color:var(--utrecht-pagination-page-link-current-color)}.utrecht-pagination__page-link~.utrecht-pagination__page-link{margin-inline-start:var(--utrecht-pagination-page-link-distanced-margin-inline-start)}.utrecht-pagination__page-link--hover,.utrecht-pagination__page-link:hover{background-color:var(--utrecht-pagination-page-link-hover-background-color, var(--utrecht-pagination-page-link-background-color));border-color:var(--utrecht-pagination-page-link-hover-border-color, var(--utrecht-pagination-page-link-border-color));color:var(--utrecht-pagination-page-link-hover-color, var(--utrecht-pagination-page-link-color))}.utrecht-pagination__page-link:focus,.utrecht-pagination__relative-link:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination__page-link:focus:not(:focus-visible),.utrecht-pagination__relative-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}';
  const UtrechtPaginationStyle0 = paginationCss;

  const Pagination = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.links = undefined;
    this.next = undefined;
    this.prev = undefined;
    this.currentIndex = undefined;
   }
   render() {
    const { currentIndex } = this;
    const links = typeof this.links === 'string' ? JSON.parse(this.links) : null;
    const next = typeof this.next === 'string' ? JSON.parse(this.next) : null;
    const prev = typeof this.prev === 'string' ? JSON.parse(this.next) : null;
    const RelativeLink = ({ disabled = false, href = '', rel = null, textContent = '', title = '' }) => (disabled ? (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('span', { class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-pagination__relative-link', disabled && 'utrecht-pagination__relative-link--disabled', rel === 'next' && 'utrecht-pagination__relative-link--next', rel === 'prev' && 'utrecht-pagination__relative-link--prev'), 'aria-label': title || null }, textContent) : (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('a', { href: href, class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-pagination__relative-link', disabled && 'utrecht-pagination__relative-link--disabled', rel === 'next' && 'utrecht-pagination__relative-link--next', rel === 'prev' && 'utrecht-pagination__relative-link--prev'), rel: rel, 'aria-label': title || null }, textContent));
    const PageLink = ({ current = false, href = '', rel = null, textContent = '' }) => (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('a', { key: 'eb0489ccb7a6606fa7daa9cd91364d69ad608834', class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-pagination__page-link', current && 'utrecht-pagination__page-link--current'), href: href, 'aria-current': current ? 'true' : null, rel: rel }, textContent);
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
     'nav',
     { key: '7441a114cce8dc98ad61b3d60689b1fef7e456ea', class: 'utrecht-pagination' },
     (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('span', { key: '2c4c6e23805caf3a3345b806670b3bc9d2ae91b4', class: 'utrecht-pagination__before' }, prev ? RelativeLink(Object.assign(Object.assign({}, prev), { rel: 'prev', textContent: 'Vorige' })) : ''),
     (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
      'span',
      { key: 'cfc9ea6fa5d792742d1aab2e3ac338e6b11c0f40', role: 'group', class: 'utrecht-pagination__pages' },
      links
       .sort((a, b) => (a.index === b.index ? 0 : a.index > b.index ? 1 : -1))
       .map((link, arrayIndex) => {
        const index = typeof link.index === 'number' ? link.index : arrayIndex;
        return Object.assign({ index, current: typeof currentIndex === 'number' && index === currentIndex, rel: typeof currentIndex === 'number' ? (index === currentIndex + 1 ? 'next' : index === currentIndex - 1 ? 'prev' : null) : null, textContent: link.index || index }, link);
       })
       .map((link) => PageLink(link)),
     ),
     (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('span', { key: 'fa485075627cfc80015f35d34badabb027282eb9', class: 'utrecht-pagination__before' }, next ? RelativeLink(Object.assign(Object.assign({}, next), { rel: 'next', textContent: 'Volgende' })) : ''),
    );
   }
  };
  Pagination.style = UtrechtPaginationStyle0;

  //# sourceMappingURL=utrecht-pagination.entry.js.map

  /***/
 },
};

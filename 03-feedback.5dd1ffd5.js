!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){return u.default(e)||l.default(e,t)||s.default(e,t)||i.default()};var u=f(o("8slrw")),l=f(o("7AJDX")),i=f(o("ifqQW")),s=f(o("auk6i"));function f(e){return e&&e.__esModule?e:{default:e}}var c=document.querySelector(".feedback-form");!function(){try{var t=localStorage.getItem("feedback-form-state");if(!t)return;var r=JSON.parse(t);Object.entries(r).forEach((function(t){var r=e(a)(t,2),n=r[0],o=r[1];c.elements[n].value=o}))}catch(e){console.log(e.message)}}(),c.addEventListener("input",(function(e){var t=e.target,r=t.name,n=t.value;try{var o=localStorage.getItem("feedback-form-state");(o=o?JSON.parse(o):{})[r]=n;var a=JSON.stringify(o);localStorage.setItem("feedback-form-state",a)}catch(e){console.log(e.message)}})),c.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,n=t.message;console.log({email:r.value,message:n.value}),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.5dd1ffd5.js.map

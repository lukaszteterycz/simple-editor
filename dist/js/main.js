!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,exports){eval("const textArea = document.querySelector('.textarea__field--js');\r\nconst buttonLoad = document.querySelector('.button__load--js');\r\nconst buttonSave = document.querySelector('.button__save--js');\r\n\r\nfunction loadText() {\r\n  if (localStorage.getItem('text').length > 0) {\r\n    textArea.value = localStorage.getItem('text');\r\n  }\r\n}\r\n\r\nfunction saveText() {\r\n  localStorage.setItem('text', textArea.value)\r\n}\r\n\r\nbuttonLoad.addEventListener('click', loadText);\r\nbuttonSave.addEventListener('click', saveText);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0YXJlYV9fZmllbGQtLWpzJyk7XHJcbmNvbnN0IGJ1dHRvbkxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19sb2FkLS1qcycpO1xyXG5jb25zdCBidXR0b25TYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fc2F2ZS0tanMnKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRUZXh0KCkge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGV4dCcpLmxlbmd0aCA+IDApIHtcclxuICAgIHRleHRBcmVhLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RleHQnKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVUZXh0KCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXh0JywgdGV4dEFyZWEudmFsdWUpXHJcbn1cclxuXHJcbmJ1dHRvbkxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkVGV4dCk7XHJcbmJ1dHRvblNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlVGV4dCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);
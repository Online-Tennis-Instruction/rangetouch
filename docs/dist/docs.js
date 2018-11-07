!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define("RangeTouch",t):t()}(0,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t){if(1>t){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}var n=function(){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'[type="range"]',t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,n),this.selector=e,this.elements=document.querySelectorAll(e),this.config=Object.assign({addCSS:!0,thumbWidth:15,watch:!0},t),this.setup()}return o=n,(i=[{key:"setup",value:function(){var e=this;"ontouchstart"in document.documentElement&&(this.config.addCSS&&function(e,t){var n,o=document.getElementById("rangetouch");if(o&&"style"===o.nodeName.toLowerCase())n=o.sheet;else{var i=document.createElement("style");i.id="rangetouch",i.appendChild(document.createTextNode("")),document.head.appendChild(i),n=i.sheet}n.insertRule("".concat(e," { ").concat(t," }"),0)}(this.selector,"user-select: none; -webkit-user-select: none; touch-action: manipulation"),["touchstart","touchmove","touchend"].forEach(function(t){document.body.addEventListener(t,function(t){(function(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)})(t.target,e.selector)&&e.set(t)},!1)}))}},{key:"get",value:function(e){var n,o=e.target,i=e.changedTouches[0],a=parseFloat(o.getAttribute("min"))||0,r=parseFloat(o.getAttribute("max"))||100,c=parseFloat(o.getAttribute("step"))||1,u=o.getBoundingClientRect(),d=100/u.width*(this.config.thumbWidth/2)/100;return 0>(n=100/u.width*(i.clientX-u.left))?n=0:100<n&&(n=100),50>n?n-=(100-2*n)*d:50<n&&(n+=2*(n-50)*d),a+t(n/100*(r-a),c)}},{key:"set",value:function(e){e.target.disabled||(e.preventDefault(),e.target.value=this.get(e),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(e.target,"touchend"===e.type?"change":"input"))}}])&&e(o.prototype,i),a&&e(o,a),n;var o,i,a}();document.addEventListener("DOMContentLoaded",function(){function e(e){var t=new XMLHttpRequest,n=document.body;"withCredentials"in t&&(t.open("GET",e,!0),t.onload=function(){var e=document.createElement("div");e.setAttribute("hidden",""),e.innerHTML=t.responseText,n.insertBefore(e,n.childNodes[0])},t.send())}window.loadSprites=function(t){t.forEach(e)},window.shr.setup({count:{classname:"btn__count"}}),new n("#example",{thumbWidth:20})})});
//# sourceMappingURL=docs.js.map

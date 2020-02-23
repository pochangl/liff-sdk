"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loaded = {};
function loadScript(url) {
    if (!loaded[url]) {
        loaded[url] = new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.onload = function () { return resolve(); };
            script.onerror = reject;
            script.src = url;
            document.head.appendChild(script);
        });
    }
    return loaded[url];
}
exports.loadScript = loadScript;
//# sourceMappingURL=utils.js.map
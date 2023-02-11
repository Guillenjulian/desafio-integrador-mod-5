// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"f3CuI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "255bf46ab85f6e55";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jeorp":[function(require,module,exports) {
var _state = require("./state");
var _index = require("./componet/button/index");
var _index1 = require("./componet/text-init/index");
var _index2 = require("./componet/mano-papel/index");
var _index3 = require("./componet/mano-piedra/index");
var _index4 = require("./componet/mano-tijera/index");
var _index5 = require("./componet/contador/index");
var _cardResult = require("./componet/card-result");
var _index6 = require("./componet/text-rules/index");
var _router = require("./router");
function inicializa() {
    (0, _index.init)();
    (0, _index6.initRules)();
    (0, _index1.init)();
    (0, _index5.init)();
    (0, _cardResult.initStar)();
    (0, _index2.init)();
    (0, _index3.init)();
    (0, _index4.init)();
//console.log(root);
}
(function() {
    const root = document.querySelector(".root");
    // console.log(state);
    // console.log(localStorage);
    (0, _state.state).init();
    inicializa();
    (0, _router.initRouter)(root);
// console.log(localStorage.savedPlay);
})();

},{"./state":"1Yeju","./componet/button/index":"2paZq","./componet/text-init/index":"bRr5Y","./componet/mano-papel/index":"bda4w","./componet/mano-piedra/index":"e5Vdc","./componet/mano-tijera/index":"kgzbz","./componet/contador/index":"8bBHG","./componet/card-result":"j54jn","./componet/text-rules/index":"gGFc6","./router":"4QFWt"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            cpuPlay: "",
            userPlay: ""
        },
        playHistory: [
            {
                player: 0,
                cpu: 0,
                result: ""
            }
        ]
    },
    init () {
        const localData = localStorage.getItem("Saved-play");
        this.setState(JSON.parse(localData) || this.data);
    },
    setState (newState) {
        this.data = newState;
        localStorage.setItem("Saved-play", JSON.stringify(this.data));
    },
    getState () {
        return this.data;
    },
    aleatoryPlayPc () {
        const moves = [
            "piedra",
            "papel",
            "tijera"
        ];
        const aleatory = Math.floor(Math.random() * 3);
        return moves[aleatory];
    },
    setMove (move) {
        const currentState = this.getState();
        const gamePc = this.aleatoryPlayPc();
        currentState.currentGame.cpuPlay = gamePc;
        currentState.currentGame.userPlay = move;
        state.setState(currentState);
        this.whoWin(move, gamePc);
    },
    whoWin (userPlay, cpuPlay) {
        const jugadaGanada = [
            userPlay == "piedra" && cpuPlay == "tijera",
            userPlay == "papel" && cpuPlay == "piedra",
            userPlay == "tijera" && cpuPlay == "papel"
        ];
        if (jugadaGanada.includes(true)) return this.pushHistory("Ganador");
        const jugadaPerdida = [
            userPlay == "piedra" && cpuPlay == "papel",
            userPlay == "papel" && cpuPlay == "tijera",
            userPlay == "tijera" && cpuPlay == "piedra"
        ];
        if (jugadaPerdida.includes(true)) return this.pushHistory("Perdedor");
        const jugadaEmpatada = [
            userPlay == "piedra" && cpuPlay == "piedra",
            userPlay == "papel" && cpuPlay == "papel",
            userPlay == "tijera" && cpuPlay == "tijera"
        ];
        if (jugadaEmpatada.includes(true)) return this.pushHistory("Empates");
    },
    pushHistory (jugada) {
        const currentState = this.getState();
        const playerScore = currentState.playHistory.player;
        const cpuScore = currentState.playHistory.cpu;
        if (jugada == "Ganador") this.setState({
            ...currentState,
            playHistory: {
                player: playerScore + 1,
                cpu: cpuScore,
                result: "Ganaste"
            }
        });
        if (jugada == "Perdedor") this.setState({
            ...currentState,
            playHistory: {
                player: playerScore,
                cpu: cpuScore + 1,
                result: "Perdiste"
            }
        });
        if (jugada == "Empates") this.setState({
            ...currentState,
            playHistory: {
                player: playerScore,
                cpu: cpuScore,
                result: "Empate"
            }
        });
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2paZq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
function init() {
    class Button extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const div = document.createElement("div");
            const style = document.createElement("style");
            const value = this.getAttribute("value") || "Click me";
            div.innerHTML = `
      <div class="contenedor">
         
            <input type="button" class="button" value="${value}" >

            
            </div>`;
            style.innerHTML = `
            
            .conteiner{
                display:flex;
                justify-content:center;
                aling-items:center
            }
            .button{
                color: white;
                height:87px ;
                font-size: 45px;
                border: 10px solid #001997;
                border-radius: 10px;
                background: #006CFC;
                width:322px ;
            }
            `;
            this.appendChild(div);
            this.appendChild(style);
        }
    }
    customElements.define("my-button", Button);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bRr5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
function init() {
    class Text extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `
            <div class="container">
            <h1 class = "title">
            Piedra, 
            <br>
            Papel ó
            <br>
            tijeta
            <br>

            
            </h1>
            </div>`;
            style.innerHTML = `
            .container{
                display:flex;
                justify-content:center;
                aling-items:center
            }
            .title{
               color: #009048;;
                font-size: 80px;
                font-weight: 700;
                font-family: 'Odibee Sans', cursive;
                text-align: center;
                margin: 25px auto;

            }
            `;
            this.appendChild(div);
            this.appendChild(style);
        }
    }
    customElements.define("my-text", Text);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bda4w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
function init() {
    class ManoPapel extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const imgSrc = require("3417c22d32176c0b");
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.className = "paper";
            div.innerHTML = `
    <img src="${imgSrc}" alt="papel" class  ="paper-img" />
    `;
            style.innerHTML = `
    .paper{
      display: flex;
    }
    .paper-img{
      height: 145px;
      width: 61px;
      object-position: 0px 40px;
    }
    @media (min-width: 768px) {
      .paper-img{
        height: 168px;
        width: 69px;
        object-position: 0px 60px;
      }`;
            this.appendChild(div);
            this.appendChild(style);
        }
    }
    customElements.define("mano-papel", ManoPapel);
}

},{"3417c22d32176c0b":"7oBcf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oBcf":[function(require,module,exports) {
module.exports = require("8f40bf691ff1102").getBundleURL("3cRs3") + "papel.0318b45d.png" + "?" + Date.now();

},{"8f40bf691ff1102":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"e5Vdc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
function init() {
    class ManoPiedra extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const imgSrc = require("9954fda1ff7d2ee3");
            const img = document.createElement("img");
            const style = document.createElement("style");
            img.className = "piedra-img";
            img.src = imgSrc;
            style.innerHTML = `
   
    .piedra-img{
      height: 145px;
      width: 61px;
      object-position: 0px 40px;
    }
    @media (min-width: 768px) {
      .piedra-img{
        height: 168px;
        width: 69px;
        object-position: 0px 60px;
      }`;
            img.appendChild(style);
            this.appendChild(img);
        }
    }
    customElements.define("mano-piedra", ManoPiedra);
}

},{"9954fda1ff7d2ee3":"9dYVk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dYVk":[function(require,module,exports) {
module.exports = require("d9b6824a9804b845").getBundleURL("3cRs3") + "piedra.df136e2f.png" + "?" + Date.now();

},{"d9b6824a9804b845":"lgJ39"}],"kgzbz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
function init() {
    class ManoTijera extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const imgSrc = require("2772710958df8c62");
            const img = document.createElement("img");
            const style = document.createElement("style");
            img.className = "tijera-img";
            img.src = imgSrc;
            style.innerHTML = `
    .tijera-img{
      height: 145px;
      width: 61px;
      object-position: 0px 40px;
    }
    @media (min-width: 768px) {
      .tijera-img{
        height: 168px;
        width: 69px;
        object-position: 0px 60px;
      }`;
            this.appendChild(style);
            this.appendChild(img);
        }
    }
    customElements.define("mano-tijera", ManoTijera);
}

},{"2772710958df8c62":"J858f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"J858f":[function(require,module,exports) {
module.exports = require("e7756d8a4df6800e").getBundleURL("3cRs3") + "tijera.8b50c73d.png" + "?" + Date.now();

},{"e7756d8a4df6800e":"lgJ39"}],"8bBHG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
function init() {
    class Contador extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `
        <div class = "contador"> 
        <div class = "contador__number">  </div>
        <svg class="svg">
              <circle class="svg-circle" r="90" cx="140" cy="140"></circle>
          </svg>
        </div>
            
            `;
            style.innerHTML = `
        .contador{
            margin: 0 auto;
        }
        .contador__number{
            position: relative;
            top: 169px;
            font-weight: 400;
            font-size: 72px;
            text-align: center;
            font-family: 'Faster One', cursive;
            color: #000;
        }
            .svg {
        width: 260px;
        height: 280px;
        transform: rotateY(-180deg) rotateZ(-90deg);
      }
      
      .svg-circle {
        stroke-dasharray: 570px;
        stroke-dashoffset: 0px;
        stroke-linecap: round;
        stroke-width: 19px;
        stroke: #fb0000;
        fill: none;
        animation: countdown 5s linear infinite forwards;
      }
      
      @keyframes countdown {
        from {
          stroke-dashoffset: 0px;
        }
        to {
          stroke-dashoffset: 580px;
        }
      }
     
        
            `;
            let counter = 5;
            const contadorNumerEL = div.querySelector(".contador__number");
            contadorNumerEL.textContent = counter;
            const interval = setInterval(()=>{
                counter--;
                contadorNumerEL.textContent = counter;
                if (counter < 3) clearInterval(interval);
            }, 1000);
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("my-contador", Contador);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j54jn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStar", ()=>initStar);
var _state = require("../../state");
function initStar() {
    const currentState = (0, _state.state).getState();
    console.log(currentState, "state");
    const playerScore = currentState.playHistory.player;
    console.log(playerScore, "player");
    const cpuScore = currentState.playHistory.cpu;
    console.log(cpuScore, "cpu");
    const resultEL = currentState.playHistory.result;
    console.log(resultEL, "result");
    class Star extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `
  <div class= "star-container">
  <h1 class = "star-title">Resultado</h1>
  
  <p class = "text">  TU :${playerScore}</p>
  <p class = "text"> PC. ${cpuScore} </p>
  
  
  <div class="star">
  <h2 class ="result">${resultEL}</h2>
  </div>
  </div>
  
  `;
            style.innerHTML = `

                .star-container {   
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    border: 5px solid black;
                    border-radius: 10px;
                    width: 400px;
                    height: 500px;
                    margin-top: 50px;
                    background-color: #ffffff;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='36.9%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%231EA2FF'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='80.9%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%231E85FF'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='0.89'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E");
                    background-attachment: fixed;
                    background-size: cover;;

                 }
                    .star-title {
                        font-size: 30px;
                        margin-top: 20px;
                        font-family: 'Roboto', sans-serif;
                        font-weight: 700;
                        
                        text-align: start;
                    }
            .star {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 250px;
                height: 250px;
                
                background-color: green;
                clip-path: polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%);
              
              }
              .result {
                font-size: 30px;
                font-family: 'Roboto', sans-serif;
                font-weight: 700;
                color: #000;

              }
              .text {
                font-size: 20px;
                font-family: 'Roboto', sans-serif;
                font-weight: 700;
                color: black;
                margin-top: 20px;


              }
            `;
            div.appendChild(style);
            this.appendChild(div);
        }
    }
    customElements.define("my-star", Star);
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gGFc6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRules", ()=>initRules);
function initRules() {
    class TextRules extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.className = "div_rules";
            div.innerHTML = `
        <p class = "rules">
        Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </p>
       
        `;
            style.innerHTML = `

        .div_rules{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 240px;
            width: 317px;
        }
        @media (max-width: 768px) {
            .div_rules{
              
            }
        }
        .rules{
            color: #000000;
            font-size: 50px;
            font-weight: 700;
            font-family: 'Odibee Sans', cursive;
            text-align: center;
            margin: 0 auto;
            text-align: center;

        }
        @media (max-width: 768px) {
            .rules{
                font-size: 40px;
                font-weight: 400;
            }
        }
        
        `;
            this.appendChild(div);
            this.appendChild(style);
        }
    }
    customElements.define("my-rules", TextRules);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _pageWelcome = require("./pages/page-welcome");
var _reglas = require("./pages/reglas");
var _play = require("./pages/play");
var _result = require("./pages/result");
const routes = [
    {
        path: /\/welcome/,
        component: (0, _pageWelcome.initWelcome)
    },
    {
        path: /\/reglas/,
        component: (0, _reglas.initRules)
    },
    {
        path: /\/play/,
        component: (0, _play.initPlay)
    },
    {
        path: /\/result/,
        component: (0, _result.initResult)
    }
];
const BASE_PATH = "/desafio-integrador-mod-5";
function isGithubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    function goTo(path) {
        ////primera solucion al problema de las rutas en github pages
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        // console.log("El router recibio una nueva ruta y esta es:::  ", route);
        ///// ////segunda solucion al problema de las rutas en github pages
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        ////for q recorre rutas y compara las regular exprecions
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    /// si en la ruta hay una sola "/" goto me lleva a Welcome
    if (location.host.includes("github.io")) goTo("/welcome");
    else if (location.pathname == "/") goTo("/welcome");
    else //handleRoute inicializa y  pasa el path asi misma
    handleRoute(location.pathname);
    /// window.onpopstate   se usa para que al cambiar la ruta desde la flecha atras ,adelante.........este este escuchando el estado para asi llamar al handleRoute
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/page-welcome":"2yfqv","./pages/reglas":"1qZI2","./pages/play":"hbEIY","./pages/result":"7wfLH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2yfqv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome);
function initWelcome(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
  <div class="contenedor">
  <my-text ></my-text>

  <my-button class = "boton" value ="Empezar"></my-button>
  
  
  
  <div class = "manos">
  <mano-papel></mano-papel>
  <mano-piedra></mano-piedra>
  <mano-tijera></mano-tijera>
</div>
  </div>  `;
    style.innerHTML = `
  .contenedor{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
  
    
  }
  .manos{
    display: flex;
    gap: 50px;
  
  }
  `;
    function handleClick() {
        const boton = div.querySelector(".boton");
        boton?.addEventListener("click", ()=>{
            // console.log("click");
            params.goTo("/reglas");
        });
    }
    div.appendChild(style);
    handleClick();
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1qZI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRules", ()=>initRules);
function initRules(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
    <div class="contenedor">
    <my-rules></my-rules>
    <my-button class = "boton" value ="Jugar"></my-button>
    <div class = "manos">
    <mano-papel  class = "mano"></mano-papel>
    <mano-piedra class = "mano"></mano-piedra>
    <mano-tijera class = "mano"></mano-tijera>
  </div>
    </div>
    `;
    style.innerHTML = `
    .contenedor{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      margin:25px ;
      gap: 20px;
    }
    
    
    @media (max-width: 768px){
      
      .contenedor{
        

       

    }
  }
    .manos{
     display: flex;
      justify-content: space-evenly;
      width: 100%;


    }
    @media (max-width: 768px){
    .manos{
      
      width: 100%;
      ;

    }
    }
    
    
    `;
    function handleClick() {
        const boton = div.querySelector(".boton");
        boton?.addEventListener("click", ()=>{
            params.goTo("/play");
        });
    }
    div.appendChild(style);
    handleClick();
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbEIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlay", ()=>initPlay);
var _state = require("../../state");
function initPlay(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    // creo el div con los contenido de la pagina
    div.className = "contenedor";
    div.innerHTML = `
<div class="contenedor">

<div class = "cpu-componet">
<mano-piedra class = "pc-piedra"></mano-piedra>


<mano-papel  class = "pc-papel "></mano-papel>



<mano-tijera class = "pc-tijera"> </mano-tijera>
</div>

<my-contador class = "contador"></my-contador>
 


<div class = "player-componet">
<mano-piedra class = "mano-piedra"></mano-piedra>


<mano-papel  class = "mano-papel "></mano-papel>



<mano-tijera class = "mano-tijera"> </mano-tijera>
</div>




</div>
</div>
`;
    style.innerHTML = `
  .contenedor{
  height:100%;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  
  }
  
    .mano{
        margin:0  20px;
    }

    .cpu-componet{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap:25px;


    }
.player-componet{
    display: flex;
    align-items:start;
    overflow:auto;
    gap: 55px;
}

.pc-piedra,
.pc-tijera,
.pc-papel{
    display: none;
    align-items: start;
    transform: rotate(180deg);
}

.mano-tijera:hover,
.mano-papel:hover,
.mano-piedra:hover{
    cursor: pointer;
    transform: translateY(-25px);
    transition: all 0.1s;
}


  `;
    div.appendChild(style);
    // si pasado 5 segundos no se   hace movimiento vuelve a la pagina de reglas
    let counter = 5;
    const interavalidId = setInterval(()=>{
        counter--;
        if (counter < 1) {
            clearInterval(interavalidId);
            params.goTo("/reglas");
        }
    }, 1000);
    // se le pasa el valor de counter al componente contador
    const contadorComp = div.querySelector(".contador");
    const pcTijeraEl = div.querySelector(".pc-tijera");
    pcTijeraEl.style.height = "279px";
    pcTijeraEl.style.width = "87px";
    pcTijeraEl.style.objectPosition = "0px 43px";
    const pcPapelEl = div.querySelector(".pc-papel");
    pcPapelEl.style.height = "279px";
    pcPapelEl.style.width = "87px";
    pcPapelEl.style.objectPosition = "0px 43px";
    const pcPiedraEl = div.querySelector(".pc-piedra");
    pcPiedraEl.style.height = "279px";
    pcPiedraEl.style.width = "87px";
    pcPiedraEl.style.objectPosition = "0px 43px";
    // estilos de componentes de mano --tijera
    const manoTijeraEl = div.querySelector(".mano-tijera");
    const manoTijeraElImg = manoTijeraEl.querySelector(".tijera-img");
    manoTijeraElImg.style.height = "230px";
    manoTijeraElImg.style.width = "75px";
    manoTijeraElImg.style.objectPosition = "0px 43px";
    //
    const removetijerasclick = ()=>{
        (0, _state.state).setMove("tijera");
        manoTijeraElImg.style.objectPosition = "0px 43px";
        manoTijeraElImg.style.transition = "all 0.5s ease-out";
        manoPiedraEl.style.opacity = "0.4";
        manoPapelEl.style.opacity = "0.4";
        setTimeout(()=>{
            if ((0, _state.state).data.currentGame.cpuPlay == "tijera") pcTijeraEl.style.display = "flex";
            else if ((0, _state.state).data.currentGame.cpuPlay == "piedra") pcPiedraEl.style.display = "flex";
            else if ((0, _state.state).data.currentGame.cpuPlay == "papel") pcPapelEl.style.display = "flex";
            contadorComp.style.display = "none";
            manoPiedraEl.style.display = "none";
            manoPapelEl.style.display = "none";
            manoTijeraElImg.style.height = "280px";
            manoTijeraElImg.style.width = "100px";
        }, 1);
        clearInterval(interavalidId);
        setTimeout(()=>{
            params.goTo("/result");
        }, 2500);
        manoTijeraElImg.removeEventListener("click", removetijerasclick);
        manoTijeraEl.style.cursor = "default";
        manoTijeraEl.style.transform = "unset";
        manoPiedraElImg.removeEventListener("click", removetijerasclick);
        manoPiedraEl.style.cursor = "default";
        manoPiedraEl.style.transform = "unset";
        manoPapelElImg.removeEventListener("click", removetijerasclick);
        manoPapelEl.style.cursor = "default";
        manoPapelEl.style.transform = "unset";
        manoTijeraEl.removeEventListener("click", removetijerasclick);
    };
    manoTijeraElImg.addEventListener("click", removetijerasclick);
    const manoPapelEl = div.querySelector(".mano-papel");
    const manoPapelElImg = manoPapelEl.querySelector(".paper-img");
    manoPapelElImg.style.height = "230px";
    manoPapelElImg.style.width = "75px";
    // estilos de componentes de mano --papel
    const removepapelclick = ()=>{
        (0, _state.state).setMove("papel");
        manoPapelElImg.style.objectPosition = "0px 43px";
        manoPapelElImg.style.transition = "all 0.5s ease-out";
        manoPiedraEl.style.opacity = "0.4";
        manoTijeraEl.style.opacity = "0.4";
        setTimeout(()=>{
            if ((0, _state.state).data.currentGame.cpuPlay == "tijera") pcTijeraEl.style.display = "flex";
            else if ((0, _state.state).data.currentGame.cpuPlay == "piedra") pcPiedraEl.style.display = "flex";
            else if ((0, _state.state).data.currentGame.cpuPlay == "papel") pcPapelEl.style.display = "flex";
            contadorComp.style.display = "none";
            manoPiedraEl.style.display = "none";
            manoTijeraEl.style.display = "none";
            manoPapelElImg.style.height = "280px";
            manoPapelElImg.style.width = "100px";
        }, 1);
        clearInterval(interavalidId);
        setTimeout(()=>{
            params.goTo("/result");
        }, 2500);
        // le doy estlos y remuevo elementos si pierdo con papel
        manoPapelElImg.removeEventListener("click", removepapelclick);
        manoPapelEl.style.cursor = "default";
        manoPapelEl.style.transform = "unset";
        manoPiedraElImg.removeEventListener("click", removepapelclick);
        manoPiedraEl.style.cursor = "default";
        manoPiedraEl.style.transform = "unset";
        manoTijeraElImg.removeEventListener("click", removepapelclick);
        manoTijeraEl.style.cursor = "default";
        manoTijeraEl.style.transform = "unset";
    };
    manoPapelElImg.addEventListener("click", removepapelclick);
    const manoPiedraEl = div.querySelector(".mano-piedra");
    const manoPiedraElImg = manoPiedraEl.querySelector(".piedra-img");
    manoPiedraElImg.style.height = "230px";
    manoPiedraElImg.style.width = "75px";
    // se agrega el evento click a la imagen de piedra y se le asigna la funcion removepiedraclick
    //
    const removepiedraclick = ()=>{
        (0, _state.state).setMove("piedra");
        manoPiedraElImg.style.objectPosition = "0px 43px";
        manoPiedraElImg.style.transition = "all 0.5s ease-out";
        manoPapelEl.style.opacity = "0.4";
        manoTijeraEl.style.opacity = "0.4";
        setTimeout(()=>{
            if ((0, _state.state).data.currentGame.cpuPlay == "tijera") pcTijeraEl.style.display = "flex";
            else if ((0, _state.state).data.currentGame.cpuPlay == "piedra") pcPiedraEl.style.display = "flex";
            else if ((0, _state.state).data.currentGame.cpuPlay == "papel") pcPapelEl.style.display = "flex";
            contadorComp.style.display = "none";
            manoPapelEl.style.display = "none";
            manoTijeraEl.style.display = "none";
            manoPiedraElImg.style.height = "280px";
            manoPiedraElImg.style.width = "100px";
        }, 1);
        clearInterval(interavalidId);
        setTimeout(()=>{
            params.goTo("/result");
        }, 2500);
        manoPiedraElImg.removeEventListener("click", removepiedraclick);
        manoPiedraEl.style.cursor = "default";
        manoPiedraEl.style.transform = "unset";
        manoPapelElImg.removeEventListener("click", removepiedraclick);
        manoPapelEl.style.cursor = "default";
        manoPapelEl.style.transform = "unset";
    };
    manoPiedraElImg.addEventListener("click", removepiedraclick);
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wfLH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResult", ()=>initResult);
var _state = require("../../state");
function initResult(params) {
    const currentState = (0, _state.state).getState();
    // console.log(currentState.currentGame, "state");
    const playerScore = currentState.playHistory.player;
    //console.log(playerScore, "player");
    const cpuScore = currentState.playHistory.cpu;
    //console.log(cpuScore, "cpu");
    const resultEL = currentState.playHistory.result;
    // console.log(resultEL, "result");
    const div = document.createElement("div");
    const style = document.createElement("style");
    function handel() {
        const starCmon = div.querySelector(".star");
        if (resultEL == "Ganaste") starCmon.style.backgroundColor = "green";
        else if (resultEL == "Perdiste") starCmon.style.backgroundColor = "red";
        else if (resultEL == "Empate") starCmon.style.backgroundColor = "yellow";
    }
    // creo el div con los contenido de la pagina
    div.innerHTML = `
  <div class="contenedor">
  
 
  <div class= "star-container">
  <h1 class = "star-title">Resultado</h1>
  
  <p class = "text">  TU :${playerScore}</p>
  <p class = "text"> PC. ${cpuScore} </p>
  
  
  <div class="star">
  <h2 class ="result">${resultEL}</h2>
  </div>
  </div>

  <my-button  class="boton"    value="Volver a jugar" ></my-button>
  <my-button  class="boton1"  " value="Salir" ></my-button>

  
  </div>
  `;
    style.innerHTML = `
 .container {
   
}
.contenedor {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
gap: 20px;

}
@media (max-width: 768px){
  .contenedor{
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.star-container {   
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 5px solid black;
  border-radius: 10px;
  width: 400px;
  height: 500px;
  margin-top: 40px;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='36.9%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%231EA2FF'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='80.9%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%231E85FF'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='0.89'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;;
}

@media (max-width: 768px){
.star-container{
  width: 350px;
  height: 400px;
  margin-button: 20px;
}
}

  .star-title {
      font-size: 30px;
      margin-top: 20px;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      
      text-align: start;
  }
.star {
display: flex;
align-items: center;
justify-content: center;
width: 250px;
height: 250px;
background-color: green;
clip-path: polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%);
}

@media (max-width: 768px){
.star {
  width: 150px;
  height: 150px;
}
}

.result {
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
color: #000;

}
@media (max-width: 768px){
.result {
  font-size: 20px;
}
}
.text {
font-size: 20px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
color: black;
margin-top: 20px;
}



 
 

  `;
    const startEl = div.querySelector("my-star");
    function handleClick() {
        const boton = div.querySelector(".boton");
        const boton1 = div.querySelector(".boton1");
        // console.log(boton1);
        boton?.addEventListener("click", ()=>{
            params.goTo("/play");
        });
        boton1?.addEventListener("click", ()=>{
            params.goTo("/reglas");
        });
    }
    div.appendChild(style);
    handel();
    handleClick();
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["f3CuI","jeorp"], "jeorp", "parcelRequire9e96")

//# sourceMappingURL=index.b85f6e55.js.map

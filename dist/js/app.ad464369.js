/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"chunk-162b289f":"03cbdc05","chunk-1e484a24":"fc92e683","chunk-6bb6d379":"fca268e7","chunk-6ec5fb8b":"c485f89c","chunk-a7626f02":"50ab4df1","chunk-ac70c596":"27ce74f6","chunk-e79b898e":"23bd985b","chunk-f26b6d4c":"813223b8","chunk-fc3fe026":"2d8de78e"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"chunk-162b289f":1,"chunk-1e484a24":1,"chunk-6bb6d379":1,"chunk-6ec5fb8b":1,"chunk-e79b898e":1,"chunk-fc3fe026":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"chunk-162b289f":"1d604264","chunk-1e484a24":"02e05c1b","chunk-6bb6d379":"1915d536","chunk-6ec5fb8b":"f9db68bd","chunk-a7626f02":"31d6cfe0","chunk-ac70c596":"31d6cfe0","chunk-e79b898e":"23968b4d","chunk-f26b6d4c":"31d6cfe0","chunk-fc3fe026":"b3d45678"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"56d7");


/***/ }),

/***/ "0439":
/*!********************************!*\
  !*** ./src/store/mutations.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "ade3");
/* harmony import */ var _mutation_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation-types */ "9fb0");


var _ADD_TO_NET_SONGS$ADD;


/* harmony default export */ __webpack_exports__["default"] = (_ADD_TO_NET_SONGS$ADD = {}, Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_NET_SONGS"], function (state, songsList) {
  state.songs = songsList;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_ALBUM_IMG"], function (state, albumPicture) {
  state.albumImg = albumPicture;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_COMMENT"], function (state, commentMessage) {
  state.comment = commentMessage;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["PLAYING_TRUE"], function (state) {
  state.isPlaying = true;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["PLAYING_FALSE"], function (state) {
  state.isPlaying = false;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_MV"], function (state, mvUrl) {
  state.mvUrl = mvUrl[0];
  state.isShowMv = mvUrl[1];
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_SONG_DETAIL"], function (state, songdetail) {
  state.songdetail = songdetail;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_MUSIC_URL"], function (state, musicUrl) {
  state.musicUrl = musicUrl;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["IS_SHOW_STATE"], function (state, isShowState) {
  state.isShowState = isShowState;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_SONG_LYRIC"], function (state, lyric) {
  state.lyric = lyric;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["IS_SHOW_PROGRESS"], function (state) {
  state.isShowProgress = !state.isShowProgress;
  state.isShowState = !state.isShowState;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["SHOW_PLAYER"], function (state) {
  state.isShowPlayer = !state.isShowPlayer;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["LOADED_META_DATA"], function (state, time) {
  state.mp3CurrentTime = time[0];
  state.mp3Duraction = time[1];
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_AUDIO_RES"], function (state, res) {
  state.audioRes = res;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["IS_SHOW_TAB_BAR"], function (state) {
  state.isShowTabBar = !state.isShowTabBar;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["Delete_Songs"], function (state) {
  state.songs = [];
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_PLAYING_STATE"], function (state, res) {
  state.getPlayingState = res;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_COOKIE"], function (state, res) {
  state.cookie = res;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_DAILY_SONGS"], function (state, res) {
  state.getDailySongs = res;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_LOGIN_STATUS"], function (state, res) {
  state.loginStatus = res;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_LIST_MESSAGE"], function (state, res) {
  state.listMessage = res;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_LIKE_LIST"], function (state, res) {
  state.likeList = res;
}), Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ADD_TO_NET_SONGS$ADD, _mutation_types__WEBPACK_IMPORTED_MODULE_1__["GET_SINGLE_SONG_ID"], function (state, res) {
  state.singleSongId = res;
}), _ADD_TO_NET_SONGS$ADD);

/***/ }),

/***/ "045a":
/*!*******************************************************************!*\
  !*** ./src/components/content/NetMv.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NetMv.vue?vue&type=script&lang=js& */ "e1c8");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "04a2":
/*!****************************************************************************************!*\
  !*** ./src/components/content/AlbumImg.vue?vue&type=template&id=495e7d36&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_template_id_495e7d36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AlbumImg.vue?vue&type=template&id=495e7d36&scoped=true& */ "43bb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_template_id_495e7d36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_template_id_495e7d36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "04ac":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/bottom-tabbar/MainTabBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabBar */ "924a");
/* harmony import */ var _TabBarItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabBarItem.vue */ "37fa");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MainTabBar",
  components: {
    TabBarBar: _TabBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    TabBarItem: _TabBarItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "07a4":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "2b0e");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "2f62");



vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_2__["default"]); // 创建次文件的目的是为了路由跳转时取消上一个页面的网络请求

var store = new vuex__WEBPACK_IMPORTED_MODULE_2__["default"].Store({
  state: {
    cancelTokenArr: [] // 取消请求token数组

  },
  mutations: {
    pushToken: function pushToken(state, payload) {
      state.cancelTokenArr.push(payload.cancelToken);
    },
    clearToken: function clearToken(_ref) {
      var cancelTokenArr = _ref.cancelTokenArr;
      cancelTokenArr.forEach(function (item) {
        item("路由跳转时取消上一个路由组件的网络请求"); // console.log("cancel");
      });
      cancelTokenArr = [];
    }
  }
});

/***/ }),

/***/ "0a1a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/lyricpage/LyricPage.vue?vue&type=style&index=0&id=9098f25e&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0d7f":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/bottom-tabbar/TabBarItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TabBarItem",
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    isActive: function isActive() {
      // return this.$route.path.indexOf(this.path)!==-1
      return this.$route.path === this.path;
    },
    activeStyle: function activeStyle() {
      return this.isActive ? {
        color: this.activeColor
      } : {};
    }
  },
  methods: {
    itemClick: function itemClick() {
      //解决连续点击同一组件报错的问题(catch(err=>err))
      this.$router.push(this.path).catch(function (err) {
        return err;
      });
    }
  }
});

/***/ }),

/***/ "1167":
/*!*********************************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/TabBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/thread-loader/dist/cjs.js!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabBar.vue?vue&type=script&lang=js& */ "4f73");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "118b":
/*!********************************************************************!*\
  !*** ./src/views/lyricpage/LyricPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LyricPage.vue?vue&type=script&lang=js& */ "e133");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "1481":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/TabBar.vue?vue&type=style&index=0&id=55814b0e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_55814b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabBar.vue?vue&type=style&index=0&id=55814b0e&scoped=true&lang=css& */ "db2d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_55814b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_55814b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_55814b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_55814b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "14e5":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/songlist/SongList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "1276");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "466d");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "498a");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "a9e3");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _network_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/network/interface */ "ceaf");
/* harmony import */ var _components_content_PlayingState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/content/PlayingState */ "7b61");










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PlayingState: _components_content_PlayingState__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  name: "SongList",
  data: function data() {
    return {
      musicUrl: "",
      albumUrl: "",
      commentMessage: [],
      mvUrl: "",
      isShowMv: false,
      // crtSongsMsg: [],
      isShowstate: true,
      lyric: "",
      songdetail: {}
    };
  },
  created: function created() {},
  methods: {
    // 点击选中歌曲时获取该歌曲的歌曲名, 歌手, mp3, 专辑图片, 评论
    clickToPlay: function clickToPlay(index) {
      var _this = this;

      var storeSongsListId = this.$store.state.songs[index].id; // 1.向后台发送请求, 获取歌曲名和歌手信息保存到 Vuex

      Object(_network_interface__WEBPACK_IMPORTED_MODULE_10__["getSongsMessage"])(this.$store.state.songs[index].name).then(function (res) {
        var item = res.result.songs[index];
        var songDetailObj = new _network_interface__WEBPACK_IMPORTED_MODULE_10__["songDetail"](item); // 把歌曲相关信息(专辑名，专辑 id，作者，歌曲名，歌曲 id，mvid，mv播放时间)传给 Vuex

        _this.$store.commit("getSongDetail", songDetailObj); // 是否在当前页面展示播放栏


        _this.$store.commit("isShowState", _this.isShowstate);
      }); // 2.获取音乐 mp3 Url

      Object(_network_interface__WEBPACK_IMPORTED_MODULE_10__["getSongMp3"])(storeSongsListId).then(function (res) {
        // console.log(res.data[0].url);
        _this.musicUrl = res.data[0].url;

        _this.$store.commit("getMusicUrl", _this.musicUrl);
      }); // 3.获取专辑图片

      Object(_network_interface__WEBPACK_IMPORTED_MODULE_10__["getSingleDetail"])(storeSongsListId).then(function (res) {
        // console.log(res.songs[0].al.picUrl);
        _this.albumUrl = res.songs[0].al.picUrl;

        _this.$store.commit("addToAlbumImg", _this.albumUrl);
      }); // 4.获取评论

      Object(_network_interface__WEBPACK_IMPORTED_MODULE_10__["getHotComment"])(storeSongsListId).then(function (res) {
        _this.commentMessage = res.comments;

        _this.$store.commit("addToComment", _this.commentMessage);
      }); // 5.获取歌词

      Object(_network_interface__WEBPACK_IMPORTED_MODULE_10__["getLyric"])(storeSongsListId).then(function (res) {
        // console.log(res.lrc.lyric);
        _this.lyric = res.lrc.lyric; //格式化歌词

        var lyric = _this.lyric;
        var regNewLine = /\n/;
        var lineArr = lyric.split(regNewLine);
        var regTime = /\[\d{2}:\d{2}.\d{2,3}\]/;
        var lyricsObjArr = [];
        lineArr.forEach(function (item) {
          if (item === "") return;
          var obj = {}; // time 为数组，第一项为 [min:sec.ms] 格式

          var time = item.match(regTime);
          obj.lyric = item.split("]")[1].trim() === "" ? "" : item.split("]")[1].trim();
          obj.time = time ? _this.formatLyricTime(time[0].slice(1, time[0].length - 1)) : 0;
          obj.uid = Math.random().toString().slice(-6);

          if (obj.lyric === "") {
            console.log("这一行没有歌词");
          } else {
            lyricsObjArr.push(obj);
          }
        });

        _this.$store.commit("getSongLyric", lyricsObjArr);
      });
    },
    formatLyricTime: function formatLyricTime(time) {
      // 格式化歌词的时间 转换成 sss:ms
      var regMin = /.*:/;
      var regSec = /:.*\./;
      var regMs = /\./;
      var min = parseInt(time.match(regMin)[0].slice(0, 2));
      var sec = parseInt(time.match(regSec)[0].slice(1, 3));
      var ms = time.slice(time.match(regMs).index + 1, time.match(regMs).index + 4);

      if (min !== 0) {
        sec += min * 60;
      }

      return Number(sec + "." + ms);
    },
    // 点击获取 mv
    mvIconClick: function mvIconClick(index, e) {
      var _this2 = this;

      // 防止冒泡到点击歌曲播放
      e.stopPropagation(); // 当点击 mv 后，将歌曲播放状态设置为暂停

      var rs = this.$store.state.audioRes;
      rs.pause();
      Object(_network_interface__WEBPACK_IMPORTED_MODULE_10__["getMVUrl"])(this.$store.state.songs[index].mvid).then(function (res) {
        // console.log(res.data.url);
        _this2.mvUrl = res.data.url;
        _this2.isShowMv = !_this2.isShowMv;

        _this2.$store.commit("addToMv", [_this2.mvUrl, _this2.isShowMv]);
      });
      this.$router.push("/mv");
    }
  }
});

/***/ }),

/***/ "168a":
/*!*************************************************************************************!*\
  !*** ./src/components/content/NetMv.vue?vue&type=template&id=502e5243&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_template_id_502e5243_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NetMv.vue?vue&type=template&id=502e5243&scoped=true& */ "68a5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_template_id_502e5243_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_template_id_502e5243_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "199c":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_content_AlbumImg_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/content/AlbumImg.vue */ "6c90");
/* harmony import */ var _components_content_NetComment_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/content/NetComment.vue */ "5121");
/* harmony import */ var _components_content_NetMv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/content/NetMv */ "9e0c");
/* harmony import */ var _views_songlist_SongList_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/songlist/SongList.vue */ "ec3e");
/* harmony import */ var _components_common_bottom_tabbar_MainTabBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/common/bottom-tabbar/MainTabBar */ "9056");
/* harmony import */ var _components_content_PlayingState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/content/PlayingState */ "7b61");
/* harmony import */ var _views_discpage_DiscPage_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/discpage/DiscPage.vue */ "6033");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import NetInput from "@/components/content/NetInput.vue";






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    // NetInput,
    SongList: _views_songlist_SongList_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    AlbumImg: _components_content_AlbumImg_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    NetComment: _components_content_NetComment_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    NetMv: _components_content_NetMv__WEBPACK_IMPORTED_MODULE_5__["default"],
    MainTabBar: _components_common_bottom_tabbar_MainTabBar__WEBPACK_IMPORTED_MODULE_7__["default"],
    PlayingState: _components_content_PlayingState__WEBPACK_IMPORTED_MODULE_8__["default"],
    DiscPage: _views_discpage_DiscPage_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      mp3CurrentTime: "",
      mp3Duraction: "",
      audioPlay: "",
      isShowstate: true
    };
  },
  mounted: function mounted() {
    this.$store.commit("getAudioRes", this.$refs.audio);
  },
  methods: {
    //当浏览器已加载音频/视频的元数据时(audio api)
    loadedmetadata: function loadedmetadata() {
      this.mp3Duraction = this.conversion(music.duration);
      this.mp3CurrentTime = this.conversion(music.currentTime);
      this.$store.commit("loadedmetadata", [this.mp3CurrentTime, this.mp3Duraction]);
    },
    //当目前的播放位置已更改时(audio api)
    timeupdate: function timeupdate() {
      this.$store.state.mp3Duraction = this.conversion(music.duration);
      this.$store.state.mp3CurrentTime = this.conversion(music.currentTime);
    },
    // 格式化当前歌曲播放时间和总时间
    conversion: function conversion(value) {
      var minute = Math.floor(value / 60);
      minute = minute.toString().length === 1 ? "0" + minute : minute;
      var second = Math.round(value % 60);
      second = second.toString().length === 1 ? "0" + second : second;
      return "".concat(minute, ":").concat(second);
    },
    //监听歌曲播放时事件
    playing: function playing() {
      this.$store.commit("playingTrue");
    },
    //监听歌曲暂停时事件
    pausing: function pausing() {
      this.$store.commit("playingFalse");
    }
  }
});

/***/ }),

/***/ "1bab":
/*!********************************!*\
  !*** ./src/network/request.js ***!
  \********************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "07a4");

 // axios.defaults.withCredentials = true; // 允许携带cookie
//一.加了 promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //1.创建 axios 实例
//     const instance = axios.create({
//       baseURL: "http://152.136.185.210:7878/api/m5/home/data",
//       timeout: 5000
//     });
//     //发送真正网络请求
//     instance(config)
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
// }
//二.不加 promise

function request(config) {
  // instance 本身返回一个 promise , 所以不用 new Promise
  //1.创建 axios 实例
  var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: "https://autumnfish.cn",
    timeout: 5000 // withCredentials: true,

  }); // 2.axios 拦截器

  instance.interceptors.request.use(function (config) {
    //路由跳转时取消上一个页面的网络请求
    config.cancelToken = new axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken(function (cancel) {
      _store_store__WEBPACK_IMPORTED_MODULE_1__["store"].commit("pushToken", {
        cancelToken: cancel
      });
    });
    return config; //必须加 return
  }, function (err) {
    console.log(err);
  }); // 2.2 响应拦截

  instance.interceptors.response.use(function (res) {
    return res.data; //必须加 return
  }, function (err) {
    console.log(err);
  }); //发送真正网络请求

  return instance(config);
}

/***/ }),

/***/ "1e3c":
/*!******************************************************************************************!*\
  !*** ./src/components/content/NetComment.vue?vue&type=template&id=1010011e&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_template_id_1010011e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NetComment.vue?vue&type=template&id=1010011e&scoped=true& */ "31ba");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_template_id_1010011e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_template_id_1010011e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "2009":
/*!*************************************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/TabBarItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/thread-loader/dist/cjs.js!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabBarItem.vue?vue&type=script&lang=js& */ "0d7f");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "2032":
/*!*******************************************************************************************************!*\
  !*** ./src/components/content/AlbumImg.vue?vue&type=style&index=0&id=495e7d36&scoped=true&lang=less& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_style_index_0_id_495e7d36_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AlbumImg.vue?vue&type=style&index=0&id=495e7d36&scoped=true&lang=less& */ "401c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_style_index_0_id_495e7d36_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_style_index_0_id_495e7d36_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_style_index_0_id_495e7d36_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_style_index_0_id_495e7d36_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "23be":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "199c");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "2ea5":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/AlbumImg.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AlbumImg",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "31ba":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/NetComment.vue?vue&type=template&id=1010011e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hotcomment"},_vm._l((_vm.$store.state.comment),function(item,index){return _c('dl',[_c('div',{staticClass:"avatarnn"},[_c('img',{attrs:{"src":item.user.avatarUrl,"alt":""}}),_c('dt',[_vm._v(_vm._s(item.user.nickname))])]),_c('dd',[_vm._v(_vm._s(item.content))])])}),0)}
var staticRenderFns = []



/***/ }),

/***/ "37e7":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/songlist/SongList.vue?vue&type=template&id=c77d6a20&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"songsmenu"},_vm._l((_vm.$store.state.songs),function(item,index){return _c('li',{staticClass:"play",on:{"click":function($event){return _vm.clickToPlay(index)}}},[_c('span',{staticClass:"song-name"},[_vm._v(_vm._s(item.name))]),_c('div',{staticClass:"aboutsong"},[_c('span',{staticClass:"author-name"},[_vm._v(" "+_vm._s(item.artists[0].name))]),_c('span',[_vm._v(" - ")]),_c('span',{staticClass:"album-name"},[_vm._v(_vm._s(item.album.name))])]),(item.mvid != '')?_c('a',{staticClass:"mv",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.mvIconClick(index, $event)}}},[_vm._v("")]):_vm._e()])}),0)}
var staticRenderFns = []



/***/ }),

/***/ "37fa":
/*!************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/TabBarItem.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabBarItem_vue_vue_type_template_id_47f2227e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabBarItem.vue?vue&type=template&id=47f2227e&scoped=true& */ "7f1a");
/* harmony import */ var _TabBarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabBarItem.vue?vue&type=script&lang=js& */ "2009");
/* empty/unused harmony star reexport *//* harmony import */ var _TabBarItem_vue_vue_type_style_index_0_id_47f2227e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabBarItem.vue?vue&type=style&index=0&id=47f2227e&scoped=true&lang=css& */ "8523");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TabBarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabBarItem_vue_vue_type_template_id_47f2227e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabBarItem_vue_vue_type_template_id_47f2227e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47f2227e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3dfd":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_5f3305e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5f3305e4&scoped=true& */ "58ac");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "23be");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_5f3305e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5f3305e4&scoped=true&lang=css& */ "ac1e");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_5f3305e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_5f3305e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f3305e4",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3f82":
/*!*********************************!*\
  !*** ./src/assets/img/disc.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/disc.e89e0c3e.png";

/***/ }),

/***/ "401c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/AlbumImg.vue?vue&type=style&index=0&id=495e7d36&scoped=true&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "414c":
/*!*********************************************************************************************************!*\
  !*** ./src/components/content/NetComment.vue?vue&type=style&index=0&id=1010011e&scoped=true&lang=less& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_style_index_0_id_1010011e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NetComment.vue?vue&type=style&index=0&id=1010011e&scoped=true&lang=less& */ "a30a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_style_index_0_id_1010011e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_style_index_0_id_1010011e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_style_index_0_id_1010011e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_style_index_0_id_1010011e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4360":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "2b0e");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "2f62");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ "0439");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "4b76");




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var state = {
  songs: [],
  albumImg: "",
  comment: [],
  isPlaying: false,
  mvUrl: "",
  isShowMv: false,
  songdetail: {},
  musicUrl: "",
  isShowState: false,
  lyric: [],
  isShowProgress: false,
  //是否显示播放器
  isShowPlayer: false,
  mp3CurrentTime: "",
  mp3Duraction: "",
  audioRes: "",
  isShowTabBar: true,
  getPlayingState: "",
  //获取 cookie
  cookie: "",
  getDailySongs: [],
  //登录状态(含头像和背景图)
  loginStatus: {},
  //歌单信息
  listMessage: [],
  //我喜欢的音乐里的每一首歌的 id
  likeList: [],
  //每一个创建歌单里含有每一首歌曲 id 的数组
  singleSongId: []
};
var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: state,
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_2__["default"],
  actions: _action__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "43bb":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/AlbumImg.vue?vue&type=template&id=495e7d36&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"album-img"},[_c('img',{class:[
      { animation_paused: !_vm.$store.state.isPlaying },
      { animation_running: _vm.$store.state.isPlaying } ],attrs:{"src":_vm.$store.state.albumImg,"alt":""}})])}
var staticRenderFns = []



/***/ }),

/***/ "45ac":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/NetComment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NetComment",
  data: function data() {
    return {
      isShowState: false
    };
  },
  activated: function activated() {
    // 隐藏下方 tabbar
    this.$store.commit("isShowTabBar");
    this.$store.commit("isShowState", this.isShowState);
  },
  deactivated: function deactivated() {
    // 显示 tabbar
    this.$store.commit("isShowTabBar");
    this.$store.commit("isShowState", !this.isShowState);
  }
});

/***/ }),

/***/ "472e":
/*!*********************************************************************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/MainTabBar.vue?vue&type=style&index=0&id=b7a020c8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_style_index_0_id_b7a020c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainTabBar.vue?vue&type=style&index=0&id=b7a020c8&scoped=true&lang=css& */ "c7bf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_style_index_0_id_b7a020c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_style_index_0_id_b7a020c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_style_index_0_id_b7a020c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_style_index_0_id_b7a020c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4b76":
/*!*****************************!*\
  !*** ./src/store/action.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "4f73":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/bottom-tabbar/TabBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TabBar"
});

/***/ }),

/***/ "5121":
/*!***********************************************!*\
  !*** ./src/components/content/NetComment.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NetComment_vue_vue_type_template_id_1010011e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NetComment.vue?vue&type=template&id=1010011e&scoped=true& */ "1e3c");
/* harmony import */ var _NetComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NetComment.vue?vue&type=script&lang=js& */ "e4d4");
/* empty/unused harmony star reexport *//* harmony import */ var _NetComment_vue_vue_type_style_index_0_id_1010011e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetComment.vue?vue&type=style&index=0&id=1010011e&scoped=true&lang=less& */ "414c");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NetComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NetComment_vue_vue_type_template_id_1010011e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NetComment_vue_vue_type_template_id_1010011e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1010011e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "56d7":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "e260");
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "e6cf");
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "cca6");
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "a79d");
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "2b0e");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "3dfd");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/index */ "4360");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router */ "a18c");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! element-ui */ "a68a");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! element-ui/lib/theme-chalk/index.css */ "eeee");
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_9__);










vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(element_ui__WEBPACK_IMPORTED_MODULE_8___default.a);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.$bus = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]();
/* eslint-disable no-new */

new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  el: "#app",
  store: _store_index__WEBPACK_IMPORTED_MODULE_6__["default"],
  router: _router__WEBPACK_IMPORTED_MODULE_7__["default"],
  render: function render(h) {
    return h(_App__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
}); //1.axios基本使用
// axios({
//   url: "http://152.136.185.210:7878/api/m5/home/data?type=new&page=1"
// }).then(res => {
//   console.log(res);
// });
// axios({
//   url: "http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1"
// }).then(res => {
//   console.log(res);
// });
//2.axios发送并发请求
// axios.defaults.baseURL = "http://152.136.185.210:7878/api/m5"; 全局配置
// axios.defaults.timeout = 500;
// axios
//   .all([
//     axios({
//       url: "/home/data?type=new&page=1"
//     }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 3
//       }
//     })
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1);
//       console.log(res2);
//     })
//   );

/***/ }),

/***/ "58ac":
/*!****************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=5f3305e4&scoped=true& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5f3305e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5f3305e4&scoped=true& */ "c6ee");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5f3305e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5f3305e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "5d16":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/songlist/SongList.vue?vue&type=style&index=0&id=c77d6a20&scoped=true&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6033":
/*!*****************************************!*\
  !*** ./src/views/discpage/DiscPage.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiscPage_vue_vue_type_template_id_576a5a02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscPage.vue?vue&type=template&id=576a5a02&scoped=true& */ "bb1a");
/* harmony import */ var _DiscPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscPage.vue?vue&type=script&lang=js& */ "6968");
/* empty/unused harmony star reexport *//* harmony import */ var _DiscPage_vue_vue_type_style_index_0_id_576a5a02_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiscPage.vue?vue&type=style&index=0&id=576a5a02&scoped=true&lang=less& */ "870c");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DiscPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiscPage_vue_vue_type_template_id_576a5a02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DiscPage_vue_vue_type_template_id_576a5a02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "576a5a02",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "672f":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/bottom-tabbar/TabBar.vue?vue&type=template&id=55814b0e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"tab-bar"}},[_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),

/***/ "68a5":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/NetMv.vue?vue&type=template&id=502e5243&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"netmv"},[_c('video',{attrs:{"src":_vm.$store.state.mvUrl,"controls":"","loop":"","autoplay":""}})])}
var staticRenderFns = []



/***/ }),

/***/ "6968":
/*!******************************************************************!*\
  !*** ./src/views/discpage/DiscPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DiscPage.vue?vue&type=script&lang=js& */ "d30f");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "6c90":
/*!*********************************************!*\
  !*** ./src/components/content/AlbumImg.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlbumImg_vue_vue_type_template_id_495e7d36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlbumImg.vue?vue&type=template&id=495e7d36&scoped=true& */ "04a2");
/* harmony import */ var _AlbumImg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlbumImg.vue?vue&type=script&lang=js& */ "c35f");
/* empty/unused harmony star reexport *//* harmony import */ var _AlbumImg_vue_vue_type_style_index_0_id_495e7d36_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlbumImg.vue?vue&type=style&index=0&id=495e7d36&scoped=true&lang=less& */ "2032");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AlbumImg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlbumImg_vue_vue_type_template_id_495e7d36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlbumImg_vue_vue_type_template_id_495e7d36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "495e7d36",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6cd5":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/bottom-tabbar/TabBarItem.vue?vue&type=style&index=0&id=47f2227e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7124":
/*!***************************************************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/TabBar.vue?vue&type=template&id=55814b0e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_template_id_55814b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabBar.vue?vue&type=template&id=55814b0e&scoped=true& */ "672f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_template_id_55814b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_template_id_55814b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "7b61":
/*!*************************************************!*\
  !*** ./src/components/content/PlayingState.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlayingState_vue_vue_type_template_id_0bfbb67e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayingState.vue?vue&type=template&id=0bfbb67e&scoped=true& */ "9d03");
/* harmony import */ var _PlayingState_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayingState.vue?vue&type=script&lang=js& */ "e566");
/* empty/unused harmony star reexport *//* harmony import */ var _PlayingState_vue_vue_type_style_index_0_id_0bfbb67e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayingState.vue?vue&type=style&index=0&id=0bfbb67e&scoped=true&lang=less& */ "fc7e");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PlayingState_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlayingState_vue_vue_type_template_id_0bfbb67e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlayingState_vue_vue_type_template_id_0bfbb67e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0bfbb67e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7f1a":
/*!*******************************************************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/TabBarItem.vue?vue&type=template&id=47f2227e&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_template_id_47f2227e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabBarItem.vue?vue&type=template&id=47f2227e&scoped=true& */ "8745");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_template_id_47f2227e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_template_id_47f2227e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "8523":
/*!*********************************************************************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/TabBarItem.vue?vue&type=style&index=0&id=47f2227e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_style_index_0_id_47f2227e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabBarItem.vue?vue&type=style&index=0&id=47f2227e&scoped=true&lang=css& */ "6cd5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_style_index_0_id_47f2227e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_style_index_0_id_47f2227e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_style_index_0_id_47f2227e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBarItem_vue_vue_type_style_index_0_id_47f2227e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "870c":
/*!***************************************************************************************************!*\
  !*** ./src/views/discpage/DiscPage.vue?vue&type=style&index=0&id=576a5a02&scoped=true&lang=less& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_style_index_0_id_576a5a02_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DiscPage.vue?vue&type=style&index=0&id=576a5a02&scoped=true&lang=less& */ "a0b8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_style_index_0_id_576a5a02_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_style_index_0_id_576a5a02_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_style_index_0_id_576a5a02_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_style_index_0_id_576a5a02_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "8745":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/bottom-tabbar/TabBarItem.vue?vue&type=template&id=47f2227e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-bar-item",on:{"click":_vm.itemClick}},[(!_vm.isActive)?_c('div',[_vm._t("item-icon")],2):_c('div',[_vm._t("item-icon-active")],2),_c('div',{style:(_vm.activeStyle)},[_vm._t("item-text")],2)])}
var staticRenderFns = []



/***/ }),

/***/ "9056":
/*!************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/MainTabBar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainTabBar_vue_vue_type_template_id_b7a020c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainTabBar.vue?vue&type=template&id=b7a020c8&scoped=true& */ "fc32");
/* harmony import */ var _MainTabBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainTabBar.vue?vue&type=script&lang=js& */ "b6ac");
/* empty/unused harmony star reexport *//* harmony import */ var _MainTabBar_vue_vue_type_style_index_0_id_b7a020c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainTabBar.vue?vue&type=style&index=0&id=b7a020c8&scoped=true&lang=css& */ "472e");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MainTabBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainTabBar_vue_vue_type_template_id_b7a020c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainTabBar_vue_vue_type_template_id_b7a020c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b7a020c8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "924a":
/*!********************************************************!*\
  !*** ./src/components/common/bottom-tabbar/TabBar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabBar_vue_vue_type_template_id_55814b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabBar.vue?vue&type=template&id=55814b0e&scoped=true& */ "7124");
/* harmony import */ var _TabBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabBar.vue?vue&type=script&lang=js& */ "1167");
/* empty/unused harmony star reexport *//* harmony import */ var _TabBar_vue_vue_type_style_index_0_id_55814b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabBar.vue?vue&type=style&index=0&id=55814b0e&scoped=true&lang=css& */ "1481");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TabBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabBar_vue_vue_type_template_id_55814b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabBar_vue_vue_type_template_id_55814b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55814b0e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9a34":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/PlayingState.vue?vue&type=template&id=0bfbb67e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"playstate",staticClass:"playstate",on:{"click":_vm.showDiscPage}},[_c('div',{staticClass:"rotatedisc"},[_c('img',{staticClass:"disc",attrs:{"src":__webpack_require__(/*! @/assets/img/disc.png */ "3f82"),"alt":""}}),_c('album-img',{staticClass:"albumpic"})],1),_c('span',{staticClass:"songdetail"},[_vm._v(_vm._s(_vm.$store.state.songdetail.songName)+" - "+_vm._s(_vm.$store.state.songdetail.artistsName))]),_c('div',{staticClass:"togglestate",on:{"click":_vm.clktoplay}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.$store.state.isPlaying),expression:"!$store.state.isPlaying"}],staticClass:"pausebtn"},[_vm._v("")]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.$store.state.isPlaying),expression:"$store.state.isPlaying"}],staticClass:"playbtn"},[_vm._v("")])])])}
var staticRenderFns = []



/***/ }),

/***/ "9b6b":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/bottom-tabbar/MainTabBar.vue?vue&type=template&id=b7a020c8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"main-tab-bar"}},[_c('tab-bar-bar',[_c('tab-bar-item',{attrs:{"path":"/find"}},[_c('span',{staticClass:"find-icon",attrs:{"slot":"item-icon"},slot:"item-icon"},[_vm._v("")]),_c('span',{staticClass:"find-icon-active",attrs:{"slot":"item-icon-active"},slot:"item-icon-active"},[_vm._v("")]),_c('div',{staticClass:"bt-navbar-text",attrs:{"slot":"item-text"},slot:"item-text"},[_vm._v("发现")])]),_c('tab-bar-item',{attrs:{"path":"/podcast"}},[_c('span',{staticClass:"find-icon",attrs:{"slot":"item-icon"},slot:"item-icon"},[_vm._v("")]),_c('span',{staticClass:"find-icon-active",attrs:{"slot":"item-icon-active"},slot:"item-icon-active"},[_vm._v("")]),_c('div',{staticClass:"bt-navbar-text",attrs:{"slot":"item-text"},slot:"item-text"},[_vm._v("播客")])]),_c('tab-bar-item',{attrs:{"path":"/profile"}},[_c('span',{staticClass:"find-icon",attrs:{"slot":"item-icon"},slot:"item-icon"},[_vm._v("")]),_c('span',{staticClass:"find-icon-active",attrs:{"slot":"item-icon-active"},slot:"item-icon-active"},[_vm._v("")]),_c('div',{staticClass:"bt-navbar-text",attrs:{"slot":"item-text"},slot:"item-text"},[_vm._v("我的")])]),_c('tab-bar-item',{attrs:{"path":"/singing"}},[_c('span',{staticClass:"find-icon",attrs:{"slot":"item-icon"},slot:"item-icon"},[_vm._v("")]),_c('span',{staticClass:"find-icon-active",attrs:{"slot":"item-icon-active"},slot:"item-icon-active"},[_vm._v("")]),_c('div',{staticClass:"bt-navbar-text",attrs:{"slot":"item-text"},slot:"item-text"},[_vm._v("K歌")])]),_c('tab-bar-item',{attrs:{"path":"/cloudvillage"}},[_c('span',{staticClass:"find-icon",attrs:{"slot":"item-icon"},slot:"item-icon"},[_vm._v("")]),_c('span',{staticClass:"find-icon-active",attrs:{"slot":"item-icon-active"},slot:"item-icon-active"},[_vm._v("")]),_c('div',{staticClass:"bt-navbar-text",attrs:{"slot":"item-text"},slot:"item-text"},[_vm._v("云村")])])],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "9c8c":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/NetMv.vue?vue&type=style&index=0&id=502e5243&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9d03":
/*!********************************************************************************************!*\
  !*** ./src/components/content/PlayingState.vue?vue&type=template&id=0bfbb67e&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_template_id_0bfbb67e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PlayingState.vue?vue&type=template&id=0bfbb67e&scoped=true& */ "9a34");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_template_id_0bfbb67e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_template_id_0bfbb67e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "9e0c":
/*!******************************************!*\
  !*** ./src/components/content/NetMv.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NetMv_vue_vue_type_template_id_502e5243_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NetMv.vue?vue&type=template&id=502e5243&scoped=true& */ "168a");
/* harmony import */ var _NetMv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NetMv.vue?vue&type=script&lang=js& */ "045a");
/* empty/unused harmony star reexport *//* harmony import */ var _NetMv_vue_vue_type_style_index_0_id_502e5243_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetMv.vue?vue&type=style&index=0&id=502e5243&scoped=true&lang=css& */ "d784");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NetMv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NetMv_vue_vue_type_template_id_502e5243_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NetMv_vue_vue_type_template_id_502e5243_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "502e5243",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9fb0":
/*!*************************************!*\
  !*** ./src/store/mutation-types.js ***!
  \*************************************/
/*! exports provided: ADD_TO_NET_SONGS, ADD_TO_ALBUM_IMG, ADD_TO_COMMENT, PLAYING_TRUE, PLAYING_FALSE, ADD_TO_MV, GET_SONG_DETAIL, GET_MUSIC_URL, IS_SHOW_STATE, GET_SONG_LYRIC, IS_SHOW_PROGRESS, SHOW_PLAYER, LOADED_META_DATA, GET_AUDIO_RES, IS_SHOW_TAB_BAR, Delete_Songs, GET_PLAYING_STATE, GET_COOKIE, GET_DAILY_SONGS, GET_LOGIN_STATUS, GET_LIST_MESSAGE, GET_LIKE_LIST, GET_SINGLE_SONG_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_NET_SONGS", function() { return ADD_TO_NET_SONGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_ALBUM_IMG", function() { return ADD_TO_ALBUM_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_COMMENT", function() { return ADD_TO_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYING_TRUE", function() { return PLAYING_TRUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYING_FALSE", function() { return PLAYING_FALSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_MV", function() { return ADD_TO_MV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SONG_DETAIL", function() { return GET_SONG_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MUSIC_URL", function() { return GET_MUSIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SHOW_STATE", function() { return IS_SHOW_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SONG_LYRIC", function() { return GET_SONG_LYRIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SHOW_PROGRESS", function() { return IS_SHOW_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_PLAYER", function() { return SHOW_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED_META_DATA", function() { return LOADED_META_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUDIO_RES", function() { return GET_AUDIO_RES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SHOW_TAB_BAR", function() { return IS_SHOW_TAB_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete_Songs", function() { return Delete_Songs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PLAYING_STATE", function() { return GET_PLAYING_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COOKIE", function() { return GET_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DAILY_SONGS", function() { return GET_DAILY_SONGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOGIN_STATUS", function() { return GET_LOGIN_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_MESSAGE", function() { return GET_LIST_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIKE_LIST", function() { return GET_LIKE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SINGLE_SONG_ID", function() { return GET_SINGLE_SONG_ID; });
var ADD_TO_NET_SONGS = "addToNetSongs";
var ADD_TO_ALBUM_IMG = "addToAlbumImg";
var ADD_TO_COMMENT = "addToComment";
var PLAYING_TRUE = "playingTrue";
var PLAYING_FALSE = "playingFalse";
var ADD_TO_MV = "addToMv";
var GET_SONG_DETAIL = "getSongDetail";
var GET_MUSIC_URL = "getMusicUrl";
var IS_SHOW_STATE = "isShowState";
var GET_SONG_LYRIC = "getSongLyric";
var IS_SHOW_PROGRESS = "isShowProgress";
var SHOW_PLAYER = "ShowPlayer";
var LOADED_META_DATA = "loadedmetadata";
var GET_AUDIO_RES = "getAudioRes";
var IS_SHOW_TAB_BAR = "isShowTabBar";
var Delete_Songs = "deleteSongs";
var GET_PLAYING_STATE = "getPlayingState";
var GET_COOKIE = "getCookie";
var GET_DAILY_SONGS = "getDailySongs";
var GET_LOGIN_STATUS = "getLoginStatus";
var GET_LIST_MESSAGE = "getListMessage";
var GET_LIKE_LIST = "getLikelist";
var GET_SINGLE_SONG_ID = "getSingleSongId";

/***/ }),

/***/ "a0b8":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/discpage/DiscPage.vue?vue&type=style&index=0&id=576a5a02&scoped=true&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a18c":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "3ca3");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "2b0e");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "8c4f");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "07a4");





 // import { Loading } from "_element-ui@2.15.2@element-ui";

var Find = function Find() {
  return __webpack_require__.e(/*! import() */ "chunk-6bb6d379").then(__webpack_require__.bind(null, /*! @/views/find/Find */ "d344"));
};

var PodCast = function PodCast() {
  return __webpack_require__.e(/*! import() */ "chunk-f26b6d4c").then(__webpack_require__.bind(null, /*! @/views/podcast/PodCast */ "6305"));
};

var ProFile = function ProFile() {
  return __webpack_require__.e(/*! import() */ "chunk-e79b898e").then(__webpack_require__.bind(null, /*! @/views/profile/Profile */ "3b42"));
};

var Singing = function Singing() {
  return __webpack_require__.e(/*! import() */ "chunk-a7626f02").then(__webpack_require__.bind(null, /*! @/views/singing/Singing */ "0556"));
};

var CloudVillage = function CloudVillage() {
  return __webpack_require__.e(/*! import() */ "chunk-ac70c596").then(__webpack_require__.bind(null, /*! @/views/cloudvillage/CloudVillage */ "4396"));
};

var SongList = function SongList() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/views/songlist/SongList */ "ec3e"));
};

var DiscPage = function DiscPage() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/views/discpage/DiscPage */ "6033"));
};

var LyricPage = function LyricPage() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/views/lyricpage/LyricPage */ "a69a"));
};

var NetMv = function NetMv() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/content/NetMv */ "9e0c"));
};

var NetComment = function NetComment() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/content/NetComment */ "5121"));
};

var DailyRec = function DailyRec() {
  return __webpack_require__.e(/*! import() */ "chunk-6ec5fb8b").then(__webpack_require__.bind(null, /*! @/views/find/childComps/circleicon/DailyRec */ "6b08"));
};

var Login = function Login() {
  return __webpack_require__.e(/*! import() */ "chunk-1e484a24").then(__webpack_require__.bind(null, /*! @/components/common/login/Login */ "52fa"));
};

var SongListDetail = function SongListDetail() {
  return __webpack_require__.e(/*! import() */ "chunk-162b289f").then(__webpack_require__.bind(null, /*! @/views/profile/childComps/SongListDetail */ "cef9"));
};

var PayLoad = function PayLoad() {
  return __webpack_require__.e(/*! import() */ "chunk-fc3fe026").then(__webpack_require__.bind(null, /*! @/components/common/PayLoad */ "9968"));
}; // import DailyRec from "@/views/find/childComps/DailyRec";


var originalPush = vue_router__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.push; //防止重复点击路由报错

vue_router__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.push = function push(location) {
  return originalPush.call(this, location).catch(function (err) {
    return err;
  });
}; //1.安装插件


vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]); //2.创建路由对象

var routes = [{
  path: "/",
  redirect: "/find"
}, {
  path: "/find",
  component: Find
}, {
  path: "/podcast",
  component: PodCast
}, {
  path: "/profile",
  component: ProFile
}, {
  path: "/singing",
  component: Singing
}, {
  path: "/cloudvillage",
  component: CloudVillage
}, {
  path: "/songlist",
  component: SongList
}, {
  path: "/discpage",
  component: DiscPage
}, {
  path: "/lyricpage",
  component: LyricPage
}, {
  path: "/mv",
  component: NetMv
}, {
  path: "/comment",
  component: NetComment
}, {
  path: "/find-dailyrec",
  component: DailyRec
}, {
  path: "/login",
  component: Login
}, {
  path: "/songlist-detail",
  component: SongListDetail
}, {
  path: "/payload",
  component: PayLoad
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]({
  routes: routes,
  mode: "hash"
}); //路由跳转时取消上一个页面的网络请求

router.beforeEach(function (to, from, next) {
  _store_store__WEBPACK_IMPORTED_MODULE_5__["store"].commit("clearToken"); // 取消请求

  next();
}); //3.导出

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "a30a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/NetComment.vue?vue&type=style&index=0&id=1010011e&scoped=true&lang=less& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a69a":
/*!*******************************************!*\
  !*** ./src/views/lyricpage/LyricPage.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LyricPage_vue_vue_type_template_id_9098f25e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LyricPage.vue?vue&type=template&id=9098f25e&scoped=true& */ "ec30");
/* harmony import */ var _LyricPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LyricPage.vue?vue&type=script&lang=js& */ "118b");
/* empty/unused harmony star reexport *//* harmony import */ var _LyricPage_vue_vue_type_style_index_0_id_9098f25e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LyricPage.vue?vue&type=style&index=0&id=9098f25e&lang=less&scoped=true& */ "fee2");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LyricPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LyricPage_vue_vue_type_template_id_9098f25e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LyricPage_vue_vue_type_template_id_9098f25e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9098f25e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ac1e":
/*!******************************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=5f3305e4&scoped=true&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5f3305e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5f3305e4&scoped=true&lang=css& */ "b42f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5f3305e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5f3305e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5f3305e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5f3305e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "b42f":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=5f3305e4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b6ac":
/*!*************************************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/MainTabBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/thread-loader/dist/cjs.js!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainTabBar.vue?vue&type=script&lang=js& */ "04ac");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "b9fd":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/PlayingState.vue?vue&type=style&index=0&id=0bfbb67e&scoped=true&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bb1a":
/*!************************************************************************************!*\
  !*** ./src/views/discpage/DiscPage.vue?vue&type=template&id=576a5a02&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_template_id_576a5a02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DiscPage.vue?vue&type=template&id=576a5a02&scoped=true& */ "c55d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_template_id_576a5a02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscPage_vue_vue_type_template_id_576a5a02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "c351":
/*!******************************************************************!*\
  !*** ./src/views/songlist/SongList.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SongList.vue?vue&type=script&lang=js& */ "14e5");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "c35f":
/*!**********************************************************************!*\
  !*** ./src/components/content/AlbumImg.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AlbumImg.vue?vue&type=script&lang=js& */ "2ea5");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumImg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "c55d":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/discpage/DiscPage.vue?vue&type=template&id=576a5a02&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"discpage",attrs:{"id":"discpage"},on:{"click":_vm.showLyricPage}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowDisc),expression:"isShowDisc"}],attrs:{"src":__webpack_require__(/*! @/assets/img/disc.png */ "3f82"),"alt":""}}),_c('album-img',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowDisc),expression:"isShowDisc"}],staticClass:"albumPic"}),_c('lyric-page',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowLyric),expression:"isShowLyric"}]}),_c('span',{attrs:{"id":"start"}},[_vm._v(_vm._s(_vm.$store.state.mp3CurrentTime))]),_c('div',{ref:"progress",attrs:{"id":"progressBar"},on:{"click":_vm.jumpProges}},[_c('div',{ref:"progressDot",attrs:{"id":"playProgressBar"}})]),_c('span',{attrs:{"id":"end"}},[_vm._v(_vm._s(_vm.$store.state.mp3Duraction))]),_c('span',{staticClass:"comment",on:{"click":_vm.showComment}},[_vm._v("评论~")]),_c('div',{staticClass:"togglestate",on:{"click":_vm.clktoplay}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.$store.state.isPlaying),expression:"!$store.state.isPlaying"}],staticClass:"pausebtn"},[_vm._v("")]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.$store.state.isPlaying),expression:"$store.state.isPlaying"}],staticClass:"playbtn"},[_vm._v("")])])],1)}
var staticRenderFns = []



/***/ }),

/***/ "c5d8":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/lyricpage/LyricPage.vue?vue&type=template&id=9098f25e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"lyricpage"}},[_c('ul',{ref:"lyricUL"},_vm._l((_vm.$store.state.lyric),function(item,i){return _c('li',{key:item.uid,ref:"lyric1",refInFor:true,style:({ color: _vm.lyricIndex === i ? 'green' : '#000' })},[_vm._v(" "+_vm._s(item.lyric)+" ")])}),0)])}
var staticRenderFns = []



/***/ }),

/***/ "c6ee":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=5f3305e4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app121212"}},[_c('keep-alive',[_c('router-view')],1),_c('playing-state',{directives:[{name:"show",rawName:"v-show",value:(_vm.$store.state.isShowState),expression:"$store.state.isShowState"}],ref:"playingstate",attrs:{"id":"playingstate"}}),_c('main-tab-bar',{directives:[{name:"show",rawName:"v-show",value:(_vm.$store.state.isShowTabBar),expression:"$store.state.isShowTabBar"}]}),_c('audio',{ref:"audio",staticClass:"selfaudio",attrs:{"src":_vm.$store.state.musicUrl,"loop":"","autoplay":"autoplay","id":"music"},on:{"play":_vm.playing,"pause":_vm.pausing,"loadedmetadata":_vm.loadedmetadata,"timeupdate":_vm.timeupdate}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "c7bf":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/bottom-tabbar/MainTabBar.vue?vue&type=style&index=0&id=b7a020c8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ceaf":
/*!**********************************!*\
  !*** ./src/network/interface.js ***!
  \**********************************/
/*! exports provided: getSongsMessage, songDetail, getSongMp3, getSingleDetail, getHotComment, getMVUrl, getHomeMultidata, getRecommendList, getLyric, getCircleIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongsMessage", function() { return getSongsMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songDetail", function() { return songDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongMp3", function() { return getSongMp3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleDetail", function() { return getSingleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotComment", function() { return getHotComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMVUrl", function() { return getMVUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeMultidata", function() { return getHomeMultidata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendList", function() { return getRecommendList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLyric", function() { return getLyric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCircleIcon", function() { return getCircleIcon; });
/* harmony import */ var E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ "1bab");


// 3.封装 request 模块
 // 1.获取歌曲信息

function getSongsMessage(inputname) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_2__["request"])({
    url: "/search",
    params: {
      keywords: inputname
    }
  });
}
var songDetail = function songDetail(item) {
  Object(E_2020_FrontEnd_imitateNetEaseCloudMusic_imitate_netease_music_cyan0714_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, songDetail);

  this.albumName = item.album.name;
  this.artistsName = item.artists[0].name;
  this.songName = item.name;
  this.songId = item.id;
  this.songMv = item.mvid;
  this.mvDuration = item.duration;
}; // 2.通过歌曲信息的 id 获取歌曲 mp3 的 url

function getSongMp3(songId) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_2__["request"])({
    url: "/song/url",
    params: {
      id: songId
    }
  });
} // 3.通过歌曲信息的 id 获取专辑图片

function getSingleDetail(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_2__["request"])({
    url: "/song/detail",
    params: {
      ids: id
    }
  });
} // 4.通过歌曲信息的 id 获取热门评论

function getHotComment(hotComment) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_2__["request"])({
    url: "/comment/music",
    params: {
      // type: 0,
      limit: 100,
      id: hotComment
    }
  });
} // 5.通过判断有无 mvid 获取 mv 的 url

function getMVUrl(mvid) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_2__["request"])({
    url: "/mv/url",
    params: {
      id: mvid
    }
  });
} // 6.获取轮播图图片

function getHomeMultidata() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_2__["request"])({
    url: "/banner",
    params: {
      type: 1
    }
  });
} // 7.获取推荐歌单

function getRecommendList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_2__["request"])({
    url: "/personalized",
    params: {
      limit: 6
    }
  });
} // 8.根据传入歌曲 id 获取歌词

function getLyric(songId) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_2__["request"])({
    url: "/lyric",
    params: {
      id: songId
    }
  });
} // 9.获取每日推荐等圆形图标

function getCircleIcon() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_2__["request"])({
    url: "/homepage/dragon/ball"
  });
}

/***/ }),

/***/ "d30f":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/discpage/DiscPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "b680");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_content_AlbumImg_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/content/AlbumImg.vue */ "6c90");
/* harmony import */ var _lyricpage_LyricPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lyricpage/LyricPage.vue */ "a69a");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AlbumImg: _components_content_AlbumImg_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LyricPage: _lyricpage_LyricPage_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  name: "DiscPage",
  data: function data() {
    return {
      startContent: "",
      endContent: "",
      isShowLyric: false,
      isShowDisc: true,
      isShowState: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    var playProgressBar = document.querySelector("#playProgressBar");
    setInterval(function () {
      playProgressBar.style.width = _this.$store.state.audioRes.currentTime / _this.$store.state.audioRes.duration.toFixed(3) * 100 + "vw";
    }, 1000);
  },
  methods: {
    clktoplay: function clktoplay(e) {
      // 暂停和播放按钮是否显示
      e.stopPropagation();
      var rs = this.$store.state.audioRes;

      if (this.$store.state.isPlaying) {
        rs.pause();
      } else {
        rs.play();
      }
    },
    // 跳转到歌词页面
    showLyricPage: function showLyricPage() {
      this.isShowLyric = !this.isShowLyric;
      this.isShowDisc = !this.isShowDisc;
    },
    // 显示评论
    showComment: function showComment(e) {
      // 防止冒泡到父元素
      e.stopPropagation();
      this.$router.push("/comment");
    },
    // 进度条
    jumpProges: function jumpProges(e) {
      e.stopPropagation();
      var coordStart = this.$refs.progress.getBoundingClientRect().left;
      var coordEnd = e.pageX;
      var p = (coordEnd - coordStart) / this.$refs.progress.offsetWidth;
      this.$refs.progressDot.style.width = p.toFixed(3) * 100 + "%";
      this.$store.state.audioRes.currentTime = p * this.$store.state.audioRes.duration;
    }
  },
  activated: function activated() {
    // 隐藏下方 tabbar
    this.$store.commit("isShowTabBar");
    this.$store.commit("isShowState", this.isShowState);
  },
  deactivated: function deactivated() {
    // 显示 tabbar
    this.$store.commit("isShowTabBar");
    this.$store.commit("isShowState", !this.isShowState);
  }
});

/***/ }),

/***/ "d31f":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/PlayingState.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlbumImg_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlbumImg.vue */ "6c90");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AlbumImg: _AlbumImg_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "PlayingState",
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    // console.log((this.$refs.playstate.style.bottom = "30px"));
    // 将播放器组件 commit 到 vuex
    this.$store.commit("getPlayingState", this.$refs.playstate);
  },
  props: {},
  methods: {
    clktoplay: function clktoplay(e) {
      // 获取 audio 元素，才能使用 pause 和 play 方法
      e.stopPropagation();
      var rs = this.$store.state.audioRes;

      if (this.$store.state.isPlaying) {
        rs.pause();
      } else {
        rs.play();
      }
    },
    showDiscPage: function showDiscPage(e) {
      e.stopPropagation();
      this.$router.push("/discpage");
    }
  }
});

/***/ }),

/***/ "d784":
/*!***************************************************************************************************!*\
  !*** ./src/components/content/NetMv.vue?vue&type=style&index=0&id=502e5243&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_style_index_0_id_502e5243_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NetMv.vue?vue&type=style&index=0&id=502e5243&scoped=true&lang=css& */ "9c8c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_style_index_0_id_502e5243_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_style_index_0_id_502e5243_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_style_index_0_id_502e5243_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetMv_vue_vue_type_style_index_0_id_502e5243_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "d9f9":
/*!***************************************************************************************************!*\
  !*** ./src/views/songlist/SongList.vue?vue&type=style&index=0&id=c77d6a20&scoped=true&lang=less& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_style_index_0_id_c77d6a20_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SongList.vue?vue&type=style&index=0&id=c77d6a20&scoped=true&lang=less& */ "5d16");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_style_index_0_id_c77d6a20_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_style_index_0_id_c77d6a20_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_style_index_0_id_c77d6a20_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_style_index_0_id_c77d6a20_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "db2d":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/bottom-tabbar/TabBar.vue?vue&type=style&index=0&id=55814b0e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e133":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/lyricpage/LyricPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LyricPage",
  data: function data() {
    return {
      // lyric: [],
      lyricIndex: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    setInterval(function () {
      for (var i = 0; i < _this.$store.state.lyric.length; i++) {
        //如果当前歌曲时间大于第 i 行歌词对应的时间
        if (_this.$store.state.audioRes.currentTime > parseInt(_this.$store.state.lyric[i].time)) {
          // 将该行歌词颜色变色
          _this.lyricIndex = i;
          _this.$refs.lyricUL.style.transform = "translate(0,".concat(-44 * (i + 1), "px)");
        }
      }
    }, 500);
  },
  methods: {}
});

/***/ }),

/***/ "e1c8":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/NetMv.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NetMV"
});

/***/ }),

/***/ "e4d4":
/*!************************************************************************!*\
  !*** ./src/components/content/NetComment.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NetComment.vue?vue&type=script&lang=js& */ "45ac");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "e566":
/*!**************************************************************************!*\
  !*** ./src/components/content/PlayingState.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PlayingState.vue?vue&type=script&lang=js& */ "d31f");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "ec30":
/*!**************************************************************************************!*\
  !*** ./src/views/lyricpage/LyricPage.vue?vue&type=template&id=9098f25e&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_template_id_9098f25e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LyricPage.vue?vue&type=template&id=9098f25e&scoped=true& */ "c5d8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_template_id_9098f25e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_template_id_9098f25e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ec3e":
/*!*****************************************!*\
  !*** ./src/views/songlist/SongList.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SongList_vue_vue_type_template_id_c77d6a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SongList.vue?vue&type=template&id=c77d6a20&scoped=true& */ "f49e");
/* harmony import */ var _SongList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SongList.vue?vue&type=script&lang=js& */ "c351");
/* empty/unused harmony star reexport *//* harmony import */ var _SongList_vue_vue_type_style_index_0_id_c77d6a20_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SongList.vue?vue&type=style&index=0&id=c77d6a20&scoped=true&lang=less& */ "d9f9");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SongList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SongList_vue_vue_type_template_id_c77d6a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SongList_vue_vue_type_template_id_c77d6a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c77d6a20",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f49e":
/*!************************************************************************************!*\
  !*** ./src/views/songlist/SongList.vue?vue&type=template&id=c77d6a20&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_template_id_c77d6a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SongList.vue?vue&type=template&id=c77d6a20&scoped=true& */ "37e7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_template_id_c77d6a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SongList_vue_vue_type_template_id_c77d6a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "fc32":
/*!*******************************************************************************************************!*\
  !*** ./src/components/common/bottom-tabbar/MainTabBar.vue?vue&type=template&id=b7a020c8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_template_id_b7a020c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainTabBar.vue?vue&type=template&id=b7a020c8&scoped=true& */ "9b6b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_template_id_b7a020c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainTabBar_vue_vue_type_template_id_b7a020c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "fc7e":
/*!***********************************************************************************************************!*\
  !*** ./src/components/content/PlayingState.vue?vue&type=style&index=0&id=0bfbb67e&scoped=true&lang=less& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_style_index_0_id_0bfbb67e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PlayingState.vue?vue&type=style&index=0&id=0bfbb67e&scoped=true&lang=less& */ "b9fd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_style_index_0_id_0bfbb67e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_style_index_0_id_0bfbb67e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_style_index_0_id_0bfbb67e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayingState_vue_vue_type_style_index_0_id_0bfbb67e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "fee2":
/*!*****************************************************************************************************!*\
  !*** ./src/views/lyricpage/LyricPage.vue?vue&type=style&index=0&id=9098f25e&lang=less&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_style_index_0_id_9098f25e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LyricPage.vue?vue&type=style&index=0&id=9098f25e&lang=less&scoped=true& */ "0a1a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_style_index_0_id_9098f25e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_style_index_0_id_9098f25e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_style_index_0_id_9098f25e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LyricPage_vue_vue_type_style_index_0_id_9098f25e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

/******/ });
//# sourceMappingURL=app.ad464369.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1e484a24"],{

/***/ "0cb2b":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0de1":
/*!******************************!*\
  !*** ./src/network/login.js ***!
  \******************************/
/*! exports provided: login, getLoginStatus, getLikelist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginStatus", function() { return getLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLikelist", function() { return getLikelist; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "1bab");
 //用户登录

function login(tel, pwd) {
  var getTimestamp = new Date().getTime();
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["request"])({
    url: "/login/cellphone",
    params: {
      phone: tel,
      password: pwd,
      timestamp: getTimestamp // timestamp: 15030199,

    }
  });
} // 登录状态

function getLoginStatus(cookies) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["request"])({
    url: "/login/status",
    params: {
      cookie: cookies
    }
  });
} //获取喜欢的音乐

function getLikelist(uid, token, cookie) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["request"])({
    url: "/likelist",
    params: {
      uid: uid,
      token: token,
      cookie: cookie
    }
  });
}

/***/ }),

/***/ "52fa":
/*!***********************************************!*\
  !*** ./src/components/common/login/Login.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_e7d66d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=e7d66d10&scoped=true& */ "78de");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "68c5");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_e7d66d10_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=e7d66d10&scoped=true&lang=less& */ "6085");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_e7d66d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_e7d66d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e7d66d10",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5319":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "d784a");
var anObject = __webpack_require__(/*! ../internals/an-object */ "825a");
var toLength = __webpack_require__(/*! ../internals/to-length */ "50c4");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "a691");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "1d80");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "8aa5");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "0cb2b");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "14c3");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "5d31":
/*!******************************************!*\
  !*** ./src/network/userlist/playlist.js ***!
  \******************************************/
/*! exports provided: getListMessage, getListCount, getCorMusicId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListMessage", function() { return getListMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListCount", function() { return getListCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorMusicId", function() { return getCorMusicId; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request */ "1bab");
 //根据用户 id 获取歌单信息

function getListMessage(userId) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["request"])({
    url: "/user/playlist",
    params: {
      uid: userId
    }
  });
} //获取创建歌单和收藏歌单的数量

function getListCount(cookie) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["request"])({
    url: "/user/subcount",
    params: {
      cookie: cookie
    }
  });
} //歌单能看到歌单名字, 但看不到具体歌单内容 ,传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)

function getCorMusicId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["request"])({
    url: '/playlist/detail',
    params: {
      id: id
    }
  });
}

/***/ }),

/***/ "6085":
/*!*********************************************************************************************************!*\
  !*** ./src/components/common/login/Login.vue?vue&type=style&index=0&id=e7d66d10&scoped=true&lang=less& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_e7d66d10_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=e7d66d10&scoped=true&lang=less& */ "954d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_e7d66d10_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_e7d66d10_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_e7d66d10_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_e7d66d10_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "68c5":
/*!************************************************************************!*\
  !*** ./src/components/common/login/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/thread-loader/dist/cjs.js!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "edff");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "78de":
/*!******************************************************************************************!*\
  !*** ./src/components/common/login/Login.vue?vue&type=template&id=e7d66d10&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_e7d66d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=e7d66d10&scoped=true& */ "a04f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_e7d66d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_e7d66d10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "954d":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/login/Login.vue?vue&type=style&index=0&id=e7d66d10&scoped=true&lang=less& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a04f":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/login/Login.vue?vue&type=template&id=e7d66d10&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"login"}},[_c('el-row',{attrs:{"type":"flex","justify":"center","gutter":0}},[_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"grid-content"})])],1),_c('el-row',{attrs:{"gutter":0,"type":"flex","justify":"center"}},[_c('el-col',{attrs:{"span":22.5}},[_c('el-card',{staticStyle:{"border-radius":"24px","width":"82vw"},attrs:{"shadow":"always"}},[_c('h2',{staticStyle:{"text-align":"center"}},[_vm._v("欢迎登陆")]),_c('el-divider'),_c('el-form',{ref:"telephoneValidateForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ValidateForm,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"手机号","prop":"telephone","rules":[{ required: true, message: '手机号不能为空' }]}},[_c('el-input',{attrs:{"placeholder":"请输入手机号","type":"number"},model:{value:(_vm.ValidateForm.telephone),callback:function ($$v) {_vm.$set(_vm.ValidateForm, "telephone", _vm._n($$v))},expression:"ValidateForm.telephone"}})],1),_c('el-form-item',{attrs:{"label":"密码","prop":"pwd","rules":[{ required: true, message: '密码不能为空' }]}},[_c('el-input',{attrs:{"placeholder":"请输入密码","show-password":""},model:{value:(_vm.ValidateForm.pwd),callback:function ($$v) {_vm.$set(_vm.ValidateForm, "pwd", $$v)},expression:"ValidateForm.pwd"}})],1),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.submitForm()}}},[_vm._v("提交")]),_c('el-button',{on:{"click":function($event){return _vm.resetForm('telephoneValidateForm')}}},[_vm._v("重置")])],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "edff":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/login/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "5319");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _network_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/network/login.js */ "0de1");
/* harmony import */ var _network_userlist_playlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/network/userlist/playlist */ "5d31");




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
  name: "Login",
  components: {},
  data: function data() {
    return {
      ValidateForm: {
        telephone: "18689758622",
        pwd: "csy148376.2599"
      },
      cookies: null,
      value: "我是login组件",
      loginStatus: {},
      listMessage: [],
      token: ""
    };
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      //用户登录
      Object(_network_login_js__WEBPACK_IMPORTED_MODULE_4__["login"])(this.ValidateForm.telephone, this.ValidateForm.pwd).then(function (res) {
        if (res.code === 200) {
          _this.token = res.token;
          console.log("登录成功");
          alert("登录成功");
          _this.cookies = encodeURIComponent(res.cookie);

          _this.$store.commit("getCookie", _this.cookies);

          _this.$router.replace("/profile");
        } else {
          alert("密码错误");
        }
      });
      setTimeout(function () {
        //获取登录状态（包括用户 id,头像,背景图片,昵称等）
        Object(_network_login_js__WEBPACK_IMPORTED_MODULE_4__["getLoginStatus"])(_this.cookies).then(function (res) {
          var data = res.data;
          _this.loginStatus.id = data.account.id;
          _this.loginStatus.avatarUrl = data.profile.avatarUrl;
          _this.loginStatus.backgroundUrl = data.profile.backgroundUrl;
          _this.loginStatus.nickname = data.profile.nickname;

          _this.$store.commit("getLoginStatus", _this.loginStatus); //一旦获得用户 id 值，就发送获取相关歌单信息请求


          if (_this.$store.state.loginStatus.hasOwnProperty("id")) {
            //获取我喜欢音乐里每一首歌曲 id
            Object(_network_login_js__WEBPACK_IMPORTED_MODULE_4__["getLikelist"])(_this.$store.state.loginStatus.id, _this.token, _this.$store.state.cookie).then(function (res) {
              //获取我喜欢的音乐列表(id 数组)
              var ids = res.ids;

              _this.$store.commit("getLikelist", ids);
            }); //获取每个歌单的图片、id、歌单名字(如: ...喜欢的音乐)、歌曲的数量

            Object(_network_userlist_playlist__WEBPACK_IMPORTED_MODULE_5__["getListMessage"])(_this.$store.state.loginStatus.id).then(function (res) {
              var songlistMesArr = [];
              res.playlist.forEach(function (item) {
                var obj = {};
                obj.coverImgUrl = item.coverImgUrl;
                obj.id = item.id;
                obj.name = item.name;
                obj.trackCount = item.trackCount;
                songlistMesArr.push(obj);
              });
              _this.listMessage = songlistMesArr;

              _this.$store.commit("getListMessage", _this.listMessage);
            });
          }
        });
      }, 1000);
    },
    resetForm: function resetForm(formName) {
      // this.$refs[formName].resetFields();
      this.ValidateForm.telephone = "";
      this.ValidateForm.pwd = "";
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=chunk-1e484a24.fc92e683.js.map
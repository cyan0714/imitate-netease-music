(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6ec5fb8b"],{

/***/ "2eff":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/find/childComps/circleicon/DailyRec.vue?vue&type=template&id=95b8939a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"songsmenu",attrs:{"id":"dailyRec"}},[_c('h4',[_vm._v("每日推荐")]),(_vm.isShowTip)?_c('div',[_c('span',[_vm._v("获取每日推荐歌曲,请 ")]),_c('router-link',{attrs:{"to":"/login","replace":""}},[_c('span',{staticClass:"immidia"},[_vm._v("登录")])])],1):_vm._e(),_vm._l((_vm.$store.state.getDailySongs),function(item,index){return _c('li',{key:index,staticClass:"play",on:{"click":function($event){return _vm.clickToPlay(index)}}},[_c('div',{staticClass:"pic"},[_c('img',{attrs:{"src":item.alPicUrl,"alt":""}})]),_c('div',{staticClass:"detail"},[_c('span',{staticClass:"song-name"},[_vm._v(_vm._s(item.songName))]),_c('div',{staticClass:"aboutsong"},[_c('span',[_vm._v(" "+_vm._s(item.artistsName)+" - "+_vm._s(item.alName))])])])])})],2)}
var staticRenderFns = []



/***/ }),

/***/ "4ae5":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/find/childComps/circleicon/DailyRec.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "1276");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "466d");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "498a");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "a9e3");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _network_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/network/interface */ "ceaf");









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
  name: "DailyRec",
  components: {},
  data: function data() {
    return {
      musicUrl: "",
      isShowstate: true,
      commentMessage: [],
      songdetail: {},
      lyric: "",
      albumUrl: "",
      isShowTip: true
    };
  },
  props: {
    dailyS: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    clickToPlay: function clickToPlay(index) {
      var _this = this;

      //点击每日推荐图标时 vuex 就已经存储了每日推荐歌曲的信息了,所以这里可以调用
      var dailySongsId = this.$store.state.getDailySongs[index].id;
      var dailySongsObj = this.$store.state.getDailySongs[index];
      Object(_network_interface__WEBPACK_IMPORTED_MODULE_9__["getSongsMessage"])(this.$store.state.getDailySongs[index].songName).then(function (res) {
        // 把歌曲相关信息(专辑名，专辑 id，作者，歌曲名，歌曲 id，mvid，mv播放时间)传给 Vuex
        _this.$store.commit("getSongDetail", dailySongsObj); // 是否在当前页面展示播放栏


        _this.$store.commit("isShowState", _this.isShowstate);
      });
      Object(_network_interface__WEBPACK_IMPORTED_MODULE_9__["getSongMp3"])(dailySongsId).then(function (res) {
        _this.musicUrl = res.data[0].url;

        _this.$store.commit("getMusicUrl", _this.musicUrl);
      }); // 3.获取专辑图片

      Object(_network_interface__WEBPACK_IMPORTED_MODULE_9__["getSingleDetail"])(dailySongsId).then(function (res) {
        _this.albumUrl = res.songs[0].al.picUrl;

        _this.$store.commit("addToAlbumImg", _this.albumUrl);
      }); // 4.获取评论

      Object(_network_interface__WEBPACK_IMPORTED_MODULE_9__["getHotComment"])(dailySongsId).then(function (res) {
        _this.commentMessage = res.comments;

        _this.$store.commit("addToComment", _this.commentMessage);
      }); // 5.获取歌词

      Object(_network_interface__WEBPACK_IMPORTED_MODULE_9__["getLyric"])(dailySongsId).then(function (res) {
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

        _this.$store.commit("getSongLyric", lyricsObjArr); // console.log(res.klylrc);

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
    }
  },
  activated: function activated() {
    if (this.$store.state.cookie !== "") {
      this.isShowTip = false;
    }
  }
});

/***/ }),

/***/ "6b08":
/*!***********************************************************!*\
  !*** ./src/views/find/childComps/circleicon/DailyRec.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DailyRec_vue_vue_type_template_id_95b8939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DailyRec.vue?vue&type=template&id=95b8939a&scoped=true& */ "81de");
/* harmony import */ var _DailyRec_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DailyRec.vue?vue&type=script&lang=js& */ "7208");
/* empty/unused harmony star reexport *//* harmony import */ var _DailyRec_vue_vue_type_style_index_0_id_95b8939a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DailyRec.vue?vue&type=style&index=0&id=95b8939a&scoped=true&lang=less& */ "f337");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DailyRec_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DailyRec_vue_vue_type_template_id_95b8939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DailyRec_vue_vue_type_template_id_95b8939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95b8939a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7208":
/*!************************************************************************************!*\
  !*** ./src/views/find/childComps/circleicon/DailyRec.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DailyRec.vue?vue&type=script&lang=js& */ "4ae5");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "81de":
/*!******************************************************************************************************!*\
  !*** ./src/views/find/childComps/circleicon/DailyRec.vue?vue&type=template&id=95b8939a&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_template_id_95b8939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b485af3-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DailyRec.vue?vue&type=template&id=95b8939a&scoped=true& */ "2eff");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_template_id_95b8939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b485af3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_template_id_95b8939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "f337":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/find/childComps/circleicon/DailyRec.vue?vue&type=style&index=0&id=95b8939a&scoped=true&lang=less& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_style_index_0_id_95b8939a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DailyRec.vue?vue&type=style&index=0&id=95b8939a&scoped=true&lang=less& */ "f971");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_style_index_0_id_95b8939a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_style_index_0_id_95b8939a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_style_index_0_id_95b8939a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyRec_vue_vue_type_style_index_0_id_95b8939a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "f971":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/find/childComps/circleicon/DailyRec.vue?vue&type=style&index=0&id=95b8939a&scoped=true&lang=less& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-6ec5fb8b.c485f89c.js.map
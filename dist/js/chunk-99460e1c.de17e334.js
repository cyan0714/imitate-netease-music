(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99460e1c"],{"00b6":function(t,i,s){"use strict";s("543e")},"543e":function(t,i,s){},"6b08":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"songsmenu",attrs:{id:"dailyRec"}},[s("h4",[t._v("每日推荐")]),t.isShowTip?s("div",[s("span",[t._v("获取每日推荐歌曲,请 ")]),s("router-link",{attrs:{to:"/login"},on:{click:function(i){return t.ClickToShowTip()}}},[s("span",{staticClass:"immidia"},[t._v("登录")])])],1):t._e(),t._l(t.$store.state.getDailySongs,(function(i,e){return s("li",{key:e,staticClass:"play",on:{click:function(i){return t.clickToPlay(e)}}},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:i.alPicUrl,alt:""}})]),s("div",{staticClass:"detail"},[s("span",{staticClass:"song-name"},[t._v(t._s(i.songName))]),s("div",{staticClass:"aboutsong"},[s("span",[t._v(" "+t._s(i.artistsName)+" - "+t._s(i.alName))])])])])}))],2)},a=[],c=(s("1276"),s("ac1f"),s("159b"),s("466d"),s("498a"),s("fb6a"),s("d3b7"),s("25f0"),s("a9e3"),s("ceaf")),n={name:"DailyRec",components:{},data:function(){return{musicUrl:"",isShowstate:!0,commentMessage:[],songdetail:{},lyric:"",albumUrl:"",isShowTip:!0}},props:{dailyS:{type:Array,default:function(){return[]}}},methods:{clickToPlay:function(t){var i=this,s=this.$store.state.getDailySongs[t].id,e=this.$store.state.getDailySongs[t];Object(c["i"])(this.$store.state.getDailySongs[t].songName).then((function(t){i.$store.commit("getSongDetail",e),i.$store.commit("isShowState",i.isShowstate)})),Object(c["h"])(s).then((function(t){i.musicUrl=t.data[0].url,i.$store.commit("getMusicUrl",i.musicUrl)})),Object(c["g"])(s).then((function(t){i.albumUrl=t.songs[0].al.picUrl,i.$store.commit("addToAlbumImg",i.albumUrl)})),Object(c["c"])(s).then((function(t){i.commentMessage=t.comments,i.$store.commit("addToComment",i.commentMessage)})),Object(c["d"])(s).then((function(t){i.lyric=t.lrc.lyric;var s=i.lyric,e=/\n/,a=s.split(e),c=/\[\d{2}:\d{2}.\d{2,3}\]/,n=[];a.forEach((function(t){if(""!==t){var s={},e=t.match(c);s.lyric=""===t.split("]")[1].trim()?"":t.split("]")[1].trim(),s.time=e?i.formatLyricTime(e[0].slice(1,e[0].length-1)):0,s.uid=Math.random().toString().slice(-6),""===s.lyric?console.log("这一行没有歌词"):n.push(s)}})),i.$store.commit("getSongLyric",n)}))},formatLyricTime:function(t){var i=/.*:/,s=/:.*\./,e=/\./,a=parseInt(t.match(i)[0].slice(0,2)),c=parseInt(t.match(s)[0].slice(1,3)),n=t.slice(t.match(e).index+1,t.match(e).index+4);return 0!==a&&(c+=60*a),Number(c+"."+n)}},activated:function(){""!==this.$store.state.cookie&&(this.isShowTip=!1)}},o=n,r=(s("00b6"),s("2877")),l=Object(r["a"])(o,e,a,!1,null,"f3987050",null);i["default"]=l.exports}}]);
//# sourceMappingURL=chunk-99460e1c.de17e334.js.map
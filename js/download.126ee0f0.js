(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["download"],{"12da":function(t,n,s){},3971:function(t,n,s){"use strict";s.r(n);var o=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"download"},[s("h1",[t._v("Playlists")]),s("button",{staticClass:"btn btn-secondary btn-lg",attrs:{type:"button"},on:{click:t.createPlaylist}},[t._v(" Create playlist ")]),s("section",{staticClass:"songs"},t._l(t.currentSong,(function(n){return s("li",{key:n.id},[t._v(" "+t._s(t.currentSong)+" "),s("button",{staticClass:"btn btn-secondary btn-lg",class:{active:n===t.currentSong},attrs:{type:"button"},on:{click:function(s){t.currentSong=n}}}),s("button",{on:{click:t.cleanPlaylist}},[t._v("-")])])})),0)])},e=[],l=(s("99af"),s("2909")),a={name:"Download",data:function(){return{songs:[],currentSong:[]}},mounted:function(){sessionStorage.songs&&(this.songs=JSON.parse(sessionStorage.getItem("playlist")),console.log("hello"+this.playlist))},watch:{songs:{handler:function(t){console.log(t),localStorage.songs=JSON.stringify(t),console.log(localStorage)},deep:!0}},methods:{createPlaylist:function(){var t;if(null!==(t=sessionStorage.getItem("playlist"))&&void 0!==t&&t.length){var n=JSON.parse(sessionStorage.getItem("playlist"));console.log("current",n);var s=[].concat(Object(l["a"])(n),[this.song]);localStorage.setItem("playlist",JSON.stringify(s))}else localStorage.setItem("playlist",JSON.stringify([this.song]))},cleanPlaylist:function(){localStorage.removeItem("playlist")},addPlaylist:function(){this.$store.commit("addPlaylist",this.item)}}},i=a,c=(s("c918"),s("2877")),r=Object(c["a"])(i,o,e,!1,null,"332df564",null);n["default"]=r.exports},c918:function(t,n,s){"use strict";s("12da")}}]);
//# sourceMappingURL=download.126ee0f0.js.map
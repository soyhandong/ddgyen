(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{272:function(t,e,o){var content=o(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("01907af4",content,!0,{sourceMap:!1})},273:function(t,e,o){(e=o(11)(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#424242;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:-webkit-inline-box;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-btn-toggle>.v-btn.v-btn:not(:first-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=e},286:function(t,e,o){"use strict";o(10),o(8),o(5),o(4),o(7);var n=o(2),r=(o(272),o(75)),l=r.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r.a.options.computed.classes.call(this)}},methods:{genData:r.a.options.methods.genData}}),v=o(16),c=o(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(l,v.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return h({},l.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,h({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},288:function(t,e,o){var content=o(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("325faf4c",content,!0,{sourceMap:!1})},311:function(t,e,o){"use strict";var n=o(288);o.n(n).a},312:function(t,e,o){(e=o(11)(!1)).push([t.i,".btn[data-v-475c6f1c]{border:#dce2e9}.being[data-v-475c6f1c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}",""]),t.exports=e},367:function(t,e,o){"use strict";o.r(e);var n={name:"chwideug",data:function(){return{text1:"a1",text2:"b1",text3:"c1",text4:"d1"}}},r=(o(311),o(50)),l=o(72),v=o.n(l),c=o(127),d=o(286),h=o(289),m=o(269),w=o(284),x=o(363),f=o(315),_=o(316),y=o(69),k=o(41),C=o(293),O=o(266),S=o(309),V=o(366),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{column:"column",row:"row"}},[o("v-flex",{attrs:{wrap:"wrap"}},[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",[t._v("대상물 구분")]),t._v(" "),o("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}},[o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{value:"a1",color:"white"}},[t._v("주택")]),t._v(" "),o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{value:"a2",color:"white"}},[t._v("농지")]),t._v(" "),o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"100%","max-width":"100%"},attrs:{value:"a3",color:"white"}},[t._v("토지,건물,오피스텔")])],1)],1)],1),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",[t._v("취득 구분")]),t._v(" "),o("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}},[o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"25%","max-width":"25%"},attrs:{value:"b1",color:"white"}},[t._v("매매")]),t._v(" "),o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"25%","max-width":"25%"},attrs:{value:"b2",color:"white"}},[t._v("증여")]),t._v(" "),o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"25%","max-width":"25%"},attrs:{value:"b3",color:"white"}},[t._v("상속")]),t._v(" "),"a1"==t.text1||"a3"==t.text1?o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"25%","max-width":"25%"},attrs:{value:"b4",color:"white"}},[t._v("신축")]):t._e()],1)],1)],1),t._v(" "),"a1"==t.text1&&"b1"==t.text2?o("div",[o("v-list-item",[o("v-list-item-content",[o("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}},[o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"100%","max-width":"100%"},attrs:{value:"c1",color:"white"}},[t._v("85m^2 이하(읍, 면지역은 100m^2)")]),t._v(" "),o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"100%","max-width":"100%"},attrs:{value:"c2",color:"white"}},[t._v("85m^2 초과(읍, 면지역은 100m^2)")])],1)],1)],1)],1):t._e(),t._v(" "),"a2"==t.text1&&"b1"==t.text2?o("div",[o("v-list-item",[o("v-list-item-content",[o("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text4,callback:function(e){t.text4=e},expression:"text4"}},[o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{value:"d1",color:"white"}},[t._v("신규")]),t._v(" "),o("v-btn",{staticClass:"btn",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{value:"d2",color:"white"}},[t._v("2년 이상 자경")])],1)],1)],1)],1):t._e(),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("v-col",{attrs:{cols:"7"}},[o("v-list-item-title",[t._v("취득가액")])],1),t._v(" "),o("v-col",{attrs:{cols:"5"}},[o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{width:"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{color:"primary"}},n),[t._v("보기")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("취득가액 산정방법")])]),t._v(" "),o("v-card-text",[t._v("・ 매매, 분양, 경매 등 개인간의 유상거래일 때는 신고가액 (실제 거래가격을 의미하며, 신고를 하지 않거나 신고 금액이\n                                    시가표준액에 미달 또는 신고 가액 표시가 없는 경우 시가표준액으로 계산함)\n                                    "),o("br"),t._v(" "),o("br"),t._v("・ 상속, 증여 등 무상거래일 때는 시가표준액\n                                            "),o("br"),t._v(" "),o("br"),t._v("・ 국가, 법인 등에 의해 취득가격이 증명되는 거래일 때는 취득가격\n                                                    "),o("br"),t._v(" "),o("br"),t._v("※ 시가 표준액이란, 주택은 '개별 주택 공시가격', 주택 이외 건물은 '지자체장이 결정한 가액', 토지는 '개별공시지가'를 의미합니다\n                                                        ")]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"green darken-1",text:"text"},on:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1)],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("v-subheader",{attrs:{color:"green darken-4"}},[t._v("취득가액")])],1),t._v(" "),o("v-col",{attrs:{cols:"7"}},[o("v-text-field",{attrs:{placeholder:"취득가액 입력",suffix:"만원"}})],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"being"},[o("v-btn",{attrs:{"max-width":"80%","min-width":"80%",color:"#2D9527",dark:"dark"}},[t._v("계산하기")])],1)],1)],1)}),[],!1,null,"475c6f1c",null);e.default=component.exports;v()(component,{VBtn:c.a,VBtnToggle:d.a,VCard:h.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:w.a,VDialog:x.a,VFlex:f.a,VLayout:_.a,VListItem:y.a,VListItemContent:k.a,VListItemTitle:k.b,VRow:C.a,VSpacer:O.a,VSubheader:S.a,VTextField:V.a})}}]);
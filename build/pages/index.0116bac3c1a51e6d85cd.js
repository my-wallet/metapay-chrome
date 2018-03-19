webpackJsonp([0],{"+ptz":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar",{attrs:{account:t.account}}),n("div",{staticClass:"so-back"},[t._m(0),n("LoginForm"),n("label",{staticClass:"network_label",attrs:{for:"network_field"}},[t._v("Network")]),n("div",{staticClass:"so-dropdown networkSelect"},[n("span",{staticClass:"s-inputGroup__item s-inputGroup__item--tag sendSetup__memo__memoSetup__selectTag"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.network,expression:"network"}],staticClass:"sendSetup__memo__memoSetup__selectTag__select so-dropdown__select",attrs:{id:"network_field"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.network=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),n("option",{attrs:{value:"https://horizon.stellar.org"}},[t._v("horizon.stellar.org")]),n("option",{attrs:{value:"https://horizon-testnet.stellar.org"}},[t._v("horizon-testnet.stellar.org")])])])])],1)],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h2",{staticClass:"welcomeBox__title",staticStyle:{"margin-bottom":"0.5em"}},[this._v("Web Wallet")]),e("p",[this._v("A lightweight wallet that integrates with decentralized apps and enables one click purchases. It's MetaMask for the Stellar network.")])])}]};e.a=a},"/NdP":function(t,e,n){var r=n("l1xt");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("05aba852",r,!1,{sourceMap:!1})},"/TYz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("1bSE"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var s=n("+ptz"),i=!1;var l=function(t){i||n("/NdP")},c=n("VU/8")(a.a,s.a,!1,l,null,null);c.options.__file="pages/index.vue",e.default=c.exports},"1bSE":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("56lY")),a=i(n("GLTl")),o=n("pnVp"),s=i(n("bdDp"));n("NYxO");function i(t){return t&&t.__esModule?t:{default:t}}e.default={middleware:"loggedIn",components:{LoginForm:r.default,NavBar:a.default},created:function(){var t=this;s.default.getItem("pay.meta.re::network").then(function(e){t.network=e})},data:function(){return{login:null,account:this.$store.state.account}},computed:{network:{get:function(){return this.$store.state.network},set:function(t){t&&((0,o.switchNetwork)(t),this.$store.commit("updateNetwork",t))}}}}},"56lY":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Gqm7"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var s=n("laOt"),i=!1;var l=function(t){i||n("5lEj")},c=n("VU/8")(a.a,s.a,!1,l,null,null);c.options.__file="components/LoginForm.vue",e.default=c.exports},"5lEj":function(t,e,n){var r=n("db2V");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("e3cdf3d6",r,!1,{sourceMap:!1})},GLTl:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("QxtO"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var s=n("Y3xP"),i=!1;var l=function(t){i||n("d6rc")},c=n("VU/8")(a.a,s.a,!1,l,null,null);c.options.__file="components/NavBar.vue",e.default=c.exports},Gqm7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Qx8R"),a=(o(r),n("pnVp"),o(n("bdDp")));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"LoginForm",data:function(){return{secret:void 0,processing:!1,alert:!1}},methods:{handleSubmit:function(){var t=this;this.processing=!0,this.alert=void 0;try{var e=r.Keypair.fromSecret(this.secret).publicKey();this.processing=!1;var n={secret:this.secret,address:e};this.$store.commit("login",n),a.default.getItem("pay.meta.re::redirect").then(function(e){a.default.removeItem("pay.meta.re::redirect"),t.$router.push(e||"/dashboard")})}catch(t){console.error(t),this.processing=!1,this.alert={title:"Invalid secret key",text:'Secret keys are uppercase and begin with the letter "S."'}}}}}},QxtO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=n("bdDp");(r=a)&&r.__esModule;e.default={name:"NavBar",props:["account"],methods:{truncateAddress:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.slice(0,6)+"..."+t.slice(-6)},logout:function(){this.$store.commit("logout"),this.$router.push("/")}}}},Y3xP:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"so-back"},[n("div",{staticClass:"so-chunk"},[n("div",{staticClass:"so-siteHeader siteHeader"},[t._m(0),t.account?n("span",{staticClass:"uk-hidden@s"},[t._v(t._s(t.truncateAddress(t.account.address)))]):t._e(),t.account?n("span",{staticClass:"so-siteHeader__simpleAlign",staticStyle:{float:"right","font-size":"16px"}},[n("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("Sign out")])]):t._e()])])])};r._withStripped=!0;var a={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"so-logo uk-visible@s"},[e("a",{staticClass:"so-logo__main"},[e("img",{staticClass:"logo",attrs:{src:"/images/logo.png"}})])])}]};e.a=a},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},d6rc:function(t,e,n){var r=n("iFRm");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("4621fd42",r,!1,{sourceMap:!1})},db2V:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},iFRm:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".logo{height:24px;vertical-align:middle}.so-siteHeader{padding:10px 0}",""])},l1xt:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"body{min-width:500px}.loginBox{border-radius:2px;border-bottom:1px solid #9ce1f5;margin-bottom:2em}label.network_label{display:block;margin-bottom:5px}.networkSelect{margin-bottom:30px}",""])},laOt:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"loginBox",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("p",{staticClass:"loginBox__label"},[t._v("Secret key:")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.secret,expression:"secret",modifiers:{trim:!0}}],staticClass:"loginBox__input",attrs:{type:"password",placeholder:"Example: SCHKBJ............ZLJ7"},domProps:{value:t.secret},on:{input:function(e){e.target.composing||(t.secret=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t.alert?n("div",{staticClass:"s-alert s-alert--alert"},[n("span",[t._v("\n        "+t._s(t.alert.title)),n("br"),n("br"),t._v("\n        "+t._s(t.alert.text)+"\n      ")])]):t._e(),n("button",{staticClass:"s-button loginBox__submit",class:{"is-disabled":t.processing},attrs:{type:"submit",disabled:t.processing}},[t._v("Sign in")])])};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},pnVp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BalanceFeed=e.server=void 0;var r=u(n("Zrlr")),a=u(n("wxAW"));e.switchNetwork=function(t){t==f?(e.server=v=new o.default.Server(f),s.default.setItem("pay.meta.re::network",f)):(e.server=v=new o.default.Server(p),s.default.setItem("pay.meta.re::network",p))},e.createBalanceFeed=function(t,e){h?h.setOptions(e):h=new m(t,e);return h},e.streamPrice=function(t){var e=function(){return i.default.get(d).then(function(e){var n=e.data[0];t.commit("priceUpdate",n)}).catch(console.error)};_||(_=setInterval(e,6e5));e()};var o=u(n("Qx8R")),s=u(n("bdDp")),i=u(n("mtWM")),l=u(n("M4fF")),c=n("uotZ");u(n("vdRI"));function u(t){return t&&t.__esModule?t:{default:t}}var d="https://api.coinmarketcap.com/v1/ticker/stellar/",f="https://horizon.stellar.org",p="https://horizon-testnet.stellar.org",v=e.server=void 0;s.default.getItem("pay.meta.re::network").then(function(t){e.server=v=new o.default.Server(t||f)});var m=e.BalanceFeed=function(){function t(e,n){(0,r.default)(this,t),this.store=e,this.setOptions(n),this.accountAddress=void 0}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t||{}}},{key:"start",value:function(t){return this.accountAddress=t,v.accounts().accountId(t).stream({onmessage:this.onmessage.bind(this),onerror:this.onStreamError.bind(this)})}},{key:"loadAccount",value:function(t){var e=this;v.loadAccount(t).then(function(t){return e.onBalanceChange(t.balances)}).catch(function(t){if("NotFoundError"!==t.name)throw t;e.onBalanceChange(null)})}},{key:"onBalanceChange",value:function(t){this.options.onBalanceChange&&this.options.onBalanceChange(t);var e=void 0;if(l.default.isArray(t)&&t.length>0){var n=(0,l.default)(t).find(function(t){return"native"===t.asset_type});e=n?n.balance:0}else e=0;this.store.commit("balanceUpdate",{balance:e,balanceDisplay:new c.BigNumber(e).toFormat()})}},{key:"onStreamError",value:function(t){this.options.onStreamError&&this.options.onStreamError(t),this.loadAccount(this.accountAddress)}},{key:"onmessage",value:function(t){this.onBalanceChange(t.balances)}}]),t}(),h=void 0;var _=void 0;o.default.Network.useTestNetwork()},wxAW:function(t,e,n){"use strict";e.__esModule=!0;var r,a=n("C4MV"),o=(r=a)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()}});
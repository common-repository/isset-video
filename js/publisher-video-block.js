!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=395)}({0:function(e,t,n){"use strict";e.exports=n(168)},168:function(e,t,n){"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(29),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}function x(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=_.prototype;var k=w.prototype=new x;k.constructor=w,r(k,_.prototype),k.isPureReactComponent=!0;var E={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,o={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:E.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,F=[];function T(e,t,n,r){if(F.length){var o=F.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>F.length&&F.push(e)}function N(e,t,n){return null==e?0:function e(t,n,r,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var c=!1;if(null===t)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return r(o,t,""===n?"."+C(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=n+C(s=t[l],l);c+=e(s,u,r,o)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(s=t.next()).done;)c+=e(s=s.value,u=n+C(s,l++),r,o);else if("object"===s)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function z(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?R(e,r,n,(function(e){return e})):null!=e&&(A(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function R(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),N(e,z,t=T(t,i,r,o)),$(t)}var D={current:null};function U(){var e=D.current;if(null===e)throw Error(m(321));return e}var V={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return R(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;N(e,I,t=T(null,null,t,n)),$(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return R(e,t,null,(function(e){return e})),t},only:function(e){if(!A(e))throw Error(m(143));return e}},t.Component=_,t.Fragment=s,t.Profiler=l,t.PureComponent=w,t.StrictMode=c,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var o=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)j.call(t,u)&&!S.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.14.0"},17:function(e,t,n){var r;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function i(e){return s(l(e),arguments)}function a(e,t){return i.apply(null,[e].concat(t||[]))}function s(e,t){var n,r,a,s,c,l,u,d,p,f=1,h=e.length,v="";for(r=0;r<h;r++)if("string"==typeof e[r])v+=e[r];else if("object"==typeof e[r]){if((s=e[r]).keys)for(n=t[f],a=0;a<s.keys.length;a++){if(null==n)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[a],s.keys[a-1]));n=n[s.keys[a]]}else n=s.param_no?t[s.param_no]:t[f++];if(o.not_type.test(s.type)&&o.not_primitive.test(s.type)&&n instanceof Function&&(n=n()),o.numeric_arg.test(s.type)&&"number"!=typeof n&&isNaN(n))throw new TypeError(i("[sprintf] expecting number but found %T",n));switch(o.number.test(s.type)&&(d=n>=0),s.type){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,s.width?parseInt(s.width):0);break;case"e":n=s.precision?parseFloat(n).toExponential(s.precision):parseFloat(n).toExponential();break;case"f":n=s.precision?parseFloat(n).toFixed(s.precision):parseFloat(n);break;case"g":n=s.precision?String(Number(n.toPrecision(s.precision))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=s.precision?n.substring(0,s.precision):n;break;case"t":n=String(!!n),n=s.precision?n.substring(0,s.precision):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=s.precision?n.substring(0,s.precision):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=s.precision?n.substring(0,s.precision):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}o.json.test(s.type)?v+=n:(!o.number.test(s.type)||d&&!s.sign?p="":(p=d?"+":"-",n=n.toString().replace(o.sign,"")),l=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",u=s.width-(p+n).length,c=s.width&&u>0?l.repeat(u):"",v+=s.align?p+n+c:"0"===l?p+c+n:c+p+n)}return v}var c=Object.create(null);function l(e){if(c[e])return c[e];for(var t,n=e,r=[],i=0;n;){if(null!==(t=o.text.exec(n)))r.push(t[0]);else if(null!==(t=o.modulo.exec(n)))r.push("%");else{if(null===(t=o.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){i|=1;var a=[],s=t[2],l=[];if(null===(l=o.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(l[1]);""!==(s=s.substring(l[0].length));)if(null!==(l=o.key_access.exec(s)))a.push(l[1]);else{if(null===(l=o.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(l[1])}t[2]=a}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}n=n.substring(t[0].length)}return c[e]=r}t.sprintf=i,t.vsprintf=a,"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=a,void 0===(r=function(){return{sprintf:i,vsprintf:a}}.call(t,n,t,e))||(e.exports=r))}()},23:function(e,t,n){e.exports=function(e,t){var n,r,o=0;function i(){var i,a,s=n,c=arguments.length;e:for(;s;){if(s.args.length===arguments.length){for(a=0;a<c;a++)if(s.args[a]!==arguments[a]){s=s.next;continue e}return s!==n&&(s===r&&(r=s.prev),s.prev.next=s.next,s.next&&(s.next.prev=s.prev),s.next=n,s.prev=null,n.prev=s,n=s),s.val}s=s.next}for(i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return s={args:i,val:e.apply(null,i)},n?(n.prev=s,s.next=n):r=s,o===t.maxSize?(r=r.prev).next=null:o++,n=s,s.val}return t=t||{},i.clear=function(){n=null,r=null,o=0},i}},29:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,c=a(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))o.call(n,u)&&(c[u]=n[u]);if(r){s=r(n);for(var d=0;d<s.length;d++)i.call(n,s[d])&&(c[s[d]]=n[s[d]])}}return c}},395:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(9),a=n(4);const s=window.wp.blocks,{BlockControls:c,InspectorControls:l}=window.wp.editor,{PanelBody:u,PanelRow:d}=wp.components;s.registerBlockType("isset-video-publisher/video-block",{title:"isset.video video",icon:"video-alt2",category:"embed",edit:class extends o.a.Component{constructor(e){super(e),this.state={lazyStep:0},this.getSuggestions=this.getSuggestions.bind(this),this.setValue=this.setValue.bind(this),this.changeSearchTerm=this.changeSearchTerm.bind(this),this.updatedParsedUuid=this.updatedParsedUuid.bind(this),this.setAttr=this.setAttr.bind(this),this.renderProcessingPlaceholder=this.renderProcessingPlaceholder.bind(this),this.renderError=this.renderError.bind(this)}componentDidMount(){this.getSuggestions("",0)}componentDidUpdate(e){const{attributes:{uuid:t,autoplay:n}}=this.props;e.attributes.uuid===t&&e.attributes.autoplay===n||this.updatedParsedUuid()}renderStill(e){return e&&e.length>0?o.a.createElement("img",{src:e[0]+"?width=300&height=168"}):o.a.createElement("div",{className:"isset-video-thumb-placeholder"})}getSuggestions(e,t=null){let{setAttributes:n,attributes:{suggestions:r}}=this.props;const{root:o}=window.IssetVideoArchiveAjax,{lazyStep:a}=this.state;!1===t&&(r=[]),Object(i.archiveAjax)("api/search",{q:e,offset:25*a}).then(e=>{const{results:t}=e;n({suggestions:[...r,...t.map((e,t)=>(e.processed=e.stills&&e.stills.length>0,e))]}),this.setState({lazyStep:a+1})}).catch(e=>console.log(e))}setValue(e){const{setAttributes:t}=this.props;if(""===e)this.setState({lazyStep:0},()=>{t({uuid:"",uuidParsed:"",videoThumbnail:"",videoName:"",videoSize:"",autoplay:"",searchTerm:""}),this.getSuggestions("",!1)});else{const{uuid:n}=e;Object(i.archiveAjax)(`api/files/${n}/details`).then(e=>{const{publish:{publish_uuid:n},file:r}=e;t({uuid:n,uuidParsed:`[publish uuid=${n}]`,videoThumbnail:r.stills[0],videoName:r.filename,videoSize:r.size,autoplay:""})}).catch(e=>console.log(e))}}setAttr(e,t){const{setAttributes:n}=this.props;switch(e){case"autoplay":n({autoplay:!0===t?"autoplay":""})}}updatedParsedUuid(){const{setAttributes:e,attributes:{uuid:t,autoplay:n}}=this.props;e({uuidParsed:`[publish uuid="${t}" autoplay="${n}"]`})}changeSearchTerm(e){const{setAttributes:t}=this.props;t({searchTerm:e}),this.setState({lazyStep:0},()=>this.getSuggestions(e,!1))}renderProcessingPlaceholder(){return o.a.createElement("div",{className:"isset-video-icon-container"},o.a.createElement("span",{className:"dashicons dashicons-backup"}),o.a.createElement("div",null,Object(a.a)("Processing","isset-video")))}renderError(){return o.a.createElement("div",{className:"isset-video-icon-container isset-video-warning"},o.a.createElement("span",{className:"dashicons dashicons-warning"}),o.a.createElement("div",null,Object(a.a)("Error","isset-video")))}renderSuggestions(e){return e.map(e=>{const{processed:t,filename:n,stills:r}=e;return t?o.a.createElement("div",{className:"video-block-suggestions-wrapper",onClick:()=>this.setValue(e),key:"video-suggestion-"+e.uuid},o.a.createElement("div",null,this.renderStill(r)),o.a.createElement("span",{className:"video-block-text"},n)):o.a.createElement("div",{className:"video-block-suggestions-wrapper",key:"video-processing-"+e.uuid},o.a.createElement("div",{className:"isset-video-placeholder-container"},o.a.createElement("div",{className:"isset-video-thumb-placeholder"},this.renderProcessingPlaceholder())),o.a.createElement("span",{className:"video-block-text"},n||Object(a.a)("File nof found","isset-video")))})}render(){const{attributes:{uuid:e,suggestions:t,videoThumbnail:n,videoName:r,videoSize:i,searchTerm:s,autoplay:p,uuidParsed:f}}=this.props;let{lazyStep:h}=this.state;return Array.isArray(e),1===e.length||"string"==typeof e&&""!==e?o.a.createElement("div",{className:"video-block-selected-wrapper"},o.a.createElement(c,null,o.a.createElement(l,null,o.a.createElement(u,{title:Object(a.a)("Video info","isset-video")},o.a.createElement(d,null,o.a.createElement("span",null,o.a.createElement("b",null,Object(a.a)("Video name","isset-video"),": ")," ",r)),o.a.createElement(d,null,o.a.createElement("span",null,o.a.createElement("b",null,Object(a.a)("Video size","isset-video"),": ")," ",(parseInt(i)/1e9).toFixed(3)," GB")),o.a.createElement(d,null,o.a.createElement("span",null,o.a.createElement("b",null,"Uuid: ")," ",e)," ",o.a.createElement("br",null))),o.a.createElement(u,{title:Object(a.a)("Options","isset-video")},o.a.createElement(d,null,o.a.createElement("span",null,o.a.createElement("b",null,Object(a.a)("Autoplay","isset-video"),": ")," ",o.a.createElement("input",{onChange:e=>this.setAttr("autoplay",e.target.checked),type:"checkbox"})))))),o.a.createElement("div",{className:"video-block-relative"},o.a.createElement("div",null,o.a.createElement("img",{src:n}),o.a.createElement("span",{className:"dashicon dashicons-controls-play video-block-play-button"})),o.a.createElement("div",{className:"video-block-icon-close-wrapper",onClick:()=>this.setValue("")},o.a.createElement("span",{className:"video-block-icon-close dashicons dashicons-no"})))):o.a.createElement("div",{className:"video-block-container"},o.a.createElement("div",{className:"video-block-title-wrapper"},Object(a.a)("Videos on isset.video","isset-video")),o.a.createElement("form",{className:"video-block-form",onSubmit:e=>e.preventDefault()},o.a.createElement("input",{className:"video-block-input",placeholder:Object(a.a)("Search videos","isset-video"),onBlur:e=>this.changeSearchTerm(e.target.value)}),o.a.createElement("button",{className:"video-block-button",type:"submit"},Object(a.a)("Search","isset-video"))),o.a.createElement("hr",null),o.a.createElement("div",{className:"video-block-suggestions-container"},0===t.length?o.a.createElement("span",{className:"video-block-text"},Object(a.a)("No publishes found","isset-video")):this.renderSuggestions(t)),o.a.createElement("div",null,o.a.createElement("button",{onClick:()=>this.getSuggestions(s,h),className:"video-block-button"},Object(a.a)("More results","isset-video"))))}},attributes:{uuidParsed:{type:"array",source:"children",selector:"video-embed"},uuid:{type:"array",source:"children",selector:"video-uuid"},videoName:{type:"array",source:"children",selector:"video-name"},videoSize:{type:"array",source:"children",selector:"video-size"},videoThumbnail:{type:"array",source:"children",selector:"video-thumbnail"},searchTerm:{type:"array",source:"children"},suggestions:{type:"array",source:"children"},autoplay:{type:"array",source:"children",selector:"video-autoplay"}},save:e=>{const{attributes:t}=e;return o.a.createElement("div",null,o.a.createElement("video-uuid",{style:{display:"none"}},t.uuid),o.a.createElement("video-embed",null,t.uuidParsed),o.a.createElement("video-thumbnail",{style:{display:"none"}},t.videoThumbnail),o.a.createElement("video-name",{style:{display:"none"}},t.videoName),o.a.createElement("video-size",{style:{display:"none"}},t.videoSize),o.a.createElement("video-autoplay",{style:{display:"none"}},t.autoplay))}})},4:function(e,t,n){"use strict";n.d(t,"b",(function(){return F})),n.d(t,"a",(function(){return T}));var r,o,i,a,s=n(23),c=n.n(s);n(17),c()(console.error);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},o=["(","?"],i={")":["("],":":["?","?:"]},a=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var u={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,n){if(e)throw t;return n}};function d(e){var t=function(e){for(var t,n,s,c,l=[],u=[];t=e.match(a);){for(n=t[0],(s=e.substr(0,t.index).trim())&&l.push(s);c=u.pop();){if(i[n]){if(i[n][0]===c){n=i[n][1]||n;break}}else if(o.indexOf(c)>=0||r[c]<r[n]){u.push(c);break}l.push(c)}i[n]||u.push(n),e=e.substr(t.index+n.length)}return(e=e.trim())&&l.push(e),l.concat(u.reverse())}(e);return function(e){return function(e,t){var n,r,o,i,a,s,c=[];for(n=0;n<e.length;n++){if(a=e[n],i=u[a]){for(r=i.length,o=Array(r);r--;)o[r]=c.pop();try{s=i.apply(null,o)}catch(e){return e}}else s=t.hasOwnProperty(a)?t[a]:+a;c.push(s)}return c[0]}(t,e)}}var p={contextDelimiter:"",onMissingKey:null};function f(e,t){var n;for(n in this.data=e,this.pluralForms={},this.options={},p)this.options[n]=void 0!==t&&n in t?t[n]:p[n]}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}f.prototype.getPluralForm=function(e,t){var n,r,o,i,a=this.pluralForms[e];return a||("function"!=typeof(o=(n=this.data[e][""])["Plural-Forms"]||n["plural-forms"]||n.plural_forms)&&(r=function(e){var t,n,r;for(t=e.split(";"),n=0;n<t.length;n++)if(0===(r=t[n].trim()).indexOf("plural="))return r.substr(7)}(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),i=d(r),o=function(e){return+i({n:e})}),a=this.pluralForms[e]=o),a(t)},f.prototype.dcnpgettext=function(e,t,n,r,o){var i,a,s;return i=void 0===o?0:this.getPluralForm(e,o),a=n,t&&(a=t+this.options.contextDelimiter+n),(s=this.data[e][a])&&s[i]?s[i]:(this.options.onMissingKey&&this.options.onMissingKey(n,e),0===i?n:r)};var y={"":{plural_forms:function(e){return 1===e?0:1}}},m=/^i18n\.(n?gettext|has_translation)(_|$)/;var b=function(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var g=function(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var _=function(e,t){return function(n,r,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,a=e[t];if(g(n)&&b(r))if("function"==typeof o)if("number"==typeof i){var s={callback:o,priority:i,namespace:r};if(a[n]){var c,l=a[n].handlers;for(c=l.length;c>0&&!(i>=l[c-1].priority);c--);c===l.length?l[c]=s:l.splice(c,0,s),a.__current.forEach((function(e){e.name===n&&e.currentIndex>=c&&e.currentIndex++}))}else a[n]={handlers:[s],runs:0};"hookAdded"!==n&&e.doAction("hookAdded",n,r,o,i)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r,o){var i=e[t];if(g(r)&&(n||b(o))){if(!i[r])return 0;var a=0;if(n)a=i[r].handlers.length,i[r]={runs:i[r].runs,handlers:[]};else for(var s=i[r].handlers,c=function(e){s[e].namespace===o&&(s.splice(e,1),a++,i.__current.forEach((function(t){t.name===r&&t.currentIndex>=e&&t.currentIndex--})))},l=s.length-1;l>=0;l--)c(l);return"hookRemoved"!==r&&e.doAction("hookRemoved",r,o),a}}};var w=function(e,t){return function(n,r){var o=e[t];return void 0!==r?n in o&&o[n].handlers.some((function(e){return e.namespace===r})):n in o}};var k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r){var o=e[t];o[r]||(o[r]={handlers:[],runs:0}),o[r].runs++;var i=o[r].handlers;for(var a=arguments.length,s=new Array(a>1?a-1:0),c=1;c<a;c++)s[c-1]=arguments[c];if(!i||!i.length)return n?s[0]:void 0;var l={name:r,currentIndex:0};for(o.__current.push(l);l.currentIndex<i.length;){var u=i[l.currentIndex],d=u.callback.apply(null,s);n&&(s[0]=d),l.currentIndex++}return o.__current.pop(),n?s[0]:void 0}};var E=function(e,t){return function(){var n,r,o=e[t];return null!==(n=null===(r=o.__current[o.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==n?n:null}};var j=function(e,t){return function(n){var r=e[t];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}};var S=function(e,t){return function(n){var r=e[t];if(g(n))return r[n]&&r[n].runs?r[n].runs:0}},O=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=_(this,"actions"),this.addFilter=_(this,"filters"),this.removeAction=x(this,"actions"),this.removeFilter=x(this,"filters"),this.hasAction=w(this,"actions"),this.hasFilter=w(this,"filters"),this.removeAllActions=x(this,"actions",!0),this.removeAllFilters=x(this,"filters",!0),this.doAction=k(this,"actions"),this.applyFilters=k(this,"filters",!0),this.currentAction=E(this,"actions"),this.currentFilter=E(this,"filters"),this.doingAction=j(this,"actions"),this.doingFilter=j(this,"filters"),this.didAction=S(this,"actions"),this.didFilter=S(this,"filters")};var A=function(){return new O}(),P=(A.addAction,A.addFilter,A.removeAction,A.removeFilter,A.hasAction,A.hasFilter,A.removeAllActions,A.removeAllFilters,A.doAction,A.applyFilters,A.currentAction,A.currentFilter,A.doingAction,A.doingFilter,A.didAction,A.didFilter,A.actions,A.filters,function(e,t,n){var r=new f({}),o=new Set,i=function(){o.forEach((function(e){return e()}))},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";r.data[t]=v(v(v({},y),r.data[t]),e),r.data[t][""]=v(v({},y[""]),r.data[t][""])},s=function(e,t){a(e,t),i()},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return r.data[e]||a(void 0,e),r.dcnpgettext(e,t,n,o,i)},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return e},u=function(e,t,r){var o=c(r,t,e);return n?(o=n.applyFilters("i18n.gettext_with_context",o,e,t,r),n.applyFilters("i18n.gettext_with_context_"+l(r),o,e,t,r)):o};if(e&&s(e,t),n){var d=function(e){m.test(e)&&i()};n.addAction("hookAdded","core/i18n",d),n.addAction("hookRemoved","core/i18n",d)}return{getLocaleData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return r.data[e]},setLocaleData:s,resetLocaleData:function(e,t){r.data={},r.pluralForms={},s(e,t)},subscribe:function(e){return o.add(e),function(){return o.delete(e)}},__:function(e,t){var r=c(t,void 0,e);return n?(r=n.applyFilters("i18n.gettext",r,e,t),n.applyFilters("i18n.gettext_"+l(t),r,e,t)):r},_x:u,_n:function(e,t,r,o){var i=c(o,void 0,e,t,r);return n?(i=n.applyFilters("i18n.ngettext",i,e,t,r,o),n.applyFilters("i18n.ngettext_"+l(o),i,e,t,r,o)):i},_nx:function(e,t,r,o,i){var a=c(i,o,e,t,r);return n?(a=n.applyFilters("i18n.ngettext_with_context",a,e,t,r,o,i),n.applyFilters("i18n.ngettext_with_context_"+l(i),a,e,t,r,o,i)):a},isRTL:function(){return"rtl"===u("ltr","text direction")},hasTranslation:function(e,t,o){var i,a,s=t?t+""+e:e,c=!(null===(i=r.data)||void 0===i||null===(a=i[null!=o?o:"default"])||void 0===a||!a[s]);return n&&(c=n.applyFilters("i18n.has_translation",c,e,t,o),c=n.applyFilters("i18n.has_translation_"+l(o),c,e,t,o)),c}}}(void 0,void 0,A)),F=(P.getLocaleData.bind(P),P.setLocaleData.bind(P)),T=(P.resetLocaleData.bind(P),P.subscribe.bind(P),P.__.bind(P));P._x.bind(P),P._n.bind(P),P._nx.bind(P),P.isRTL.bind(P),P.hasTranslation.bind(P)},9:function(e,t,n){"use strict";async function r(e,t){const{nonce:n,ajaxUrl:r}=window.IssetVideoPublisherAjax;let o=new FormData;if(o.set("_ajax_nonce",n),o.set("action",e),t)for(const e of Object.keys(t))o.set(e,t[e]);let i=await fetch(r,{method:"POST",body:o});return new Promise((e,t)=>{i.json().then(t=>{e(t)}).catch(e=>{t(e)})})}async function o(e,t={},n="GET",r={}){const{archiveUrl:o,archiveToken:i}=window.IssetVideoArchiveAjax;return a(`${o}${e}?${s(t)}`,i,n,r)}async function i(e,t={},n="GET",r={},o=null){const{publisherUrl:i,publisherToken:c}=window.IssetVideoArchiveAjax;return a(`${i}${e}?${s(t)}`,c,n,r,o)}async function a(e,t,n="GET",r={},o=null){let i={};if(o instanceof File){const e=new FormData;e.append("file",o),Object.keys(r).forEach(t=>e.append(t,data[t])),i={method:n,headers:{Accept:"application/json","x-token-auth":t},body:e}}else i={method:n,headers:{Accept:"application/json","Content-Type":"application/json","x-token-auth":t}},Object.keys(r).length>0&&(i.body=JSON.stringify(r));let a=await fetch(e,i);return new Promise((e,t)=>{204===a.status&&e({}),a.json().then(t=>{e(t)}).catch(e=>{t(e)})})}function s(e){let t="";const n={};Object.keys(e).forEach(r=>{Array.isArray(e[r])?e[r].forEach(e=>t=`${t}&${r}[]=${e}`):n[r]=e[r]});return`${new URLSearchParams(n).toString()}${t}`}function c(){const{publisherUrl:e}=window.IssetVideoArchiveAjax;return e}n.r(t),n.d(t,"wpAjax",(function(){return r})),n.d(t,"archiveAjax",(function(){return o})),n.d(t,"publisherAjax",(function(){return i})),n.d(t,"getPublisherUrl",(function(){return c}))}});
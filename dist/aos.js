!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",i=NaN,n="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),m=Object.prototype.toString,f=Math.max,v=Math.min,p=function(){return l.Date.now()};function b(e,i,n){var o,a,r,d,s,c,u=0,l=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError(t);function w(t){var i=o,n=a;return o=a=void 0,u=t,d=e.apply(n,i)}function h(e){var t=e-c;return void 0===c||t>=i||t<0||m&&e-u>=r}function k(){var e=p();if(h(e))return x(e);s=setTimeout(k,function(e){var t=i-(e-c);return m?v(t,r-(e-u)):t}(e))}function x(e){return s=void 0,b&&o?w(e):(o=a=void 0,d)}function L(){var e=p(),t=h(e);if(o=arguments,a=this,c=e,t){if(void 0===s)return function(e){return u=e,s=setTimeout(k,i),l?w(e):d}(c);if(m)return s=setTimeout(k,i),w(c)}return void 0===s&&(s=setTimeout(k,i)),d}return i=y(i)||0,g(n)&&(l=!!n.leading,r=(m="maxWait"in n)?f(y(n.maxWait)||0,i):r,b="trailing"in n?!!n.trailing:b),L.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=c=a=s=void 0},L.flush=function(){return void 0===s?d:x(p())},L}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==n}(e))return i;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=r.test(e);return c||d.test(e)?s(e.slice(2),c?2:8):a.test(e)?i:+e}var w=function(e,i,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),b(e,i,{leading:o,maxWait:i,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",L=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,E=/^0o[0-7]+$/i,N=parseInt,z="object"==typeof e&&e&&e.Object===Object&&e,C="object"==typeof self&&self&&self.Object===Object&&self,D=z||C||Function("return this")(),A=Object.prototype.toString,q=Math.max,T=Math.min,M=function(){return D.Date.now()};function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&A.call(e)==x}(e))return k;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(L,"");var i=j.test(e);return i||E.test(e)?N(e.slice(2),i?2:8):O.test(e)?k:+e}var $=function(e,t,i){var n,o,a,r,d,s,c=0,u=!1,l=!1,m=!0;if("function"!=typeof e)throw new TypeError(h);function f(t){var i=n,a=o;return n=o=void 0,c=t,r=e.apply(a,i)}function v(e){var i=e-s;return void 0===s||i>=t||i<0||l&&e-c>=a}function p(){var e=M();if(v(e))return b(e);d=setTimeout(p,function(e){var i=t-(e-s);return l?T(i,a-(e-c)):i}(e))}function b(e){return d=void 0,m&&n?f(e):(n=o=void 0,r)}function g(){var e=M(),i=v(e);if(n=arguments,o=this,s=e,i){if(void 0===d)return function(e){return c=e,d=setTimeout(p,t),u?f(e):r}(s);if(l)return d=setTimeout(p,t),f(s)}return void 0===d&&(d=setTimeout(p,t)),r}return t=H(t)||0,S(i)&&(u=!!i.leading,a=(l="maxWait"in i)?q(H(i.maxWait)||0,t):a,m="trailing"in i?!!i.trailing:m),g.cancel=function(){void 0!==d&&clearTimeout(d),c=0,n=s=o=d=void 0},g.flush=function(){return void 0===d?r:b(M())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(function e(t){var i=void 0,n=void 0;for(i=0;i<t.length;i+=1){if((n=t[i]).dataset&&n.dataset.aos)return!0;if(n.children&&e(n.children))return!0}return!1}(t.concat(i)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var i=window.document,n=new(Y())(P);W=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,K=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,G=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!J.test(e)&&!K.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!G.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var i=void 0;return U.ie11()?(i=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):i=new CustomEvent(e,{detail:t}),document.dispatchEvent(i)},X=function(e){return e.forEach(function(e,t){return function(e,t){var i=e.options,n=e.position,o=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(o,i.animatedClassNames),V("aos:out",o),e.options.id&&V("aos:in:"+e.options.id,o),e.animated=!1)});i.mirror&&t>=n.out&&!i.once?a():t>=n.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(o,i.animatedClassNames),V("aos:in",o),e.options.id&&V("aos:in:"+e.options.id,o),e.animated=!0):e.animated&&!i.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),i+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:i,left:t}},ee=function(e,t,i){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||i},te=function(e,t){return e.forEach(function(e,i){var n=ee(e.node,"mirror",t.mirror),o=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),d=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,i){var n=window.innerHeight,o=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),d=a||i,s=e;o&&document.querySelectorAll(o)&&(s=document.querySelectorAll(o)[0]);var c=Z(s).top-n;switch(d){case"top-bottom":break;case"center-bottom":c+=s.offsetHeight/2;break;case"bottom-bottom":c+=s.offsetHeight;break;case"top-center":c+=n/2;break;case"center-center":c+=n/2+s.offsetHeight/2;break;case"bottom-center":c+=n/2+s.offsetHeight;break;case"top-top":c+=n;break;case"bottom-top":c+=n+s.offsetHeight;break;case"center-top":c+=n+s.offsetHeight/2}return c+r}(e.node,t.offset,t.anchorPlacement),out:n&&function(e,t){window.innerHeight;var i=ee(e,"anchor"),n=ee(e,"offset",t),o=e;return i&&document.querySelectorAll(i)&&(o=document.querySelectorAll(i)[0]),Z(o).top+o.offsetHeight-n}(e.node,t.offset)},e.options={once:o,mirror:n,animatedClassNames:d,id:a}}),e},ie=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},ne={animateLoading1:'<div class="animateLoading1Dom"><div></div><div></div><div></div><div></div></div>',animateLoading2:'<div class="animateLoading2Dom"><div style="--i:0"></div><div style="--i:1"></div><div style="--i:2"></div><div style="--i:3"></div><div style="--i:4"></div></div>',animateLoading3:'<div class="animateLoading3Dom"><span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span><span style="--i:5"></span><span style="--i:6"></span><span style="--i:7"></span></div>',animateLoading4:'<div class="animateLoading4Dom"><div><div></div><div></div><div></div><div></div></div><div><div></div><div></div><div></div><div></div></div><div><div></div><div></div><div></div><div></div></div></div>',animateLoading5:'<div class="animateLoading5Dom"><div></div><div></div><div></div></div>',animateLoading6:'<div class="animateLoading6Dom"><div></div></div>',animateLoading7:'<div class="animateLoading7Dom"><div></div></div>',animateLoading8:'<div class="animateLoading8Dom"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',animateLoading9:'<div class="animateLoading9Dom"><div></div></div>'},oe=[],ae=!1,re={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},de=function(){return document.all&&!window.atob},se=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ae=!0),ae&&(oe=te(oe,re),X(oe),window.addEventListener("scroll",w(function(){X(oe,re.once)},re.throttleDelay)))},ce=function(){if(oe=ie(),le(re.disable)||de())return ue();se()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),re.initClassName&&e.node.classList.remove(re.initClassName),re.animatedClassName&&e.node.classList.remove(re.animatedClassName)})},le=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){if(re=I(re,e),console.log(re),oe=ie(),re.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),re.disableMutationObserver=!0),re.disableMutationObserver||_.ready("[data-aos]",ce),le(re.disable)||de())return ue();document.querySelector("body").setAttribute("data-aos-easing",re.easing),document.querySelector("body").setAttribute("data-aos-duration",re.duration),document.querySelector("body").setAttribute("data-aos-delay",re.delay),-1===["DOMContentLoaded","load"].indexOf(re.startEvent)?document.addEventListener(re.startEvent,function(){se(!0)}):window.addEventListener("load",function(){se(!0)}),"DOMContentLoaded"===re.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&se(!0),window.addEventListener("resize",$(se,re.debounceDelay,!0)),window.addEventListener("orientationchange",$(se,re.debounceDelay,!0));var t=Array.from(document.getElementsByClassName("animateJs"));function i(e,t){for(var i=e.className.split(/\s+/),n=0;n<i.length;n++)if(i[n]===t)return!0;return!1}t.length>0&&t.forEach(function(e,t){for(var n in ne)i(e,n)&&(e.innerHTML+=ne[n]?ne[n]:"")})},refresh:se,refreshHard:ce}});
//# sourceMappingURL=aos.js.map

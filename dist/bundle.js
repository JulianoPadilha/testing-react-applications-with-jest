!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,r){r(1),e.exports=r(4)},function(e,t,r){(function(t,r){!function(t){"use strict";function n(e,t,r,n){var i=Object.create((t||a).prototype),s=new m(n||[]);return i._invoke=p(e,r,s),i}function i(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function a(){}function s(){}function o(){}function c(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function u(e){this.arg=e}function l(e){function t(t,r){var n=e[t](r),i=n.value;return i instanceof u?Promise.resolve(i.arg).then(a,s):Promise.resolve(i).then(function(e){return n.value=e,n})}function n(e,r){function n(){return t(e,r)}return i=i?i.then(n,n):new Promise(function(e){e(n())})}"object"==typeof r&&r.domain&&(t=r.domain.bind(t));var i,a=t.bind(e,"next"),s=t.bind(e,"throw");t.bind(e,"return");this._invoke=n}function p(e,t,r){var n=x;return function(a,s){if(n===P)throw new Error("Generator is already running");if(n===E){if("throw"===a)throw s;return b()}for(;;){var o=r.delegate;if(o){if("return"===a||"throw"===a&&o.iterator[a]===g){r.delegate=null;var c=o.iterator.return;if(c){var u=i(c,o.iterator,s);if("throw"===u.type){a="throw",s=u.arg;continue}}if("return"===a)continue}var u=i(o.iterator[a],o.iterator,s);if("throw"===u.type){r.delegate=null,a="throw",s=u.arg;continue}a="next",s=g;var l=u.arg;if(!l.done)return n=_,l;r[o.resultName]=l.value,r.next=o.nextLoc,r.delegate=null}if("next"===a)r._sent=s,r.sent=n===_?s:g;else if("throw"===a){if(n===x)throw n=E,s;r.dispatchException(s)&&(a="next",s=g)}else"return"===a&&r.abrupt("return",s);n=P;var u=i(e,t,r);if("normal"===u.type){n=r.done?E:_;var l={value:u.arg,done:r.done};if(u.arg!==U)return l;r.delegate&&"next"===a&&(s=g)}else"throw"===u.type&&(n=E,a="throw",s=u.arg)}}}function h(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function d(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function m(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(h,this),this.reset(!0)}function f(e){if(e){var t=e[j];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(y.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=g,t.done=!0,t};return n.next=n}}return{next:b}}function b(){return{value:g,done:!0}}var g,y=Object.prototype.hasOwnProperty,j="function"==typeof Symbol&&Symbol.iterator||"@@iterator",w="object"==typeof e,v=t.regeneratorRuntime;if(v)return void(w&&(e.exports=v));v=t.regeneratorRuntime=w?e.exports:{},v.wrap=n;var x="suspendedStart",_="suspendedYield",P="executing",E="completed",U={},L=o.prototype=a.prototype;s.prototype=L.constructor=o,o.constructor=s,s.displayName="GeneratorFunction",v.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},v.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o,e.prototype=Object.create(L),e},v.awrap=function(e){return new u(e)},c(l.prototype),v.async=function(e,t,r,i){var a=new l(n(e,t,r,i));return v.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},c(L),L[j]=function(){return this},L.toString=function(){return"[object Generator]"},v.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},v.values=f,m.prototype={constructor:m,reset:function(e){if(this.prev=0,this.next=0,this.sent=g,this.done=!1,this.delegate=null,this.tryEntries.forEach(d),!e)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=g)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return a.type="throw",a.arg=e,r.next=t,!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var s=y.call(i,"catchLoc"),o=y.call(i,"finallyLoc");if(s&&o){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?this.next=i.finallyLoc:this.complete(a),U},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),d(r),U}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;d(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:f(e),resultName:t,nextLoc:r},U}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(t,r(2),r(3))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){f&&d&&(f=!1,d.length?m=d.concat(m):b=-1,m.length&&o())}function o(){if(!f){var e=i(s);f=!0;for(var t=m.length;t;){for(d=m,m=[];++b<t;)d&&d[b].run();b=-1,t=m.length}d=null,f=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var l,p,h=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{p="function"==typeof clearTimeout?clearTimeout:n}catch(e){p=n}}();var d,m=[],f=!1,b=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];m.push(new c(e,t)),1!==m.length||f||i(o)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=u,h.addListener=u,h.once=u,h.off=u,h.removeListener=u,h.removeAllListeners=u,h.emit=u,h.prependListener=u,h.prependOnceListener=u,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(e,t){throw new Error("Module build failed: SyntaxError: /Users/jpadilha/Documents/github/testing-react-applications-with-jest/src/index.jsx: Unexpected token (35:8)\n\n[0m [90m 33 | [39m[36mconst[39m render [33m=[39m (_App)[33m=>[39m{[0m\n[0m [90m 34 | [39m    [33mReactDOM[39m[33m.[39mrender([0m\n[0m[31m[1m>[22m[39m[90m 35 | [39m        [33m<[39m[33mProvider[39m store[33m=[39m{store}[33m>[39m[0m\n[0m [90m    | [39m        [31m[1m^[22m[39m[0m\n[0m [90m 36 | [39m            [33m<[39m[33mConnectedRouter[39m  history[33m=[39m{history}[33m>[39m[0m\n[0m [90m 37 | [39m                 [33m<[39m_App [33m/[39m[33m>[39m[0m\n[0m [90m 38 | [39m             [33m<[39m[33m/[39m[33mConnectedRouter[39m[33m>[39m[0m\n    at Parser.raise (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:6344:17)\n    at Parser.unexpected (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:7659:16)\n    at Parser.parseExprAtom (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8828:20)\n    at Parser.parseExprSubscripts (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8413:23)\n    at Parser.parseMaybeUnary (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8393:21)\n    at Parser.parseExprOps (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8280:23)\n    at Parser.parseMaybeConditional (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8253:23)\n    at Parser.parseMaybeAssign (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8200:21)\n    at Parser.parseExprListItem (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:9475:18)\n    at Parser.parseCallExpressionArguments (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8620:22)\n    at Parser.parseSubscript (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8515:29)\n    at Parser.parseSubscripts (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8434:19)\n    at Parser.parseExprSubscripts (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8423:17)\n    at Parser.parseMaybeUnary (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8393:21)\n    at Parser.parseExprOps (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8280:23)\n    at Parser.parseMaybeConditional (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8253:23)\n    at Parser.parseMaybeAssign (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8200:21)\n    at Parser.parseExpression (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8148:23)\n    at Parser.parseStatementContent (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:9917:23)\n    at Parser.parseStatement (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:9788:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:10364:25)\n    at Parser.parseBlockBody (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:10351:10)\n    at Parser.parseBlock (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:10335:10)\n    at Parser.parseFunctionBody (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:9408:24)\n    at Parser.parseArrowExpression (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:9349:10)\n    at Parser.parseParenAndDistinguishExpression (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8986:12)\n    at Parser.parseExprAtom (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8760:21)\n    at Parser.parseExprSubscripts (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8413:23)\n    at Parser.parseMaybeUnary (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8393:21)\n    at Parser.parseExprOps (/Users/jpadilha/Documents/github/testing-react-applications-with-jest/node_modules/@babel/parser/lib/index.js:8280:23)")}]);
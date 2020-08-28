/*! ****************************************************************************
 * TaskQ v1.0.0
 *
 * A library that processes tasks sequentially.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2020 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from ES6lib v1.0.1.
 * ************************************************************************** */
const $__ES6GLOB={};!function(t,n){"use strict";"function"==typeof define&&define.amd?define([""],n):"object"==typeof exports?module.exports=n(t):t.TaskQ=n(t)}($__ES6GLOB,t=>{"use strict";let n,e={};return function(){const i=t.TaskQ;let s;n=function(){const t=Object.create(s);return t._library={name:"TaskQ",version:"1.0.0"},t._dQ={},t},n.NAME="TaskQ",n.VERSION="1.0.0",n._setTestMode=function(){return[]},n.noConflict=function(){return t.TaskQ=i,this},s={whoami(){return this._library},pushQ(t,n){return e.pushQ(this._dQ,t,n),this},popQ(t,n){return e.popQ(this._dQ,t,n),this}}}(),function(){function t(t,n){"string"!=typeof n||Object.prototype.hasOwnProperty.call(t,n)||(t[n]={firing:!1,listeners:[]})}e={pushQ(n,e,i){t(n,e),"string"==typeof e&&"function"==typeof i&&(n[e].listeners.push(i),n[e].firing||function(t,n,e){const i=t[n].listeners;t[n].firing=!0,function s(){i.length>0?i.shift().apply(e||{},[s].concat(Array.prototype.slice.call(arguments,0))):t[n].firing=!1}()}(n,e))},popQ(n,e,i){t(n,e),"string"==typeof e&&"function"==typeof i&&(n[e].listeners.push(i),n[e].firing||function(t,n,e){const i=t[n].listeners;t[n].firing=!0,function s(){if(i.length>0){for(;i.length>1;)i.shift();i.shift().apply(e||{},[s].concat(Array.prototype.slice.call(arguments,0)))}else t[n].firing=!1}()}(n,e))}}}(),n});export default $__ES6GLOB.TaskQ;
(function(e){if("function"==typeof bootstrap)bootstrap("domeventlogger",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeDomEventLogger=e}else"undefined"!=typeof window?window.domEventLogger=e():global.domEventLogger=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
module.exports = function (element) {
    Object.getOwnPropertyNames(element).forEach(function (item) {
        if (item.indexOf('on') === 0) {
            var existing = element[item];
            element[item] = function (event) {
                var label = element.tagName;
                if (element.id) label += '#' + element.id;
                if (element.className) label += element.className.split(' ').map(function (cls) {
                    return '.' + cls;
                }).join('');
                console.log(label, 'name: ' + item.slice(2), event);
                if (existing) existing();
            };
        }
    });

    return element;
};

},{}]},{},[1])(1)
});
;
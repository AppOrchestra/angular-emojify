(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('node-emoji')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'node-emoji'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.emojify = global.ng.emojify || {}),global.ng.core,global.nodeEmoji));
}(this, (function (exports,_angular_core,nodeEmoji) { 'use strict';

var EmojifyPipe = /** @class */ (function () {
    function EmojifyPipe() {
    }
    EmojifyPipe.prototype.transform = function (text) {
        return nodeEmoji.emojify(text || '');
    };
    EmojifyPipe.decorators = [
        { type: _angular_core.Pipe, args: [{
                    name: 'emojify'
                },] },
    ];
    /** @nocollapse */
    EmojifyPipe.ctorParameters = function () { return []; };
    return EmojifyPipe;
}());
var EmojifyModule = /** @class */ (function () {
    function EmojifyModule() {
    }
    EmojifyModule.forRoot = function () {
        return {
            ngModule: EmojifyModule
        };
    };
    EmojifyModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [EmojifyPipe],
                    exports: [EmojifyPipe]
                },] },
    ];
    /** @nocollapse */
    EmojifyModule.ctorParameters = function () { return []; };
    return EmojifyModule;
}());

exports.EmojifyPipe = EmojifyPipe;
exports.EmojifyModule = EmojifyModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));

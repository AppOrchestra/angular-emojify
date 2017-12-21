import { NgModule, Pipe } from '@angular/core';
import { emojify } from 'node-emoji';
var EmojifyPipe = /** @class */ (function () {
    function EmojifyPipe() {
    }
    EmojifyPipe.prototype.transform = function (text) {
        return emojify(text || '');
    };
    EmojifyPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'emojify'
                },] },
    ];
    /** @nocollapse */
    EmojifyPipe.ctorParameters = function () { return []; };
    return EmojifyPipe;
}());
export { EmojifyPipe };
var EmojifyModule = /** @class */ (function () {
    function EmojifyModule() {
    }
    EmojifyModule.forRoot = function () {
        return {
            ngModule: EmojifyModule
        };
    };
    EmojifyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EmojifyPipe],
                    exports: [EmojifyPipe]
                },] },
    ];
    /** @nocollapse */
    EmojifyModule.ctorParameters = function () { return []; };
    return EmojifyModule;
}());
export { EmojifyModule };
//# sourceMappingURL=index.js.map
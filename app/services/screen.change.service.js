"use strict";
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var ScreenChange = (function () {
    function ScreenChange() {
        this.screenChange$ = new Rx_1.Subject();
    }
    ScreenChange.prototype.makeScreenChange = function (val) {
        this.screenChange$.next(val);
    };
    ScreenChange = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ScreenChange);
    return ScreenChange;
}());
exports.ScreenChange = ScreenChange;
//# sourceMappingURL=screen.change.service.js.map
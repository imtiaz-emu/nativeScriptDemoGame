"use strict";
var core_1 = require("@angular/core");
var screen_change_service_1 = require("./services/screen.change.service");
var AppComponent = (function () {
    function AppComponent(screenChange) {
        this.screenChange = screenChange;
        this.table1 = [];
        this.table2 = [];
        this.initScreenLevel = 0;
        this.noOfAlphabets = 0;
        this.table1[0] = ['A', 'B', 'C', 'D', 'E'];
        this.table1[1] = ['F', 'G', 'H', 'I', 'J'];
        this.table1[2] = ['K', 'L', 'M', 'N', 'O'];
        this.table1[3] = ['P', 'Q', 'R', 'S', 'T'];
        this.table1[4] = ['U', 'V', 'W', 'X', 'Y'];
        this.table1[5] = ['Z'];
        this.table2[0] = ['A', 'F', 'K', 'P', 'U', 'Z'];
        this.table2[1] = ['B', 'G', 'L', 'Q', 'V'];
        this.table2[2] = ['C', 'H', 'M', 'R', 'W'];
        this.table2[3] = ['D', 'I', 'N', 'S', 'X'];
        this.table2[4] = ['E', 'J', 'O', 'T', 'Y'];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenChange.screenChange$.subscribe(function (data) {
            _this.initScreenLevel = data;
        });
    };
    AppComponent.prototype.start = function () {
        this.screenChange.makeScreenChange(1);
    };
    AppComponent.prototype.saveNumber = function () {
        this.noOfAlphabets = this.noOfAlphabets;
        this.screenChange.makeScreenChange(2);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [screen_change_service_1.ScreenChange])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
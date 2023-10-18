"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
// app.component.ts
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.contentLoaded = false;
        this.hoverButton = false;
        this.buttonMove = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Simulate content loading after a delay
        setTimeout(function () {
            _this.contentLoaded = true;
        }, 3000); // Adjust the delay as needed
    };
    AppComponent.prototype.onMouseOverButton = function () {
        if (this.hoverButton) {
            this.buttonMove = 10; // Adjust the distance to move
        }
    };
    AppComponent.prototype.onMouseOutButton = function () {
        if (this.hoverButton) {
            this.buttonMove = 0;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

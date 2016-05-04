var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var ItemService_1 = require('../services/ItemService');
var GettingStartedPage = (function () {
    function GettingStartedPage(_itemService) {
        this._itemService = _itemService;
        this.searchQuery = "";
    }
    GettingStartedPage.prototype.ngOnInit = function () {
        var _this = this;
        this._itemService.getItems()
            .subscribe(function (items) { return _this.items = items; }, function (error) { return _this.errorMessage = error; });
    };
    GettingStartedPage.prototype.getItems = function (search) {
        console.log(search);
    };
    GettingStartedPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/getting-started/getting-started.html'
        }), 
        __metadata('design:paramtypes', [ItemService_1.ItemService])
    ], GettingStartedPage);
    return GettingStartedPage;
})();
exports.GettingStartedPage = GettingStartedPage;
//# sourceMappingURL=getting-started.js.map
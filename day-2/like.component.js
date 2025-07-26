"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likeCount, _isSelected) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
        // Initialization logic if needed
    }
    LikeComponent.prototype.onClick = function () {
        if (this._isSelected) {
            this._isSelected = false;
            this._likeCount--;
        }
        else {
            this._isSelected = true;
            this._likeCount++;
        }
    };
    LikeComponent.prototype.getlikesCount = function () {
        return this._likeCount;
    };
    LikeComponent.prototype.isSelected = function () {
        return this._isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;

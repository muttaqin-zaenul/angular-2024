"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var likeComponent = new like_component_1.LikeComponent(10, false);
console.log("Initial Likes: ".concat(likeComponent.getlikesCount(), ", isSelected: ").concat(likeComponent.isSelected()));
likeComponent.onClick();
console.log("Initial Likes: ".concat(likeComponent.getlikesCount(), ", isSelected: ").concat(likeComponent.isSelected()));

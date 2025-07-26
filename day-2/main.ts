import { LikeComponent } from './like.component';


let likeComponent = new LikeComponent(10, false)

console.log(`Initial Likes: ${likeComponent.getlikesCount()}, isSelected: ${likeComponent.isSelected()}`);

likeComponent.onClick();
console.log(`Initial Likes: ${likeComponent.getlikesCount()}, isSelected: ${likeComponent.isSelected()}`);
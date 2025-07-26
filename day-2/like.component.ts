export class LikeComponent {
  constructor(private _likeCount: number, private _isSelected: boolean) {
    // Initialization logic if needed
  }
  
    onClick() {
        if (this._isSelected) {
            this._isSelected = false;
            this._likeCount--;
        } 
        else {
            this._isSelected = true;
            this._likeCount++;
        }
    }

    getlikesCount(): number {
        return this._likeCount;
    }

    isSelected(): boolean {
        return this._isSelected;
    }
}
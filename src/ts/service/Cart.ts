import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumWithoutDiscount(): number {
        return this._items.reduce((acc: number, currentValue: Buyable) => acc + currentValue.price, 0);
    }

    sumWithDiscount(discount: number): number {
        return this._items.reduce((acc: number, currentValue: Buyable) => acc + currentValue.price, 0) * (1 - discount / 100);
    }

    delete(id : number) : void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}
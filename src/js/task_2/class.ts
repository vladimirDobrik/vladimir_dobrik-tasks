class VehicleTs {

    private _speed: Number;

    constructor() {
        this._speed = 0;
    }

    public getSpeed(): Number {
        return this._speed;
    }

    public move(moveSpeed): Number {
        return this._speed += moveSpeed;
    }

    public stop(): Number {
        return this._speed = 0;
    }

    public vehicleHorn(): void {
        alert('beep beep!');
    }
}

class CargoVehicleTs extends Vehicle {

    private _loadCapacity: Number;
    private _countOfGoods: Number;

    constructor(loadCapacity: Number) {
        super();
        this._loadCapacity = loadCapacity;
        this._countOfGoods = 0;
    }

    public loadGoods(goods: Number): void {
        if (goods > this._loadCapacity) {
            throw new Error("Превышена грузоподъемность = " + this._loadCapacity);
        }

        this._countOfGoods = goods;
    }

    public vehicleHorn(): void {
        super.vehicleHorn();
        alert("BEEP BEEP I'M JEEP!");
    }

    public get countOfGoods(): Number {
        return this._countOfGoods;
    }
}
class VehicleTs {

    private _speed: number;

    constructor() {
        this._speed = 0;
    }

    public getSpeed(): number {
        return this._speed;
    }

    public move(moveSpeed: number): number {
        return this._speed += moveSpeed;
    }

    public stop(): number {
        return this._speed = 0;
    }

    public vehicleHorn(): void {
        console.log('beep beep!');
    }
}

class CargoVehicleTs extends VehicleTs {

    private _loadCapacity: number;
    private _countOfGoods: number;

    constructor(loadCapacity: number) {
        super();
        this._loadCapacity = loadCapacity;
        this._countOfGoods = 0;
    }

    public loadGoods(goods: number): void {
        if (goods > this._loadCapacity) {
            throw new Error("Превышена грузоподъемность = " + this._loadCapacity);
        }

        this._countOfGoods = goods;
    }

    public vehicleHorn(): void {
        super.vehicleHorn();
        console.log("BEEP BEEP I'M JEEP!");
    }

    public get countOfGoods(): number {
        return this._countOfGoods;
    }
}
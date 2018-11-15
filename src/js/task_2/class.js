class Vehicle {

    constructor() {
        this._speed = 0;
    }

    getSpeed() {
        return this._speed;
    }

    move(moveSpeed) {
        return this._speed += moveSpeed;
    }

    stop() {
        return this._speed = 0;
    }

    vehicleHorn() {
        alert('beep beep!');
    }
}

class CargoVehicle extends Vehicle {

    constructor(loadCapacity) {
        super();
        this._loadCapacity = loadCapacity;
        this._countOfGoods = 0;
    }

    loadGoods(goods) {
        if (goods > this._loadCapacity) {
            throw new Error("Превышена грузоподъемность = " + this._loadCapacity);
        }

        this._countOfGoods = goods;
    }

    vehicleHorn() {
        super.vehicleHorn();
        alert("BEEP BEEP I'M JEEP!");
    }

    get countOfGoods() {
        return this._countOfGoods;
    }
}

class PassengerVehicle extends Vehicle {
    constructor() {
        super();
        this._seatCapacity = seatCapacity;
        this._countOfPassenger = 0;
    }

    get countOfPassenger() {
        return this._countOfPassenger;
    }

    loadPassenger() {
        if (passenger > this._seatCapacity) {
            throw new Error("Превышено кол-во мест для пассажиров = " + this._seatCapacity);
        }

        this._countOfPassenger = passenger;
    }

    vehicleHorn() {
        super.vehicleHorn();
    }
}
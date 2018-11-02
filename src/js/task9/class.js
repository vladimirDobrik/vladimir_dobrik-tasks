class Vehicle {
    //Конструктор
    constructor(){
        this._speed = 0;
    }
    //Методы
    getSpeed() {
        return this._speed;
    }

    move(moveSpeed) {
        return this._speed = moveSpeed;
    }

    stop() {
        return this._speed = 0;
    }
}

//Наследуем методы Vehicle
class CargoVehicle extends Vehicle {
    //Конструктор
    constructor(loadCapacity) {
        //Конструктор родителя
        super();
        this._loadCapacity = loadCapacity;
        this._countOfGoods = 0;
    }

    //Методы
    loadGoods(goods) {
        if (goods > this._loadCapacity) {
            throw new Error("Превышена грузоподъемность = " + this._loadCapacity);
        }
    
        this._countOfGoods = goods;
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
}
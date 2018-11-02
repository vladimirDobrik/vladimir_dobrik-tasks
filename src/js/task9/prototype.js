//Конструктор для Vehicle
function Vehicle() {
    this._speed = 0;
}

//Записываем методы в прототип для Vehicle
Vehicle.prototype.getSpeed = function () {
    return this._speed;
}

Vehicle.prototype.move = function (moveSpeed) {
    return this._speed = moveSpeed;
}

Vehicle.prototype.stop = function () {
    return this._speed = 0;
}

//Конструктор для CargoVehicle + эплаим конструктор Vehicle с контекстом this
function CargoVehicle(loadCapacity) {
    Vehicle.apply(this, arguments);
    this._loadCapacity = loadCapacity;
    this._countOfGoods = 0;
}

//Устанавливаем Vehicle как прототип CargoVehicle
CargoVehicle.prototype = Object.create(Vehicle.prototype);
//Сохраняем проперть constructor
CargoVehicle.prototype.constructor = CargoVehicle;

//Записываем метод в прототип для CargoVehicle
CargoVehicle.prototype.loadGoods = function (goods) {
    if (goods > this._loadCapacity) {
        throw new Error("Превышена грузоподъемность = " + this._loadCapacity);
    }

    this._countOfGoods = goods;
}

CargoVehicle.prototype.getCountOfGoods = function () {
    return this._countOfGoods;
}

function PassengerVehicle(seatCapacity) {
    Vehicle.apply(this, arguments);
    this._seatCapacity = seatCapacity;
    this._countOfPassenger = 0;
}

PassengerVehicle.prototype = Object.create(Vehicle.prototype);
PassengerVehicle.prototype.constructor = PassengerVehicle;

PassengerVehicle.prototype.loadPassenger = function (passenger) {
    if (passenger > this._seatCapacity) {
        throw new Error("Превышено кол-во мест для пассажиров = " + this._seatCapacity);
    }

    this._countOfPassenger = passenger;
}

PassengerVehicle.prototype.getCountOfPassenger = function () {
    return this._countOfPassenger;
}
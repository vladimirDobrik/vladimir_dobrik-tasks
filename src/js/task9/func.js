function Vehicle() {

    var speed = 0;

    this.getSpeed = function () {
        return speed;
    }

    this.move = function (moveSpeed) {
        return speed = moveSpeed;
    }

    this.stop = function () {
        return speed = 0;
    }
}

function PassengerVehicle(seatCapacity) {
    Vehicle.call(this);
    this.seatCapacity = seatCapacity;
    var countOfPassenger = 0;

    this.getCountOfPassenger = function () {
        return countOfPassenger;
    }

    this.loadPassenger = function (passenger) {
        if (passenger > this.seatCapacity) {
            throw new Error("Превышено кол-во мест для пассажиров = " + this.seatCapacity);
        }

        countOfPassenger = passenger;
    }
}

function CargoVehicle(loadCapacity) {

    Vehicle.call(this);
    var countOfGoods = 0;
    this.loadCapacity = loadCapacity;

    this.getCountOfGoods = function () {
        return countOfGoods;
    }

    this.loadGoods = function (goods) {
        if (goods > this.loadCapacity) {
            throw new Error("Превышена грузоподъемность = " + this.loadCapacity);
        }

        countOfGoods = goods;
    }
}
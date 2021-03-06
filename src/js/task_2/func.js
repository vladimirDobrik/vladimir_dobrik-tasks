function Vehicle() {

    var speed = 0;

    this.getSpeed = function () {
        return speed;
    }

    this.move = function (moveSpeed) {
        return speed += moveSpeed;
    }

    this.stop = function () {
        return speed = 0;
    }

    this.vehicleHorn = function () {
        alert('beep beep!');
    }
}

function PassengerVehicle(seatCapacity) {

    Vehicle.call(this);

    var countOfPassenger = 0;

    this.seatCapacity = seatCapacity;

    this.getCountOfPassenger = function () {
        return countOfPassenger;
    }

    this.loadPassenger = function (passenger) {
        if (passenger > this.seatCapacity) {
            throw new Error("Превышено кол-во мест для пассажиров = " + this.seatCapacity);
        }

        countOfPassenger = passenger;
    }

    var parentHorn = this.vehicleHorn;

    this.vehicleHorn = function () {
        parentHorn.call(this);
        alert("BEEP BEEP I'M JEEP");
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

    var parentHorn = this.vehicleHorn;

    this.vehicleHorn = function () {
        parentHorn.call(this);
    }
}
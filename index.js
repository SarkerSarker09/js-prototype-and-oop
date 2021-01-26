// ======= old style============
const objectOne = {
    run() {
        console.log('car1 run')
    },
    ride() {
        console.log('car1 ride')
    }
};

function CarOne(name, model) {
    let carOne = Object.create(objectOne);
    carOne.name = name;
    carOne.model = model;
    return carOne;
}

const c1 = CarOne('Toyota', 2019);
console.log(c1, c1.ride())

console.log("===========================");


// === more efficient way ================
function CarTwo(name, model) {
    this.name = name;
    this.model = model;
}

CarTwo.prototype = {
    run() {
        console.log('car2 run!');
    },
    ride() {
        console.log('car2 ride')
    }
};

const cc = new CarTwo('Toyota', 2019);
console.log(cc.run());



//======= more efficient
function One(name, model) {
    this.name = name;
    this.model = model;
}

function Two(name, model, type) {
    One.call(this);
    this.name = name;
    this.model = model;
    this.type = type;
}

One.prototype = {
    run() {
        console.log('one run function is runing');
    }
}

//==== inheritance
Two.prototype = Object.create(One.prototype);
Two.prototype.constructor = Two;

console.log('js prototype inheritance');
const two = new Two('Toyota', 2019, 'AC');
console.log(two);
console.log('------', two.run());










//===========more efficient way===============
class CarThree {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
}

class CarFour extends CarThree {
    constructor(name, model, type, color) {
        super(name, model);
        this.name = name;
        this.model = model;
        this.type = type;
        this.color = color;
    }

    run() {
        console.log('carfoud run')
    }
}


const c3 = new CarFour('Toyota', 2018, 'AC', 'black');
console.log(c3);
// Родительский класс
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.connected = false;
    }

    turnOn() {
        this.connected = true;
        console.log(`Прибор "${this.name}" подключен к сети`);
    }

    turnOff() {
        this.connected = false;
        console.log(`${this.name} отключен`);
    }
}

// класс для лампы и наследование от "ElectricalAppliance"
class Lamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
        super(name, power, brightness);
        this.brightness = brightness || 'easy';
    }

    brightnessAdjustment(brightness) {
        this.brightness = brightness;
        console.log(`Яркость лампы установлена на ${this.brightness} уровень`);
    }
}

// класс для компьютера и наследование от "ElectricalAppliance"
class Computer extends ElectricalAppliance {
    constructor(name, power, processor) {
        super(name, power, processor);
        this.processor = processor || 'intel core i5';
    }

    newProcessor(processor) {
        this.processor = processor;
        console.log(`На компьютере установлен новый процессор ${this.processor}`);
    }
}


// Создание экземпляров
const lamp = new Lamp('Philips', 60);
const computer = new Computer('hp prodesk 400 g9', 400);

// включаем приборы
lamp.turnOn();
computer.turnOn();

// Общая потребляемая мощность приборов
const sumPower = lamp.power + computer.power;
console.log(`Суммарная потребляемая мощность приборов - ${sumPower} Вт`);

// Собственные методы для каждого из приборов
lamp.brightnessAdjustment('max');
computer.newProcessor('intel core i9');
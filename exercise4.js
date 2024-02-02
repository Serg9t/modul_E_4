// Родительская функция
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.connected = false;
}

// Метод для родительской функции (включить)
ElectricalAppliance.prototype.turnOn = function() {
    this.connected = true;
    console.log(`Прибор "${this.name}" подключен к сети`);
}

// Метод для родительской функции (выключить)
ElectricalAppliance.prototype.turnOff = function() {
    this.connected = false;
    console.log(`${this.name} отключен`);
}

// Лампа
function Lamp(name, power, brightness='easy') {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}

// Делегирующуя связь
Lamp.prototype = new ElectricalAppliance();


// Метод для "Lamp"
Lamp.prototype.brightnessAdjustment = function(brightness) {
    this.brightness = brightness;
    console.log(`Яркость лампы установлена на ${this.brightness} уровень`)
}

// Компьютер
function Computer(name, power, processor='intel core i5') {
    ElectricalAppliance.call(this, name, power);
    this.processor = processor;
}

// Делегирующуя связь
Computer.prototype = new ElectricalAppliance();

// Метод для "Computer"
Computer.prototype.newProcessor = function(processor) {
    this.processor = processor;
    console.log(`На компьютере установлен новый процессор ${this.processor}`);
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
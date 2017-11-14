interface Laptop {
    receiveUsbInput;
    display;
}

class Dell implements Laptop {
    receiveUsbInput() {

    }

    display() {

    }
}

class Macbook implements Laptop {
    receiveUsbInput() {

    }

    display() {

    }
}

class Person {
    displayLaptop(laptop : Laptop) {
        laptop.display();
    }
}
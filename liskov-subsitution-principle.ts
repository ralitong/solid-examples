class Bird {
    setLocation() {

    }

    setAltitude() {

    }

    draw() {

    }
}

class Eagle extends Bird {

}

class Kookabura extends Bird {

}

class Penguin extends Bird {
    // penguins don't fly
}

function moveBirdToLocation(bird : Bird) {
    if(bird instanceof Penguin) {
        // move bird to location
    }
    else {
        // fly bird to location
        // set alituted
    }
}

class FlyingBird extends Bird {
    setAltitude() {

    }
}
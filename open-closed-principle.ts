class Chef {

    cook(food: Food) {
        if (food instanceof Burger)
            this.createBurger(food);
        else if (food instanceof Noodles)
            this.createNoodles(food);
        else if (food instanceof Spaghetti)
            this.createSpaghetti(food);
    }

    createBurger(food: Food) {

    }

    createNoodles(food: Food) {

    }

    createSpaghetti(food: Food) {

    }
}


class Food {

}

class Burger extends Food {

}

class Noodles extends Food {

}

class Spaghetti extends Food {

}


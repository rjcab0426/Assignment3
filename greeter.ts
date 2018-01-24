class Greeter {
    greet:string;

    constructor(greet){
        this.greet = greet
    }

    showGreet() {
        console.log(this.greet)
    }
}

let greet = new Greeter ('Hello')
greet.showGreet();


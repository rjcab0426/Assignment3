var Greeter = /** @class */ (function () {
    function Greeter(greet) {
        this.greet = greet;
    }
    Greeter.prototype.showGreet = function () {
        console.log(this.greet);
    };
    return Greeter;
}());
var greet = new Greeter('Hello');
greet.showGreet();

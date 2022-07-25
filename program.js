/*
Replace the function in the original code with an arrow function,
since the this value inside of an arrow function is the same as this value outside of it.
*/
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp));
    }
};
foot.kick();

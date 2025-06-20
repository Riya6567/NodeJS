const person = {
    name: "John Doe",
    age: 30,
    profession: "Doctor",
    greet: function () {
        return `Hello, my name is ${this.name}, and I am a ${this.profession}.`;
    }
}
module.exports = person

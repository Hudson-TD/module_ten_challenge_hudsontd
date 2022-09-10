// Importing Employee constructor 
const Employee = require("./Employee");


class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor 
        super (name, id, email);

        this.officeNumber = officeNumber; 
    }

     // Set role to 'Manager'
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;
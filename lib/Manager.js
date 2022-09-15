// Importing Employee constructor 
const Employee = require("./Employee");

// Extending Employee class to include office number data
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor 
        super (name, id, email);

        this.officeNumber = officeNumber; 
    }
    // Setting role to 'Manager' for proper handling & team card creation
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;
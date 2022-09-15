// Importing Employee constructor 
const Employee = require("./Employee");

// Extending Employee class to include school name data
class Intern extends Employee {
    constructor (name, id, email, school) {
        // calling employee constructor 
        super (name, id, email);

        this.school = school; 
    }

    getSchool () {
        return this.school;
    }
    // Setting role to 'Intern' for proper handling & team card creation
    getRole () {
        return "Intern";
    }
}

module.exports = Intern;
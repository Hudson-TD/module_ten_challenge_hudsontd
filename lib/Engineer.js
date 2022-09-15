// Importing Employee constructor 
const Employee = require("./Employee");

// Extending Employee class to include github profile name data
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    getGithub () {
        return this.github;
    }
    // Setting role to 'Engineer' for proper handling & team card creation
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 
const Employee = require("./Employee");
//--------------------Extending from Employee to get "Engineer":
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //--------------------To set the GitHub Username:
    getGithub(){
        return this.github;
    }
    //--------------------To set the Role:
    getRole() {
        return "Engineer";
    }
};
//--------------------Eports the Engineer Questions:
module.exports = Engineer;
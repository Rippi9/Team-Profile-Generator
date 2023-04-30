const Employee = require("./Employee");
//--------------------Extending from Employee to get "Intern":
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //--------------------To set the GitHub Username:
    getSchool(){
        return this.school;
    }
    //--------------------To set the Role:
    getRole() {
        return "Intern";
    }
};
//--------------------Eports the Intern Questions:
module.exports = Intern;

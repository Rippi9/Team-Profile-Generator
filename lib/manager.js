const Employee = require("./Employee");
//-Extending from Employee to get "Engineer":
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //-To set the Office Number:
    getOfficeNumber(){
        return this.officeNumber;
    }
    //-To set the Role:
    getRole() {
        return "Manager";
    }
};
//-Eports the Manager Questions:
module.exports = Manager;
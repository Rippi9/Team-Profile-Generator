class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //--------------------To get the Name:
    getName() {
        return this.name;
    }
    //--------------------To get ID:
    getId() {
        return this.id;
    }
    //--------------------To get Email:
    getEmail() {
        return this.email;
    }
    //--------------------To set the Role:
    getRole() {
        return "Employee";
    }
};
//--------------------Eports the Emplyee Questions (Base Questions):
module.exports = Employee;
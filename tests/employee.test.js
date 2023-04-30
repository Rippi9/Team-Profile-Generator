const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Correctly displays a new Employee', () => {
        const employee = new Employee ();
        expect(typeof(employee)).toBe("object");
    });
});

describe("getName", () => {
    it("Correctly displays Employees name", () => {
        const name = "Ben";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });
});

describe('getId', () => {
    it('Correctly displays Employees ID', () => {
        const id = 1;
        const employee = new Employee("Ben", id);
        expect(employee.getId()).toBe(id);
    });
});

describe('getEmail', () => {
    it('Correctly displays Employees email', () => {
        const email = "ben@email.com";
        const employee = new Employee("Ben", 1, email);
        expect(employee.getEmail()).toBe(email);
    });
});

describe('getRole', () => {
    it('Correctly displays Employee as the Role', () => {
        const role = "Employee";
        const employee = new Employee("Ben", 1, "ben@email.com");
        expect(employee.getRole()).toBe(role);
    });
});
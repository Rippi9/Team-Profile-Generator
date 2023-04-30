const Manager = require('../lib/Manager')

//--------------------Initializing "Manager":
describe('Manager', () => {
    describe("Initialization", () => {
    it('Correctly displays a new Manager', () => {
        const manager = new Manager ();
        expect(typeof(manager)).toBe("object");
    });
});
//--------------------officeNumber for Manager:
describe("getOfficeNumber", () => {
    it("Correctly displays Managers Office Number", () => {
        const officeNumber = 123;
        const manager = new Manager("Ben", 1, "ben@email.com", officeNumber);
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
});
//--------------------getRole()—overridden to return 'Manager':
describe("getRole", () => {
    it("Correctly displays Managers Role", () => {
        const role = "Manager";
        const manager = new Manager("Ben", 1, "ben@email.com", 123);
        expect(manager.getRole()).toBe(role);
    });
});
});
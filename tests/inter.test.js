const Intern = require('../lib/Intern');
//--------------------Initializing "Intern":
describe('Intern', () => {
    it('Correctly displays a new Intern', () => {
        const intern = new Intern ();
        expect(typeof(intern)).toBe("object");
    });
});
//--------------------test for getting school for the intern:
describe("getSchool", () => {
    it("Correctly displays Interns School", () => {
        const school = "UniSA";
        const intern = new Intern("Ben", 1, "ben@email.com", school);
        expect(intern.getSchool()).toBe(school);
    });
});
//--------------------getRole()—overridden to return 'Intern':
describe("getRole", () => {
    it("Correctly displays Interns Role", () => {
        const role = "Intern";
        const intern = new Intern("Ben", 1, "ben@email.com", "UniSA");
        expect(intern.getRole()).toBe(role);
    });
});
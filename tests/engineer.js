const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Correctly displays a new Engineer', () => {
        const engineer = new Engineer ();
        expect(typeof(engineer)).toBe("object");
    });
});

describe("getGithub", () => {
    it("Correctly displays Engineers GitHub Username", () => {
        const gitHub = "github.com/mschumacher";
        const engineer = new Engineer("Ben", 1, "ben@email.com", gitHub);
        expect(engineer.getGithub()).toBe(gitHub);
    });
});

describe("getRole", () => {
    it("Correctly displays Engineers Role", () => {
        const role = "Engineer";
        const engineer = new Engineer("Ben", 1, "ben@email.com", "github.com/mschumacher");
        expect(engineer.getRole()).toBe(role);
    });
});
const { Manager, Engineer, Intern } = require('../lib/manager');
const Employee = require('../lib/employee');


describe('Employee', () => {
  test('should create an Employee object with a name, id, and email details', () => {
    const employee = new Employee('John Doe', '1', 'johndoe@example.com');
    expect(employee.name).toContain('John Doe');
    expect(employee.id).toContain('1');
    expect(employee.email).toContain('johndoe@example.com');
  });

});

describe('Manager', () => {
    describe('generateCard', () => {
      it('should generate HTML card with manager details', () => {
        
        const manager = new Manager('John Doe', '123', 'john.doe@example.com', '101', 'Engineering Team');
  
        const cardHtml = manager.generateCard();
  
        expect(cardHtml).toContain('Manager');
        expect(cardHtml).toContain('Name: John Doe');
        expect(cardHtml).toContain('Manager I.D: 123');
        expect(cardHtml).toContain('Office Number: 101');
        expect(cardHtml).toContain('mailto:john.doe@example.com');
      });
    });
  });


describe('Engineer', ()=> {
  describe('generateCard', () => {
    it('should generate HTML card with Engineer details', () => {
      
      const engineer = new Engineer('Max Whistle', '123', 'Max.Whistle@example.com', 'github')
      
      const cardHtml = engineer.generateCard();

      expect(cardHtml).toContain('Engineer');
      expect(cardHtml).toContain('Name: Max Whistle');
      expect(cardHtml).toContain('i.d: 123');
      expect(cardHtml).toContain('mailto:Max.Whistle@example.com');
      expect(cardHtml).toContain('github');
    });
  });
});


describe('Intern', () => {
  describe('generateCard', () => {
    it('should generate HTML card with Intern details', () => {
      
      const intern = new Intern('Trevor joel', '123', 'Trevor.joel@example.com', 'school');
      
      const cardHtml = intern.generateCard();
     
      expect(cardHtml).toContain('Intern');
      expect(cardHtml).toContain('Name: Trevor joel');
      expect(cardHtml).toContain('i.d: 123');
      expect(cardHtml).toContain('mailto:Trevor.joel@example.com');
      expect(cardHtml).toContain('school');
    });
  });
});


const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

const managers = [];
const engineers = [];
const interns = [];
const employee =[];

const managerQuestions = [
{
    type: 'input',
    message: 'What is the Team Mangers Name?',
    name: 'name',
    validate: (nameInput) => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please Enter your Name!");
            return false;
        }
    }
  },
  {
    type: 'input',
    message: 'What is the Team Mangers ID?',
    name: 'id',
    validate: (idInput) => {
        if (idInput) {
            return true;
        } else {
            console.log("Please Enter a Valid ID!");
            return false;
        }
    }
  },
  {
      type: 'input',
      message: 'What is the Team Mangers Email?',
      name: 'email',
      validate: (emailInput) => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please Enter a Valid Email Address!");
            return false;
        }
    }
  },
  {
    type: 'input',
    message: 'What is the Team Mangers office number?',
    name: 'officeNumber',
    validate: (officeNumberInput) => {
        if (officeNumberInput) {
            return true;
        } else {
            console.log("Please Enter the Valid Office Number!");
            return false;
        }
    }
  },
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the Teams Engineers Name?',
        name: 'name',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter the Engineers Name!");
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is the Engineers ID?',
        name: 'id',
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please Enter a Valid ID!");
                return false;
            }
        }
      },
      {
          type: 'input',
          message: 'What is the Engineers Email?',
          name: 'email',
          validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please Enter a Valid Email Address!");
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is the Engineers GitHub UserName?',
        name: 'github',
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please Enter a Valid GutHub UserName!");
                return false;
            }
        }
      },
    ];

const internQuestions = [
    {
        type: 'input',
        message: 'What is the Teams Intern Name?',
        name: 'name',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter the Interns Name!");
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is the Interns ID?',
        name: 'id',
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please Enter a Valid ID!");
                return false;
            }
        }
      },
      {
          type: 'input',
          message: 'What is the Interns Email?',
          name: 'email',
          validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please Enter a Valid Email Address!");
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is the Interns School?',
        name: 'school',
        validate: (schoolInput) => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please Enter a School!");
                return false;
            }
        }
      },
    ];

function promptData() {
    inquirer.prompt(managerQuestions)
        .then((managerAnswers) => {
            
            const manager = new Manager(managerAnswers.name,managerAnswers.id,managerAnswers.email,managerAnswers.officeNumber);
            
            employee.push(manager);
            
            promptTeamMembers();
        })
        .catch((error) => {
            console.error(error);
        });
    }

function promptTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMemberType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members thank you']
        }
    ])
    .then((answer) => {
        switch (answer.teamMemberType) {
            case "Engineer":
                inquirer.prompt(engineerQuestions)
                    .then((engineerAnswers) => {
                        
                        const engineer = new Engineer(engineerAnswers.name,engineerAnswers.id,engineerAnswers.email,engineerAnswers.github);
                        
                        employee.push(engineer);
                        
                        promptTeamMembers();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                break;
            case "Intern":
                inquirer.prompt(internQuestions)
                    .then((internAnswers) => {
                        
                        const intern = new Intern(internAnswers.name,internAnswers.id,internAnswers.email,internAnswers.school);
                        
                        employee.push(intern);
                        
                        promptTeamMembers();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                break;
            case "I do not want to add any more team members thank you":
                
                fs.writeFile('./dist/index.html',  template.generateHTML(employee), err => {
                if (err) throw err;
                console.log("Team Profile successfully generated! Check out the HTML file in /dist folder!");
                })
            }
        })
    };

function init() {
    console.log("Welcome to the Team Generator!");
    console.log("Use `npm run reset` to reset the dist/folder");
    console.log("Please build your team! 👥");
    promptData();
};
init();
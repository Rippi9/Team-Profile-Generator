const inquirer = require("inquirer");
const {Manager, Engineer, Intern} = require("./lib/manager");
const fs = require('fs');


const team = [];
// Generate Manager cards
function generateManager () {
    inquirer
    .prompt ([
     
        // Manager Prompts
        {
            type: 'input',
            message: 'Enter Managers name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter Managers employee I.D:',
            name: 'id', 
        },
        {
            type: 'input',
            message: 'Enter Managers Email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter office number:',
            name: 'managerOfficeNum',
        },
        
       
    ])
       .then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.managerOfficeNum
        )
        team.push(manager);
        addMember();
       })
}
// Add members (Engineer, Intern or end team building)
function addMember() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select Team Member:',
            name: 'selectedTeam',
            choices: ['Engineer', 'Intern', 'Finished selecting Team'],
        },
    ])
        .then((answers) => {
            if (answers.selectedTeam === 'Engineer') {
                generateEngineer();
            } else if (answers.selectedTeam === 'Intern') {
                generateIntern();
            } else {

                console.log(team);
                // Maps through team object and creates seperate arrays for each selection and then creates a new variable consisting of seperate arrays
                const htmlArray = team.map(teamMember => {
                    return teamMember.generateCard();
                })
                const cards = htmlArray.join('');
                const endHtml = `  
                
${cards}
                
    </div>
  </div>
</div>        
        <script> src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"</script>
</body>
</html>`;


                console.log(htmlArray);
                writeToFile(endHtml);




            }
        })
}


    


generateManager();
// Generates Engineer cards
function generateEngineer() {
    inquirer.prompt([
        // Engineer Prompts
        {
            type: 'input',
            message: 'Enter Engineers name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter Engineers employee I.D:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter Engineers Email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter GitHub Username:',
            name: 'github',
        },
    ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github,
            )
            team.push(engineer);
            addMember();
        })
}
// Generates Intern Cards
function generateIntern () {
    inquirer.prompt ([
          {
            type: 'input',
            message: 'Enter Interns name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter Interns employee I.D:',
            name: 'id', 
        },
        {
            type: 'input',
            message: 'Enter Interns Email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter Interns School:',
            name: 'school',
        },
    ]) .then((answers) => {
        const intern = new Intern (
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        )
     
        team.push(intern);
        addMember();
    })
   
}
 //write html file
 function writeToFile(cards) {
    
    
    fs.writeFile("team.html", cards, err => {
        if(err) {
            return console.log("Error Writing File");
        }
        console.log("File Created!");
    })
    
}
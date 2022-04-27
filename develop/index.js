const inquirer = require("inquirer");
const fs = require('fs');
const generateTeam = require("./utils/generateTeam");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamTotal = [];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
  }

  const mQuestions = [
    
    {
      type: "input",
      message: "What is your team managers name?",
      name: "mName",
    },
    {
      type: "input",
      message:
        " What is your team managers employee ID? ",
      name: "mId",
    },
    {
      type: "input",
      message:
        "What is your managers email address?",
      name: "mEmail",
    },
    {
        type: "input",
        message: "What is your managers office number?",
        name: "mOffice",
      },
    {
      type: "list",
      message: "Do you have any additional team members?",
      name: "mAdd",
      choices: ["Engineer", "Intern", "Finish Building Team"],
    },
];

const iQuestions = [
    
    {
      type: "input",
      message: "What is your Interns name?",
      name: "iName",
    },
    {
      type: "input",
      message:
        " What is your interns employee ID? ",
      name: "iId",
    },
    {
      type: "input",
      message:
        "What is your interns email address?",
      name: "iEmail",
    },
    {
        type: "input",
        message: "What school did your intern go to?",
        name: "iSchool",
      },
    {
      type: "list",
      message: "Do you have any additional team members?",
      name: "iAdd",
      choices: ["Engineer", "Intern", "Finish Building Team"],
    },
];

const eQuestions = [
    
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "eName",
    },
    {
      type: "input",
      message:
        " What is your engineers employee ID? ",
      name: "eId",
    },
    {
      type: "input",
      message:
        "What is your engineers email address?",
      name: "eEmail",
    },
    {
        type: "input",
        message: "What is your Engineers github?",
        name: "eGithub",
      },
    {
      type: "list",
      message: "Do you have any additional team members?",
      name: "eAdd",
      choices: ["Engineer", "Intern", "Finish Building Team"],
    },
];
function managerQuestion(){
    inquirer.prompt(mQuestions).then((response) => {
const newManage = new Manager(response.mName,response.mId,response.mEmail,response.mOffice)
teamTotal.push(newManage);
switch (response.mAdd){
    case "Engineer":
        engineerQuestion();
        break
    case "Intern":
        internQuestion();
        break
    default:
       generateHtml();
}
    })
}

function internQuestion(){
    inquirer.prompt(iQuestions).then((response) => {
const newIntern = new Intern(response.iName,response.iId,response.iEmail,response.iSchool)
teamTotal.push(newIntern);
switch (response.iAdd){
    case "Engineer":
        engineerQuestion();
        break
    case "Intern":
        internQuestion();
        break
    default:
        console.log(teamTotal);
       generateHtml();
}
    })
}

function engineerQuestion(){
    inquirer.prompt(eQuestions).then((response) => {
const newEngineer = new Engineer(response.eName,response.eId,response.eEmail,response.eGithub)
teamTotal.push(newEngineer);
switch (response.eAdd){
    case "Engineer":
    engineerQuestion();
        break
    case "Intern":
        internQuestion();
        break
    default:
        console.log(teamTotal);
       generateHtml();
}
    })
}
//filter look into
  function generateHtml() {
      const markdownText = generateTeam(teamTotal);
      fs.writeFileSync("dist/index.html", markdownText);
  }

  managerQuestion ();
  


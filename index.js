const inquirer = require("inquirer")
const fs = require("fs")
const markdown = require("./generateMarkdown.js")

  // array of questions for user
const questions = [
  /* Pass your questions in here */
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
  },  {
    type: 'input',
    name: 'link',
    message: 'What is the link to the project live page?',
  },  {
    type: 'input',
    name: 'intro',
    message: 'Write a short introduction on what your project does.',
  },   { 
    type: 'checkbox',
    name: 'content',
    message: 'What content do you want in your readme',
    choices: ['installation process?', 'description?', 'usage?', 'licenses?', 'contributors?'],
  },   {
    type: 'input',
    name: 'installation',
    message: 'Describe the installation process of the project',
    when: (answers)=> {if(answers.content.includes('installation process?')) {
      return answers.content
    }
  }},   {
    type: 'input',
    name: 'description',
    message: 'Describe the project',
    when: (answers)=> {if(answers.content.includes('description?')) {
      return answers.content
    }
  }},   {
    type: 'input',
    name: 'usage',
    message: 'Describe the usage of the project',
    when: (answers)=> {if(answers.content.includes('usage?')) {
      return answers.content
    }
  }
  },   {
    type: 'input',
    name: 'licenses',
    message: 'write which licenses your project has',
    when: (answers)=> {if(answers.content.includes('licenses?')) {
      return answers.content
    }
  }
  },   {
    type: 'input',
    name: 'contributors',
    message: 'Who where your contributors?',
    when: (answers)=> {if(answers.content.includes('contributors?')) {
      return answers.content
    }
  }
  },  {
    type: 'input',
    name: 'name',
    message: 'what is your name/username?',
  },  {
    type: 'input',
    name: 'email',
    message: 'What is the users email address?',
  },
  ];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
    
      console.log("Success! Your README.md file has been generated")
  });
// function to initialize program
async function init() {
  await {
    
  }

}

// function call to initialize program
init();


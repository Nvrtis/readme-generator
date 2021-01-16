const inquirer = require("inquirer")
const fs = require("fs")
const template = require("./generateMarkdown.js")

// array of questions for user
inquirer.prompt([
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
    message: 'Write a short introduction on what your project does ',
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
    /* Pass your questions in here */
  ])
  .then(answers => {
    console.log(answers.content);
    // Use user feedback for... whatever!!
    // function to write README file
    fs.writeFile('README.txt', generateMarkdown(answers),(err) => {
      if (err) throw err;
      console.log('The file has been saved!')
    }) 
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });


// function to initialize program
function init() {

}

// function call to initialize program
init();

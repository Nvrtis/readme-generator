const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown.js");

  // array of questions for user
const questions = [
  /* Pass your questions in here */
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
  },  {
    type: 'list',
    name: 'mainImg',
    message: 'Do you want an image of your main page?',
    choices: ["yes", "no"],
    default: "no"
  },  {
    type: 'input',
    name: 'mainImgPath',
    message: 'The pathway is "./assets/img/...." please fill in the rest (needs also filetype eg. jpg)',
    when: (answers)=> {if(answers.mainImg.includes('yes')) {
      return answers.mainImg
    }}
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
    choices: ['installation process?', 'description?', 'usage?', 'licenses?', 'contributors?', 'test?', 'questions?'],
    when: (answers)=> {if(!answers.content) {
      return "seems like you dont want a readme, please try again later"
    }
  }
    
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
    type: 'list',
    name: 'licenses',
    message: 'write which licenses your project has',
    choices: ["None", "MIT", "Apache-2.0", "GPL-3.0", "BSD-2-Clause", "BSD-3-Clause", "WTFPL", "Unlicense", "Other" ],
    default: "None",
    when: (answers)=> {if(answers.content.includes('licenses?')) {
      return answers.content
    }
  }
  },   {
    type: 'input',
    name: 'otherLicenses',
    message: 'Please input what license you want',
    when: (answers)=> {if(answers.licenses.includes('Other')) {
      return answers.licenses
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
  },   {
    type: 'input',
    name: 'test',
    message: 'What test did you run, and how?',
    when: (answers)=> {if(answers.content.includes('test?')) {
      return answers.content
    }
  }
  },  {
    type: 'input',
    name: 'name',
    message: 'what is your Github username',
    when: (answers)=> {if(answers.content.includes('questions?')) {
      return answers.content
    }
  }
  },  {
    type: 'input',
    name: 'email',
    message: 'What is the users email address?',
    when: (answers)=> {if(answers.content.includes('questions?')) {
      return answers.content
    }
  }
  },   {
    type: 'input',
    name: 'questions',
    message: 'anything else you want to add in questions?',
    when: (answers)=> {if(answers.content.includes('questions?')) {
      return answers.content
    }
  }
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
}
// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then ((answers)=>fs.writeFile(`${answers.title}.md`, generateMarkdown(answers),(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }))
  .catch((err) => console.error(err));

}

// function call to initialize program
init()
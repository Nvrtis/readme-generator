// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}  
  ${answers.licenses.includes('MIT') ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : ""}
  ${answers.licenses.includes('Apache-2.0') ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : ""}
  ${answers.licenses.includes('GPL-3.0') ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" : ""}
  ${answers.licenses.includes('BSD-2-Clause') ? "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)" : ""}
  ${answers.licenses.includes('BSD-3-Clause') ? "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" : ""}
  ${answers.licenses.includes('WTFPL') ? "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)" : ""}
  ${answers.licenses.includes('Unlicense') ? "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)" : ""}


  ${answers.mainImg.includes('yes') ? `![Main page](./assets/img/${answers.mainImgPath})` : ""}


  [Link to webpage](${answers.link})
  
  ${answers.intro}  
    
  ## Table of Content
  ${answers.content.includes('installation process?') ? "[-Installation](#Installation)  " : ""}
  ${answers.content.includes('description?') ? "[-Description](#Description)  " : ""}  
  ${answers.content.includes('usage?') ? "[-Usage](#Usage)  " : ""}
  ${answers.content.includes('contributors?') ? "[-Contributors](#Contributors)  " : ""}
  ${answers.content.includes('test?') ? "[-Test](#Test)  " : ""}
  ${answers.content.includes('questions?') ? "[-Questions](#Questions)  " : ""}
  ${answers.licenses.includes('Other') ? "[-Licenses](#Licenses)  " : ""}
  
  ${answers.content.includes('installation process?') ? "## Installation  " : ""}
  ${answers.installation ? answers.installation : ""}

  ${answers.content.includes('description?') ? "## Description  " : ""}
  ${answers.description ? answers.description : ""}

  ${answers.content.includes('usage?') ? "## Usage  " : ""}
  ${answers.usage ? answers.usage : ""}
  
  ${answers.content.includes('contributors?') ? "## Contributors  " : ""}
  ${answers.contributors ? answers.contributors : ""}
  
  ${answers.content.includes('test?') ? "## Test  " : ""}
  ${answers.test ? answers.test : ""}
  
  ${answers.content.includes('questions?') ? `## Questions?  ` : ""}
  ${answers.questions ? answers.questions : ""}
  ${answers.name? `<br/> My Github link is [${answers.name}](https://github.com/${answers.name})` : ""}
  ${answers.email? `<br/> Any futher questions can be sent to my email here  <${answers.email}>` : ""}

  ${answers.licenses.includes('Other') ? "## Licenses  " : ""}
 ${answers.otherLicenses ? answers.otherLicenses : ""}
  
  `;
}

module.exports = generateMarkdown;
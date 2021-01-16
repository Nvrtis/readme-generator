// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}  
  [Link to webpage](${answers.link})
  
  ${answers.intro}  
    
  ## Table of Content
  ${answers.content.includes('installation process?')?"[-Installation](#Installation)  ":""}
  ${answers.content.includes('description?')?"[-Description](#Description)  ":""}  
  ${answers.content.includes('usage?')?"[-Usage](#Usage)  ":""}
  ${answers.content.includes('licenses?')?"[-Licenses](#Licenses)  ":""}
  ${answers.content.includes('contributors?')?"[-Contributors](#Contributors)  ":""}
  [-Profile](#Profile)
  
  ${answers.content.includes('installation process?')?"## Installation  ":""}
  ${answers.installation?answers.installation:""}

  ${answers.content.includes('description?')?"## Description  ":""}
  ${answers.description?answers.description:""}

  ${answers.content.includes('usage?')?"## Usage  ":""}
  ${answers.usage?answers.usage:""}

  ${answers.content.includes('licenses?')?"## Licenses  ":""}
  ${answers.licenses?answers.licenses:""}
  
  ${answers.content.includes('contributors?')?"## Contributors  ":""}
  ${answers.contributors?answers.contributors:""}
  
## Profile
### ${answers.name}
<${answers.email}>

`;
}

module.exports = generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=="None") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)`
  } else {
   return `;` 
  }
     
  }
  
    
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  if (license !=="None"){
    return `=[License](#license)`
  }
  return``;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !=="None"){
      return`##License  The license is ${license}.`
    }
    return ``;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return`
  
  
   ## Badges:
   ${renderLicenseBadge(data.license)}
  
  ## Your Name:
  ${data.name}
  
  # Your Project Title:
  ${data.title}
  
  ## Description:
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Links](#links)
  * [Licenses](#license)
  * [Credits](#credits)
  * [Features](#features)
  
  ### Installation:
  ${data.installation}
  
  ### Usage:
  ${data.usage}
  
  ### Credits:
  ${data.credits}
  
  ### License:
  ${data.license}
  
  ### Features:
  ${data.features}
  
  ### GitHub User Name:
  ${data.username}
  
  
  `;
  }
  
  module.exports = generateMarkdown;
  

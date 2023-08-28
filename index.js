// TODO: Include packages needed for this application
// packages required
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");




// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "name",
        message: "Please fill in your NAME.",
    },
    {
        type: "input",
        name: "title",
        message: "Please fill in your project TITLE.",
    },
    {
        type: "input",
        name: "description",
        message: "Please fill in the project DESCRIPTION.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please fill in the project INSTALLATION INSTRUCTIONS.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please fill in the project USAGE.",
    },
    {
        type: "input",
        name: "credits",
        message: "Please fill in the project CREDITS.",
    },
    {
        type: "input",
        name: "license",
        message: "Please fill in a license for your project. Options are: None, MIT, Apache, GNU, BSD2, BSD3, or a license of your choice.",
    },
    {
        type: "input",
        name: "features",
        message: "Please fill in the project FEATURES.",
    },
    {
        type: "input",
        name: "username",
        message: "Please fill in your GitHub username.",
    },
];
// .then((answers)=>{
//     const readme1PageContent = generateREADME (answers);
// }
// )


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log("You have succeeded in transfering info to the README.")
    });
};



// function writeToFile
// fs.writeFile('readme1', readme1PageContent, (err) =>
// err ? console.log(err): console.log("Successfully created Readme!")
//  );
// ;


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userFill){
        console.log(userFill);
        writeToFile("README1.md", generateMarkdown(userFill));
    });
}

// Function call to initialize app
init();


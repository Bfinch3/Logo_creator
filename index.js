//getting the answers
const inquirer = require('inquirer');
const fs = require('fs');
const Circle=require('./lib/circle')
const Square=require('./lib/square')
const Triangle=require('./lib/triangle')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for your logo, no more then three characters.',
            maxLength: 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color.',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo.',
            choices: ["circle", "square", "triangle"],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color?',
        },
    ])

    .then((answers) => {
        fs.writeFile('logo.svg', generateSVG(answers), (err) =>
            err ? console.log(err) : console.log('Successfully created a logo!'))
    });
const generateSVG = function (answers) {
    switch (answers.shape) {
        case 'circle':
            const circle = new Circle(answers)
            return circle.render()
            break;
        case 'square':
            const square = new Square(answers)
            return square.render()
            break;
        case 'triangle':
            const triangle = new Triangle(answers)
            return triangle.render()
            break;
    }
}
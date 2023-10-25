//constuctor extends shapes and create the shape
const Shapes = require ("./shapes");
class Square extends Shapes{
    constructor(data) {
        super(data.text, data.textColor, data.shapeColor)
        this.render = function () {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" style="fill:${this.shapeColor}" /><text x="150" y="115" font-size="40px" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
        }
        }
    
}
module.exports = Square
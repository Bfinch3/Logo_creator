//constuctor extends shapes and create the shape
const Shapes = require ("./shapes");
class Triangle extends Shapes{
    constructor(data){
        super(data.text,data.textColor, data.shapeColor)
        this.render = function () {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" style="fill:${this.shapeColor}" /><text x="150" y="125" font-size="40px" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
        }
    }
}
    

module.exports=Triangle
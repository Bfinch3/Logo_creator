//
const Circle=require('../lib/circle')
const Square=require('../lib/square')
const Triangle=require('../lib/triangle')

describe('Circle()',()=>{
    it('should create a circle with the given data',()=>{
        let answers={"text":"KMA","textColor":"brown","shape":"circle","shapeColor":"blue"}
        let shape=new Circle(answers)
        expect(shape.render()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" style="fill:blue" /><text x="150" y="115" font-size="40px" text-anchor="middle" fill="brown">KMA</text></svg>')
    })
}),
describe('Square()',()=>{
    it('should create a square with the given data',()=>{
        let answers={"text":"KMA","textColor":"brown","shape":"square","shapeColor":"blue"}
        let shape=new Square(answers)
        expect(shape.render()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" style="fill:blue" /><text x="150" y="115" font-size="40px" text-anchor="middle" fill="brown">KMA</text></svg>')
    })
}),
describe('Triangle()',()=>{
    it('should create a triangle with the given data',()=>{
        let answers={"text":"KMA","textColor":"brown","shape":"triangle","shapeColor":"blue"}
        let shape=new Triangle(answers)
        expect(shape.render()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" style="fill:blue" /><text x="150" y="125" font-size="40px" text-anchor="middle" fill="brown">KMA</text></svg>')
    })
})
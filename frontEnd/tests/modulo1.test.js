const modulo1 = require('./modulo1')
describe('basic feature', () => {
    it('aa', () =>{
        expect(modulo1.func1(10)).toBe(11)
    })
})
import supertest from 'supertest'
import app from '../../src/app/app'
import UserModel from '../../src/models/UserModel'
describe('step create user', () => {
    it('create user login', async () => {

        afterAll(async () => {
            //await UserModel.deleteMany()
        })
        const response = await supertest(app).post('/api/create/loginandsenha').send({
            email: "json@gmail.com",
            password: "123456"
        })


        expect(201).toBe(response.status)
        expect(response.body).not.toBe(null)
    })


    // it('create user', async () => {

    //     afterAll(async () => {
    //         //await UserModel.deleteMany()
    //     })
    //     const response = await supertest(app).post('/api/create/').send({
    //         lastname: "fulano",
    //         firstname: "sousa",
    //         codepostal: "00000-00",
    //         endereco: "street 98",
    //         city: "Teresina",
    //         estados: "Piauí",
    //         typePeople: "pj"
    //     })


    //     expect(201).toBe(response.status)
    //     expect(response.body).not.toBe(null)
    // })

    // it('login user', async () => {

    //     afterAll(async () => {
    //         //await UserModel.deleteMany()
    //     })
    //     const response = await supertest(app).post('/api/create/').send({
    //         lastname: "fulano",
    //         firstname: "sousa",
    //         codepostal: "00000-00",
    //         endereco: "street 98",
    //         city: "Teresina",
    //         estados: "Piauí",
    //         typePeople: "pj"
    //     })


    //     expect(201).toBe(response.status)
    //     expect(response.body).not.toBe(null)
    // })

})
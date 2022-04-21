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


    it('create user', async () => {

        afterAll(async () => {
            //await UserModel.deleteMany()
        })
        const response = await supertest(app).post('/api/create/user').send({
            lastname: "fulano",
            firstname: "sousa",
            codepostal: "00000-00",
            endereco: "street 98",
            city: "Teresina",
            estados: "Piauí",
            typePeople: "pj",
            login: '6260b4e70e82ce514bdf0155'
        })


        expect(201).toBe(response.status)
        expect(response.body).not.toBe(null)
    })

    it('login user', async () => {

        afterAll(async () => {
            //await UserModel.deleteMany()
        })
        const response = await supertest(app).post('/api/create/login').send({
            email: 'json@gmail.com',
            password: '123456'
        })


        expect(200).toBe(response.status)
        expect(response.body).not.toBe(null)
    })

    it('login user with wong credentials', async () => {

        afterAll(async () => {
            //await UserModel.deleteMany()
        })
        const response = await supertest(app).post('/api/create/login').send({
            email: 'json12@gmail.com',
            password: '123456'
        })

        //console.log(response.body)
        expect(404).toBe(response.status)

    })

})
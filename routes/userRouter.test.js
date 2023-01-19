const app = require("../server");
const request = require('supertest');

describe("GET/:username", ()=>{
    it("should respond with a 200",async ()=>{
        const username = "ebin234"
        const response = await request(app).get(`/api/user/${username}`)
        expect(response.statusCode).toBe(200)
    })
    it("should respond with a 404",async ()=>{
        const username = "ebin234wcsccscsd"
        const response = await request(app).get(`/api/user/${username}`)
        expect(response.statusCode).toBe(404)
    })
})

describe("GET/repositories/:username/:page", ()=>{
    it("should respond with a 200",async ()=>{
        const username = "ebin234"
        const page  = "1"
        const response = await request(app).get(`/api/user/repositories/${username}/${page}`)
        expect(response.statusCode).toBe(200)
    })
    it("should respond with a 404",async ()=>{
        const username = "ebin234sdcsdcsdc"
        const page = "1"
        const response = await request(app).get(`/api/user/repositories/${username}/${page}`)
        expect(response.statusCode).toBe(404)
    })
})

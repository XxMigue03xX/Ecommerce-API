const request = require("supertest");
const app = require("../app");
require("../models");

let token;

beforeAll(async () => {
    const res = await request(app).post('/users/login').send({
        email: "testuser@gmail.com",
        password: "testuser"
    });
    token = res.body.token;
});

test('GET /images', async () => {
    const res = await request(app).get('/images').set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});
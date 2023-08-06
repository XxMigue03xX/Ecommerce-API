const request = require("supertest");
const app = require("../app");
const Category = require("../models/Category");
const Image = require("../models/Image");
require("../models");

let id;
let token;

beforeAll(async () => {
    const res = await request(app).post('/users/login').send({
        email: "testuser@gmail.com",
        password: "testuser"
    });
    token = res.body.token;
});

test('GET /products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /products', async () => {
    const product = {
        title: "Samsung Tab A8", 
        description: "A great Tablet",
        brand: "Samsung",
        price: 250,
    }
    const res = await request(app).post('/products').send(product).set("Authorization", `Bearer ${token}`);
    id = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.title).toBe(product.title);
    expect(res.body.id).toBeDefined();
});

test('POST /products/:id/images', async () => {
    const image = await Image.create({
        url: "example.com",
        publicId: "X"
    })
    const res = await request(app).post(`/products/${id}/images`).send([image.id]).set("Authorization", `Bearer ${token}`);
    await image.destroy();
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
});

test('PUT /products', async () => {
    const product = {
        title: "Samsung Tab A8 Updated", 
    }
    const res = await request(app).put(`/products/${id}`).send(product).set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe(product.title);
});

test('DELETE /products', async () => {
    const product = {
        title: "Samsung Tab A8 Updated", 
    }
    const res = await request(app).delete(`/products/${id}`).send(product).set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(204);
});
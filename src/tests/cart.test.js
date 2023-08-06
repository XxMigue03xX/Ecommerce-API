const request = require("supertest");
const app = require("../app");
const Product = require("../models/Product");
require("../models");

let token;
let id;

beforeAll(async () => {
    const res = await request(app).post('/users/login').send({
        email: "testuser@gmail.com",
        password: "testuser"
    });
    token = res.body.token;
});

test('GET /cart', async () => {
    const res = await request(app)
      .get('/cart')
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /cart', async () => {
    const product = await Product.create({
        title: "Samsung Tab A8", 
        description: "A great Tablet",
        brand: "Samsung",
        price: 250,
    });
    const cart = {
        productId: product.id,
        quantity: 1
    }
    const res = await request(app)
      .post('/cart')
      .send(cart)
      .set("Authorization", `Bearer ${token}`);
    await product.destroy();
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.quantity).toBe(cart.quantity);
    expect(res.body.id).toBeDefined();
});

test('PUT /cart/:id', async () => {
    const newCart = {
        quantity: 2
    }
    const res = await request(app)
      .put(`/cart/${id}`)
      .send(newCart)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.quantity).toBe(newCart.quantity);
});

test('DELETE /cart/:id', async () => {
    const res = await request(app)
      .delete(`/cart/${id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(204);
});
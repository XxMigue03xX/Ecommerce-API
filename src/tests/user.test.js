const request = require("supertest");
const app = require("../app");
// require("../models");

let id;
let token;

test('POST /users debe crear un usuario', async () => {
    const user = {
        firstName: "Jhon",
        lastName: "Smith",
        email: "example@gmail.com",
        password: "1234",
        phone: "3123456789"
    }
    const res = await request(app).post('/users').send(user);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(user.firstName);
    expect(res.body.id).toBeDefined();
    expect(res.body.password).not.toBe(user.password);
});

test('POST /users/login debe iniciar sesion con un usuario un usuario', async () => {
    const body = {
        email: "example@gmail.com",
        password: "1234"
    }
    const res = await request(app).post(`/users/login`).send(body);
    token = res.body.token;
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
});

test('GET /users debe traer todos los usuarios', async () => {
    const res = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('PUT /users/:id debe editar un usuario', async () => {
    const userUpdated = {
        firstName: "Jhon 2"
    }
    const res = await request(app)
      .put(`/users/${id}`)
      .send(userUpdated)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(userUpdated.firstName);
});

test('POST /users/login credenciales incorrectas', async () => {
    const body = {
        email: "fake@gmail.com",
        password: "0000"
    }
    const res = await request(app).post(`/users/login`).send(body);
    expect(res.status).toBe(401);
});

test('DELETE /users/:id debe borrar un usuario', async () => {
    const res = await request(app)
      .delete(`/users/${id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(204);
});
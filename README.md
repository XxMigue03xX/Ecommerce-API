# Ecommerce-API

REST API built as the final project for the Academlo bootcamp.  
It follows an MVC-based structure using Node.js, Express, Sequelize, PostgreSQL, JWT authentication, Cloudinary image handling, and automated tests with Supertest.

The API supports the core flow of a simple e-commerce backend: user management, authentication, product management, cart handling, purchases, and purchase history.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots or Evidence](#screenshots-or-evidence)
- [Notes](#notes)
- [Limitations](#limitations)
- [Status](#status)
- [Author](#author)
- [License](#license)

## Features
- User CRUD operations
- User authentication with JWT
- Category CRUD operations
- Product CRUD operations
- Product image upload and hosting through Cloudinary
- Cart management
- Purchase creation
- Purchase history retrieval
- Automated API testing with Supertest

## Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- PostgreSQL
- Sequelize

**Libraries / Services**
- JWT
- Cloudinary
- Supertest

**Tools**
- Nodemon
- Postman

## Project Structure
- `src/controllers`: business logic and request handling
- `src/models`: Sequelize models and database relationships
- `src/routes`: API endpoints and route definitions
- `src/tests`: automated tests
- `src/utils`: error handling, database connection, JWT utilities, and Cloudinary configuration
- `src/app.js` and `src/server.js`: Express app setup, environment loading, Sequelize initialization, and server startup

## How to Run

### Prerequisites
- Node.js installed
- PostgreSQL installed
- Access to pgAdmin or PostgreSQL through terminal
- A Cloudinary account

### 1. Clone the repository
```bash
git clone [REPOSITORY_URL]
cd Ecommerce-API
````

### 2. Install dependencies

```bash
npm install
```

> You may see vulnerability warnings during installation. This project was originally built with older dependency versions, some of which now report known vulnerabilities. In its current state, this repository should be considered a portfolio / educational project, not a production-ready deployment.

### 3. Create the PostgreSQL database

Create a PostgreSQL database manually using pgAdmin or the terminal.

Example using `psql`:

```bash
psql -U postgres
CREATE DATABASE ecommerce_db;
```

### 4. Configure environment variables

Create a `.env` file based on `.env.example` and fill in the required values.

### 5. Run tests (optional)

```bash
npm run test
```

### 6. Start the project

```bash
npm run dev
```

### 7. Open / test the API

Once the server is running, you can test the API using Postman or another API client.

Published Postman documentation:
[Postman Collection](https://documenter.getpostman.com/view/28246198/2s9XxySEEh)

## Environment Variables

```env
# Database configuration
DATABASE=ecommerce_db
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_postgres_password

# Server configuration
PORT=8080

# Authentication
# Random secret used to sign JWT tokens
# Generate with: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
TOKEN_SECRET=replace_with_a_secure_random_hex_secret

# Cloudinary configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Usage

1. Create a user or log in with an existing account.
2. Use the JWT token to access protected endpoints if required.
3. Create and manage products, including image uploads handled through Cloudinary.
4. Add products to the cart.
5. Create a purchase from the cart.
6. Retrieve previous purchase records through the purchase history endpoints.

This API can also be consumed by a frontend client. Related frontend repository: `ecommerce-react`.

## API Endpoints

| Method                    | Endpoint       | Description                          |
| ------------------------- | -------------- | ------------------------------------ |
| POST                      | `/users`       | Create a new user                    |
| POST                      | `/users/login` | Authenticate a user and return a JWT |
| GET / POST / PUT / DELETE | `/products`    | Manage products                      |
| POST / GET / PUT / DELETE | `/cart`        | Manage shopping cart contents        |
| POST                      | `/purchases`   | Create a purchase                    |
| GET                       | `/purchases`   | Retrieve purchase history            |

> For the complete and exact endpoint list, see the published Postman documentation.

## Screenshots or Evidence

* API documentation: [Postman Collection](https://documenter.getpostman.com/view/28246198/2s9XxySEEh)
* Related frontend repository: `ecommerce-react`

## Notes

* This project was developed as the final project for the Academlo bootcamp.
* The repository has been preserved and documented as part of my professional portfolio.
* Some dependencies are legacy and may show security warnings in modern environments.
* The setup process described above was reviewed and updated during repository maintenance.

## Limitations

* No payment gateway or real payment processing is implemented.
* Some dependencies are outdated and may require future maintenance for production-level use.
* The project was not originally designed for current production hardening standards.

## Status

Completed bootcamp final project, currently maintained as a portfolio repository.

## Author

**Miguel Garavito**

* Portfolio: [https://miguelgaravito.netlify.app/](https://miguelgaravito.netlify.app/)
* LinkedIn: [https://co.linkedin.com/in/miguel-%C3%A1ngel-garavito-camargo](https://co.linkedin.com/in/miguel-%C3%A1ngel-garavito-camargo)

## License

This project is shared for educational and portfolio purposes.
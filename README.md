# Node.js Express MySQL CRUD Application

A basic Node.js app using Express and MySQL for CRUD operations on `companies` and `users`. The project is structured for clarity, with validation and error handling.

### Features:

- Basic CRUD for `companies` and `users`
- MySQL integration
- Input validation and sanitization
- Seed data for quick testing

## Setup

### 1. **Install Dependencies**

```bash
npm init -y
npm install express mysql2 dotenv bcrypt express-validator
npm install --save-dev nodemon
```

### 2. **Project Structure**

```
src/
    config        # Database config
    controllers   # Request logic
    models        # DB interaction
    routes        # API routes
    validators    # Input validation
 app.js
```

### 3. **Database Configuration**

`.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=company_db
```

### 4. **Seed Data**

Run the seed script to populate test data:

```bash
npm run seed
```

### 5. **Run the Application**

```bash
npm run dev
```

Test API endpoints for `companies` and `users`.

- **Companies**:
  - GET `/api/companies`
  - POST `/api/companies`
  - PUT `/api/companies/:id`
  - DELETE `/api/companies/:id`
- **Users**:
  - GET `/api/users`
  - POST `/api/users`
  - PUT `/api/users/:id`
  - DELETE `/api/users/:id`

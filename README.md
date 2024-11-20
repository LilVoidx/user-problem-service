
---

# **User Management API**

This is a NestJS API that works with a large-scale user database. It includes an endpoint to reset the `hasProblems` flag for all users from `true` to `false` while counting the number of affected rows.

---

## **Features**

- Updates the `hasProblems` flag for users and count the updated rows.
- Efficiently handles large datasets (I tested it with 1,000,000 users).
- Middleware for logging HTTP requests with response time.

---

## **Technologies Used**

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## **How to get started**

### **Prerequisites**

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- Yarn (my preferred package manager)

### **Steps**

1. **Clone the Repository**
  
  ```bash
  git clone <repository-url>
  cd <repository-folder>
  ```
  
2. **Install Dependencies**
  
  ```bash
  yarn install
  ```
  
3. **Configure Environment Variables**
  Refactor `.env.example` file in the project root and remove the .example then add your info, the file should look like this
  
  ```env
  DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
  PORT=5003
  ```
  
4. **Run Database Migrations**
  
  ```bash
  npx prisma migrate dev --name init
  ```
  
5. **Seed the Database**
  Use the included script in /prisma/seed.ts to seed the database with 1,000,000 users:
  
  ```bash
  npx ts-node prisma/seed.ts
  ```
  
6. **Start the Application**
  
  ```bash
  yarn start
  ```
  

---

## **API Endpoints**

### **Reset `hasProblems` Flag**

- **URL**: `/users/reset-problems`
- **Method**: `POST`
- **Description**: Resets the `hasProblems` flag to `false` for all users where it is currently `true`. Returns the count of updated rows.

#### **Response**

```json
{
  "result": {
    "count": <number-of-affected-rows>
  }
}
```

---



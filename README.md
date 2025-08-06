#  Ash's Pokémon Tracker 

This is a fullstack Pokémon Tracker application that allows Ash to manage his Pokémon collection. 
Built with the MERN stack (MongoDB, Express.js, React, Node.js), this app supports full CRUD functionality...

---

## Folder Structure

- backend/   ->   Express + MongoDB REST API
-  frontend / ->  React + Redux client
- .gitignore
- README.md
- package.json



---

##  Features

- Add a new Pokémon (name, type, special attack, description)
-  Edit existing Pokémon
-  Delete any Pokémon
-  List all Pokémon with scrollable view
-  Persist data using **Redux**
-  Backend API includes **unit tests**
-  UI with scrollable list and sticky form

---

##  Tech Stack

### Frontend
- React (with Hooks)
- Redux Toolkit
- UUID for IDs

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Jest + Supertest for testing
- dotenv

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yuvraj-thakur1311/Pokemon_Pokedex.git
cd Pokemon_Pokedex
```
-----

### 2. Install Dependencies

####  Backend

```bash
cd backend
npm install
```

###  Frontend
```bash
cd ../frontend
npm install

```

### 3. Run the App

### Start Backend

```bash
cd backend
npm run server
```

### Start Frontend

```bash
cd ../frontend
npm start

```
---------


### 4. Environment Setup

Create a .env file inside the backend/ directory:

```bash

PORT=5000
MONGODB_URI=mongodb://localhost:27017/pokedex
```

------

### 5. Backend Testing

```bash
cd backend
npm test

```

-------

###  Backend Test Results

<img width="494" height="274" alt="image" src="https://github.com/user-attachments/assets/c91df9c7-57c1-4344-b6f3-55d7f80da455" />

------


###  UI Screenshot

<img width="1913" height="867" alt="image" src="https://github.com/user-attachments/assets/99e60d81-a20a-44a3-8a31-57b584075ef0" />



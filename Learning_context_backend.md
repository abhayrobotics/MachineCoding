# BACKEND LEARNING CONTEXT

## Current Phase

```text
Week 2 Backend Foundations
Node.js + Express + PostgreSQL
```

---

# Backend Mental Model

## Full Stack Architecture

```text
React (Frontend/UI)
        ↓
HTTP Request
        ↓
Express API (Backend)
        ↓
PostgreSQL Database
        ↓
Express Response
        ↓
React State Update
        ↓
UI Re-render
```

---

# Ownership Model

## React

Owns:

```text
UI
State
User Interactions
```

Examples:

```js
useState()
setTasks()
```

---

## Express

Owns:

```text
Business Logic
Routing
Validation
API Responses
```

Acts as:

```text
Middleman
```

between React and Database.

---

## Database

Owns:

```text
Persistent Data
```

Database is:

```text
Source of Truth
```

---

# Database vs React State

## React State

```js
const [tasks, setTasks] = useState([]);
```

Characteristics:

```text
Temporary
Lost on Refresh
Lost on Browser Close
```

---

## Database

Characteristics:

```text
Persistent
Survives Refresh
Survives Restart
Survives Browser Close
```

---

# Why React Cannot Access Database Directly

Incorrect:

```text
React
 ↓
PostgreSQL
```

Problems:

```text
Security
Credentials Exposure
Architecture Violation
```

---

Correct:

```text
React
 ↓
Express
 ↓
Database
```

---

# Data Flow: Load Tasks

## Initial State

```js
const [tasks, setTasks] = useState([]);
```

```text
tasks = []
```

---

## Flow

```text
User Opens Page
        ↓
React Render #1
        ↓
GET /tasks
        ↓
Express
        ↓
SELECT * FROM tasks
        ↓
Database
        ↓
Tasks Data
        ↓
Express
        ↓
JSON Response
        ↓
setTasks(data)
        ↓
React Render #2
        ↓
UI Updated
```

---

# Important Concept

## React Does NOT Wait

Incorrect Thinking:

```text
React waits for database
```

Correct Thinking:

```text
Render #1
↓
Fetch Starts
↓
React Continues
↓
Response Arrives Later
↓
setTasks()
↓
Render #2
```

Keyword:

```text
Asynchronous
```

---

# HTTP vs Database Operations

## HTTP

React ↔ Express

Methods:

```text
GET
POST
PUT
DELETE
```

---

## SQL

Express ↔ PostgreSQL

Commands:

```sql
SELECT
INSERT
UPDATE
DELETE
```

---

## Mapping

```text
GET     → SELECT
POST    → INSERT
PUT     → UPDATE
DELETE  → DELETE
```

---

# Data Flow: Delete Task

```text
Button Click
        ↓
React
        ↓
DELETE /tasks/5
        ↓
Express
        ↓
Database
        ↓
Task Deleted
        ↓
Express
        ↓
JSON Response
        ↓
React
        ↓
UI Updated
```

---

# Creating Tasks

## Approach 1

Optimistic UI

```text
Update UI First
↓
Send Request Later
```

Pros:

```text
Fast UX
```

Cons:

```text
Database May Fail
UI Inconsistent
```

---

## Approach 2

Server First

```text
Send Request
↓
Database Update
↓
Success Response
↓
UI Update
```

Pros:

```text
Consistency
```

Recommended for learning.

---

# Node.js Fundamentals

## What is Node.js?

Node.js is:

```text
JavaScript Runtime
```

Allows JavaScript to run:

```text
Outside Browser
```

---

## Runtime Concept

```text
JavaScript = Language

Chrome = Runtime

Node.js = Runtime
```

Same language.

Different runtime.

---

## Frontend vs Backend JavaScript

```text
Frontend JS
↓
Runs in Browser

Backend JS
↓
Runs in Node.js
```

---

# Node.js vs Express

## Node.js

Responsibilities:

```text
Executes JavaScript
Provides Runtime
Provides Core Modules
```

Example:

```text
server.js
```

is executed by:

```text
Node.js
```

---

## Express

Responsibilities:

```text
Routing
API Creation
Request Handling
Response Handling
```

Provides:

```js
app.get()
app.post()
app.put()
app.delete()
```

---

## Mental Model

```text
Node.js = Engine

Express = Framework
```

---

# First Node Server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(3000);
```

---

# HTTP Module

```js
const http = require("http");
```

Meaning:

```text
Import Node's built-in HTTP module
```

Similar to:

```js
import { useState } from "react";
```

---

# createServer()

```js
http.createServer(...)
```

Meaning:

```text
Create Server
```

Analogy:

```text
Open Restaurant
Wait For Customers
```

---

# req and res

## req

Incoming request.

Contains:

```text
URL
Method
Headers
```

Example:

```text
GET /tasks
```

---

## res

Outgoing response.

Used to send data back.

Example:

```js
res.end("Hello");
```

---

# listen()

```js
server.listen(3000);
```

Meaning:

```text
Start Server
Reserve Port 3000
Wait For Requests
```

Analogy:

```text
Restaurant Opens
```

Without:

```js
listen()
```

Server exists but cannot receive requests.

---

# Express Fundamentals

## Create App

```js
const express = require("express");

const app = express();
```

Meaning:

```text
Create Express Application
```

---

# First Route

```js
app.get("/", (req, res) => {
  res.send("Hello");
});
```

Meaning:

```text
If GET /
Then Run This Function
```

---

# Start Express Server

```js
app.listen(3000);
```

Meaning:

```text
Open Server
Wait For Requests
```

---

# Route Matching

Example:

```js
app.get("/tasks", ...);
```

Matches:

```text
GET /tasks
```

Does NOT match:

```text
GET /users
GET /products
```

---

## Route Flow

```text
Request Arrives
        ↓
Express Checks Routes
        ↓
Match Found?
      /     \
    Yes      No
     ↓        ↓
 Run Code   404
```

---

# Route Examples

```js
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/tasks", (req, res) => {
  res.send("Tasks");
});
```

---

Results:

```text
/       → Home

/tasks  → Tasks

/users  → Cannot GET /users
```

---

# Request Lifecycle

Example:

```js
app.get("/tasks", (req, res) => {
  console.log("Request Received");

  res.send("All Tasks");
});
```

Execution Order:

```text
Request Arrives
        ↓
console.log()
        ↓
res.send()
        ↓
Browser Receives Response
```

JavaScript executes:

```text
Top To Bottom
```

---

# res.send() vs return

## Common Mistake

Thinking:

```text
res.send() = return
```

Wrong.

---

## Example

```js
app.get("/tasks", (req, res) => {
  res.send("Tasks");

  console.log("After Response");
});
```

Output:

Browser:

```text
Tasks
```

Console:

```text
After Response
```

Reason:

```text
res.send()
Does NOT stop execution
```

---

## Actual Return

```js
app.get("/tasks", (req, res) => {
  return res.send("Tasks");

  console.log("After Response");
});
```

Now:

```text
console.log() never runs
```

because:

```text
return exits function
```

---

# Key Mental Model

```text
res.send()
=
Send Letter

return
=
Leave Office
```

You can:

```text
Send Letter
↓
Continue Working
```

But:

```text
return
↓
Leave Immediately
```

---

# Current Understanding Status

```text
React ↔ Backend Flow     ✅ Good
Node.js Runtime          ✅ Basic
Express Basics           ✅ Basic
Routes                   ✅ Good
Request/Response         ✅ Good
res.send() vs return     ✅ Good
HTTP Lifecycle           ✅ Basic
PostgreSQL               ⏳ Not Started
```

---

# Next Topics

```text
req.url
req.method

GET vs POST

Request Body

Express Middleware

REST APIs

PostgreSQL
```

---

# Interview Questions

## Q1

What is Node.js?

### Answer

```text
JavaScript Runtime
```

---

## Q2

Who executes server.js?

### Answer

```text
Node.js
```

---

## Q3

Who provides app.get()?

### Answer

```text
Express
```

---

## Q4

What does app.listen(3000) do?

### Answer

```text
Start Server
Listen For Requests
```

---

## Q5

What happens if no route matches?

### Answer

```text
404 Not Found

Cannot GET /route
```

---

## Q6

Does res.send() stop execution?

### Answer

```text
No
```

Only:

```text
return
```

stops execution.
# Module 1 - Express Core (Progress Update)

## ✅ Completed Topics

### 1. req.url
**Definition**
- `req.url` contains the complete request URL received by Express, including the query string.

Example:

```http
GET /products/55?color=red&page=2
```

```js
req.url
```

Output:

```text
/products/55?color=red&page=2
```

---

### 2. req.method

**Definition**
- `req.method` tells Express which HTTP method the client used.

Examples:

```text
GET
POST
PUT
DELETE
PATCH
```

Example:

```js
console.log(req.method);
```

Output:

```text
GET
```

---

### 3. Route Parameters (`req.params`)

**Purpose**
- Used to identify a specific resource.
- Dynamic values are extracted from the URL path.

Example:

```js
app.get("/products/:id", ...)
```

Request:

```text
GET /products/55
```

Express extracts:

```js
req.params = {
    id: "55"
}
```

Remember:
- Route parameters are always strings.

Mental Model:

```text
Route Parameters
=
Identity

Which resource?
```

---

### 4. Query Parameters (`req.query`)

**Purpose**
- Used to modify or filter the request.
- Comes after the `?` in the URL.

Example:

```text
GET /products?color=red&size=XL
```

Express extracts:

```js
req.query = {
    color: "red",
    size: "XL"
}
```

Remember:
- Query values are also strings.

Mental Model:

```text
Query Parameters
=
Filters
Options
Sorting
Pagination
```

Examples:

```text
?page=2

?sort=date

?limit=10

?status=completed
```

---

## ⭐ Important Difference

Route Parameters

```text
/products/55
```

↓

Identify Product 55.

Query Parameters

```text
/products?color=red
```

↓

Filter or modify the response.

---

# Middleware

## What is Middleware?

Middleware is a function that executes **between receiving a request and reaching the route handler**.

It can:

- Log requests
- Authenticate users
- Validate requests
- Parse JSON
- Handle CORS
- Check permissions
- Stop unauthorized requests

---

## Why Middleware Exists

Without middleware:

```text
Browser

↓

Route

↓

Database
```

Every route would need duplicate code.

With middleware:

```text
Browser

↓

Middleware

↓

Route

↓

Database
```

Common logic is written once and reused.

---

## app.use()

**Definition**

`app.use()` registers middleware.

By default it executes for **every incoming request**, regardless of:

- GET
- POST
- PUT
- DELETE

or

- /tasks
- /users
- /login

Example:

```js
app.use((req,res,next)=>{
    console.log("Request Received");
    next();
});
```

---

## Middleware Pipeline

Express processes middleware in the order they are registered.

```text
Browser

↓

Middleware A

↓

Middleware B

↓

Route Handler

↓

Response
```

---

## next()

`next()` tells Express:

> Continue to the next middleware or route handler.

Example:

```js
app.use((req,res,next)=>{

    console.log("A");

    next();

});
```

Without `next()`:

Express waits forever unless a response is sent.

---

## Middleware Golden Rule

Every middleware must do one of the following:

```js
next();
```

OR

```js
res.send(...);
```

OR

```js
res.json(...);
```

If it does neither:

```text
Browser

↓

Middleware

↓

Waiting...

(No response)
```

The request hangs.

---

## Important Understanding

Middleware runs **before Express determines whether a matching route exists**.

Example:

```text
GET /abc
```

Flow:

```text
Browser

↓

Middleware ✅

↓

Find Route

↓

No Route

↓

404
```

Middleware still executes.

---

# Backend Thinking Framework (Interview)

When explaining request flow, always think in this order:

```text
1. Browser sends request

↓

2. Express receives request

↓

3. Express extracts information

↓

4. Stores information

↓

5. Middleware executes

↓

6. Route Handler executes

↓

7. Business Logic

↓

8. Database

↓

9. Response sent

↓

10. Browser receives response
```

---

# 11/10 Interview Mindset

Never answer only:

"What happened?"

Instead answer:

- What request came?
- What did Express extract?
- Where did Express store it?
- Which middleware executed?
- Why did Express move to the next middleware?
- How was the response generated?

This demonstrates understanding of the complete request lifecycle instead of memorized syntax.

---

## Current Progress

```text
Node.js Runtime          ✅
npm                      ✅
Express Basics           ✅
req.url                  ✅
req.method               ✅
req.params               ✅
req.query                ✅
Middleware               🟡 (Core concept learned)

Next:
⬜ Route-specific middleware
⬜ express.json()
⬜ req.body
⬜ REST APIs
```
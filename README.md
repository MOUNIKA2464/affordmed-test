# Affordmed Notification System

## Features
- Logging Middleware
- Notification APIs
- Priority Notification Logic
- REST API Design
- Database Design
- Query Optimization
- Scalable Notification Architecture

## Technologies Used
- Node.js
- Express.js
- JavaScript

## Project Structure

```text
middleware/
routes/
utils/
server.js
notification_system_design.md
```

## Run Project

```bash
npm install
node server.js
```

## API Endpoint

```http
GET /api/notifications
```

## Middleware

Custom logging middleware logs:
- request method
- request URL
- timestamp

## Priority Logic

Priority order:
1. Placement
2. Result
3. Event
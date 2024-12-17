# Department Management API
## NOTE: You can only login with username: "testuser", password: "password123"

## Project Overview
A robust backend API for managing departments and sub-departments, built with NestJS, GraphQL, TypeORM, and PostgreSQL. The application supports user authentication, department creation, and hierarchical department management.

## Technologies Used
- **Backend Framework**: NestJS
- **Query Language**: GraphQL
- **ORM**: TypeORM
- **Database**: PostgreSQL
- **Authentication**: JWT

## Features
- User Authentication
- Department CRUD Operations
- Sub-Department Management
- Protected GraphQL Endpoints
- Input Validation

## Hosted API
🌐 **API Endpoint**: [Render.com Deployment URL]

## Authentication Details
### Login Credentials
- **Username**: `testuser`
- **Password**: `password123`

### Login Mutation
```graphql
mutation {
  login(input: {
    username: "testuser",
    password: "password123"
  }) {
    access_token
  }
}
```

### Using the Token
- After successful login, use the returned `access_token` in the Authorization header for protected routes
- Header format: `Authorization: Bearer {access_token}`

## GraphQL Endpoints

### Department Management
- `createDepartment`: Create departments with optional sub-departments
- `getDepartments`: Retrieve all departments in hierarchical structure
- `updateDepartment`: Modify department names
- `deleteDepartment`: Remove departments and their sub-departments

## Example GraphQL Mutations

### Create Department
```graphql
mutation {
  createDepartment(input: {
    name: "Finance",
    subDepartments: [
      { name: "Accounts" },
      { name: "Audit" }
    ]
  }) {
    id
    name
    subDepartments {
      id
      name
    }
  }
}
```

### Update Department
```graphql
mutation {
  updateDepartment(id: 1, name: "Financial Services") {
    id
    name
  }
}
```

### Delete Department
```graphql
mutation {
  deleteDepartment(id: 1) {
    id
    name
  }
}
```

## Local Development

### Prerequisites
- Node.js 16+
- Docker
- PostgreSQL

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure `.env` file with necessary environment variables
4. Start PostgreSQL: `docker-compose up`
5. Run application: `npm run start:dev`

## Testing
- Access GraphQL Playground at `/graphql`
- Use provided mutation examples for testing

## Validation Rules
- Department names: Minimum 2 characters
- Sub-department names: Minimum 2 characters
- Authentication required for protected routes

## Deployment
- Hosted on Render.com
- Continuous deployment from GitHub repository

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create pull request

## Troubleshooting
- Ensure all environment variables are correctly set
- Verify Docker and PostgreSQL are running
- Check network configurations if experiencing connection issues

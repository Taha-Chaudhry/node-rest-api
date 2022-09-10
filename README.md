## Express REST API
REST API that acesses a json file instead of a database

## Powered by:
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com)

#### With Node.js
```
node index.js
```

#### With Docker
```
docker run --name node-rest-api -p 3000:3000 -d node-rest-api
```

## API Reference


### GET endpoints


#### Creates a base user and deletes all users created
```
GET /api/reset
```

#### Get all users' data

```
GET /api/users/
```

#### Get user data by id

```
GET /api/users/${id}
```

#### Delete user by id

```
GET /api/deleteUser/${id}
```


### POST endpoint

#### Adds user based on request body

```
POST /api/addUser
```

| Body | Type |
| :-------- | :------- |
| `name`      | `String` |
| `email`      | `String` |

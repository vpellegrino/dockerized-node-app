# Dockerized NodeJS App

This application represents a proof of concept about the realization of a dockerized NodeJS application.<br>
The container is shipped together with a `mongoDB` instance, from which it depends.<br>

## Application interface
The application itself exposes a simple REST API that enables the storing of a company information, and the retrieval of all stored companies:<br>

### Company list

```
GET: /companies
```

It returns an array containing all stored companies


### Add a new company

```
POST: /insert
```

Request body example:
```
{
	"name": "test",
	"revenue": 256,
	"country": "blabla"
}
```

## Technical details
A simple NodeJS application (ES7), exposing REST endpoints, using [ExpressJS](https://expressjs.com/) framework.<br>
Containerization has been described in the `Dockerfile`, using as base NodeJS official image.<br>
The dependency with Mongo is described in the `docker-compose.yaml`, where official Mongo image is retrieved.<br>

## Available Scripts
In the project directory, you can run:

### `npm install`

Launches the dependencies installation.<br>

### `npm dev`

By using the `nodemon` framework, it starts the application and eventually listens to modifications (it gets automatically rebooted).<br>
Note that, in DEV mod, a Mongo instance should run separately on localhost. You can use Docker, if you want:<br>
`docker run -i -t -p 27017:27017 mongo`

### `npm start`

Starts the application in *production* mode. This command gets executed by Docker in order to launch the app.

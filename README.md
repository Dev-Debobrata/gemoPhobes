# Will start working on this project soon




# gemoPhobes

An e-commerce website for learning purpose which is going be developed using react js and nodejs.

## Folder structure of project

```bash
  gemoPhobes - main/parent folder
  ├── client - contains files and folders for front-end
  ├── server - contains files and folders for back-end
  └── README.md
```

## Client

### Installation of required npm packages for front-end

once cloning has been done, use the commands below in terminal step-by-step

```bash
cd gemoPhobes/client
npm install
```

this will install all the required npm packages and dependencies, which are mentioned in the **package.json**, inside automatically created **node_modules** folder

### Running front-end in local server

after installing npm packages, use the following command to run the project

```bash
npm start
```

go to http://localhost:3000/ in browser to check the front end.

## Server

Using Nodejs for making the server.

### Starting docker container

```bash
  sudo docker-compose up -d
```

Run this code to your terminal to run it on your local machine. This will start the docker container. You can see the output in the terminal.

### Installation of required npm packages for back-end

once cloning has been done, use the commands below in terminal step-by-step

```bash
cd gemoPhobes/server
npm install
```

### Packages

> dotenv
> nodemon
> express
> mongodb
> mongoose
> cors
> helmet
> cookie-parser

this will install all the required npm packages and dependencies, which are mentioned in the **package.json**, inside automatically created **node_modules** folder.

### Running backend-end in local server

after installing npm packages, use the following command to run the project

```bash
npm start
```

go to http://localhost:6000/ in browser to check the back end.

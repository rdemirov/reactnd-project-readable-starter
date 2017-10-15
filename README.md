# Readable project 

This is the second project of the Udacity React nanodegree. It consists of 2 parts : 

* Backend server - provided as a starter template from Udacity. 
  After it is started,it is accessible at the following URL : http://localhost:3001

* Frontend - implemented using the create-react-app package (https://github.com/facebookincubator/create-react-app).
  The interface is built using React JS (https://reactjs.org/),with state management done with Redux (http://redux.js.org/).
  Layout of the web application has been made with react-bootstrap components (https://react-bootstrap.github.io/),
  with module react-overlays updated to 0.7.3,due to issue with react-bootstrap modal dialogs in React v.16.
  Async calls in redux are done using the redux-thunk middleware (https://github.com/gaearon/redux-thunk)
  The frontend part of the project can be accessed at URL : http://localhost:3000

## Starting the project 

Before starting the frontend,you should start the backend server.Installation of project modules is needed only for the initial execution of the project.

### Starting the backend server 

First,you should enter the server's folder : 

```
cd api-server
```
Before starting the server for the first time,you should install its dependencies by:

```
npm install
```
After the install has finished, the backend part of the project is started with:

```
node server
```
### Starting the frontend

Starting from the root folder of the project,change directory to the frontend folder:

```
cd frontend
```
Before the first execution of the frontend part, you should install its modules:

```
npm install 
```
After the install,the project is started by typing : 

```
npm start
```

## Additional information 

For additional information about the server,please reference : [Server readme](./api-server/README.md)

Additional info about the frontend part is found at : [Frontend readme](./frontend/README.md)
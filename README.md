# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Server Useage

Used JSON Server (https://www.npmjs.com/package/json-server) in local instance to achieve API Setup.

This Server will be accesible in `localhost:3004` by `json-server --watch db.json --port 3004`

From there we are passing or our data from Blogs route to meet the requirement.


### Steps of Implementation

Used of useState hook, useReducer hook, useContext hook for controlled component Implementation.

Used JS feature spread operator, Named Import & Export.

Router Concepts for various page redirect.

Blog Creation, Listing, Detail View & Deleting are been handled in server.

Theme Toggle is additional feature implemented using context hook for app level data updation.

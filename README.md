# eCommerce Project Phase 3
This repo is for Phase 3 of my eCommerce Website, AstroTech.
AstroTech is dedicated to carrying top of the line astronomical equipment.

## Currently in this repo:
1. This README.md
1. LICENSE
1. Design Folder (contains the ERD and the Functional Diagram, both in .png format)
1. .gitignore
1. Package.json / Package-lock.json
1. proxy folder (contains proxy.js file, this is required to target the React App port and send responses to the client)
1. routes folder (contains Express Router API routes)
1. logging folder (contains HTTP requests handled through Morgan)
1. test folder (contains 4 unit tests using both mocha and chai)
1. dB_schema (contains MySQL DataBase)
1. client folder (contains React App that is currently in sync with the express server in the server folder)
1. server.js (contains the express server and makes the magic happen)

## Download Node Modules
To download the required node_modules, enter this command in your Terminal:
    ```
    npm install
    ```

## Additional Notes:

In the package.json file in the root directory, there are custom scripts that allow the developer to start both the Express server and the React App at the same time. To execute this script, open Terminal and run this line:
    ```
    npm start
    ```

Enjoy :D

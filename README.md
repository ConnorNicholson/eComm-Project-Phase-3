# eCommerce Project Phase 3
This repo is for Phase 3 of my eCommerce Website, AstroTech.
AstroTech is dedicated to carrying top of the line astronomical equipment.

## Currently in this repo:
1. This README.md
2. LICENSE
3. Design Folder (contains the ERD and the Functional Diagram, both in .png format)
4. .gitignore
5. Package.json / Package-lock.json
6. proxy folder (contains proxy.js file, this is required to target the React App port and send responses to the client)
7. routes folder (contains Express Router API routes)
8. logging folder (contains HTTP requests handled through Morgan)
9. test folder (contains 4 unit tests using both mocha and chai)
10. dB_schema (contains MySQL DataBase)
11. client folder (contains React App that is currently in sync with the express server in the server folder)
12. server.js (contains the express server and makes the magic happen)

## Download Node Modules
To download the required node_modules, enter this command in your Terminal:
    ```
    npm init
    ```

## Additional Notes:

In the package.json file in the root directory, there are custom scripts that allow the developer to start both the Express server and the React App at the same time. To execute this script, open Terminal and run this line:
    ```
    npm start
    ```

Enjoy :D
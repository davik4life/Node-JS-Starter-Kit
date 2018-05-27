#Node JS Starter Kit 2018

Welcome to the node js starter, this is the complete setup you need to run a node js based project 

## Workflow Features Breakdown ##
1. Gulpfile
    - starts and restarts the express server via nodemon
    
    - creates a proxy for browser sync
    
    - sass to css
    
    - minification and concatination of javascript files
    
    - image compression 

    - EJS minfication and striping of comments, this inlcudes partials aswell.
    
    - Builds the application from start to finish, aswell as rebuilding it when assets are changed (NOT IMAGES YET)
    
    - All assets which get compiled are in the assets, then they are outputted to the public directory. The public directory is automaitcally generated through the use of gulp.

        #### Additional Notes: ####
    
    - When you have finished editing a task, save your file it will then rerun the task and the changes will be seen in the browser sync session. One task can only be performed at a time.
    
    - If you dont use browser sync the application will run on port 3000, to see the assets you will just need to reload the page 

2. EJS
    - Uses views directory

    - All partials get imported to the index.ejs
    
    - Partials gets outputted to the partials directory
    
    - This could be changed to HTML if you feel its neccessary for the project, both the ejs and ejs-paritals taks would need to be changed.

3. SASS
    - Used for styling of the page
    - There are 5 directories
        - 0-Plugins 
        - 1-Tools, contains Varialbes and fonts.
        - 2-Basics, contains core HTML elements.
        - 3-Layouts, contains partial styling e.g. footer or menu.
        - 4-Pages, contains page or partial specific layouts.
        - 5-mixins, reusable and dymanic code e.g. animations or flexbox utilities 
        - MASTER-DIR.scss, contains all sub-index imports
        - APP.scss, contains bootstrap component imports aswell as custom styling  
        - APP.scss gets piped into the gulpfile styles task, it is then compiled and convered into a css file.

4. Package.json
    - Start script -  starts the web server
    
    - Postinstall - Runs after yarn or npm has install dependencies, it builds the projects asset
    
    - When npm install is used the dependencies are fetched via the pakcage.json, it sends a request.
    
    - When yarn is used it will wither fetch the dependy or if its already been added to the yarn.lock it will be installed from the cached dependency.
    
5. Gitignore
    - Public direcotry is ignored, its then built when needed.

6. Index.js
    - Its called from the gulpfile to start the server
    
    - It contains view engine configuration, express configuration and server configuration.
    
    - Connect flash configuration
    
    - Dotenv configuration, if you decide to use dotenv package.
    
    - Body parser allows HTTP post data to be fetched
    
    - To start the express server without gulp (Not Recommended) use npm start or nodemon 


## Inital Setup Of Project ##
To set the project up on your local development enviroment follow the steps provided below


 **1. Download or Pull This Repo**
	Top of this page you can see where it says clone or download

 **2. Install Node**
	https://nodejs.org/en/

  **3. Install Yarn (Optional)**. 
   https://yarnpkg.com/en/docs/install

  **4. Download Atom(Optional)**
	 https://atom.io/

 **5. Install all the node packages**
On the root of this project run on your terminal (if you want you can do this with yarn but that's optional)

    npm install 

 **6. Update the node packages**
On the root of this project run on your terminal (if you want you can do this with yarn but that's optional)

    npm update

**7. Start the project**
To start the project run in your terminal

  	gulp [Default Command ] or npm run watch

**8. Operate Individual Task**
To operate singular tasks run

    gulp [task name e.g. styles] or npm run [name from packae.json e.g. styles]

### Wish list ###
1. Webpack to handle all JavaScript related task (HIGH PRIORITY).
2. Speed up the build task, remove unnecessary tasks such as javascript and image optimisation.
3. Add conditional tasks using enviroment variables.
4. Tunnel connection, this would enable other users on other networks to view the project.
6. Add other watch tasks e.g. deleting files or folders or unlinking of directories.
7. Error handling to prevent crashes, no plugins though trying to keep the starter kit as dependency free as possible.


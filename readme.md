a boilerplate app for a docker-compose app with an express and postgres container. The express server connects to the postgres container using sequelize

for development:
Install all node modules with the command "npm i", then use the command "npm run dev" to start the development environment. First time might take a while since docker needs to build the images from scratch.

for production:
use command "npm start"
this will install all node modules, then it will bundle the front-end, then it will build the docker images for the back-end in production mode, and then it will run the containers.

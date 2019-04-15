a boilerplate app for a docker-compose app with an express and postgres container. The express server connects to the postgres container using sequelize\\

use command "npm run dev:prep" once to build the initial images for development\\
from then on use "npm run dev" to boot up the development environment\\

for production:\\
use command "npm start"\\
this will install all node modules, then it will bundle the front-end, then it will build the docker images for the back-end in production mode, and then it will run the containers.

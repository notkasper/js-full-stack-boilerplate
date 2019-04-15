FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
# RUN npm i -g nodemon
EXPOSE 80
CMD ["node index.js"]
# pull official base image
FROM node:18

# set working directory
WORKDIR /app/url_shortner

# install app dependencies
COPY package*.json .
RUN npm install

# add app
COPY . .
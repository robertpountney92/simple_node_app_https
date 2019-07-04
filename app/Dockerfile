FROM node:11.15.0-alpine

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

USER root
# RUN add-apt-repository ppa:certbot/certbot
# RUN apt-get update
# RUN apt-get install certbot

CMD node index.js

EXPOSE 8081
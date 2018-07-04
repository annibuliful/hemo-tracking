FROM node:alpine

WORKDIR /app

RUN npm install nodemon -g

RUN npm install pm2 -g

EXPOSE 3030

CMD [ "npm","run","dev" ]
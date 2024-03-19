FROM node:16.15-alpine3.15

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run start:dev

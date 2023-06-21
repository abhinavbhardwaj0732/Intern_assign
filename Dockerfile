FROM node:16.20.0-alpine3.18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","server.js"]

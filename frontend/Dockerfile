FROM node:14.15.3-alpine

WORKDIR /usr/server

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
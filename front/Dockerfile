FROM node:12.14 as build

WORKDIR /home/app

COPY package.json .

RUN npm install

ARG REACT_APP_API

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /home/node/build /usr/share/nginx/html

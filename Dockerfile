FROM node:12-alpine

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV app_env

COPY ./package*.json ./
RUN npm install

COPY . .

EXPOSE 4000

CMD npm run start
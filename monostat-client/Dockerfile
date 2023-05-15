FROM node:16-slim

WORKDIR /usr/src/app

COPY ./package*.json .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 8080

CMD [ "pnpm", "run", "start" ]
FROM node:12-alpine
WORKDIR /SERVER
COPY package*.json /SERVER/
RUN yarn add
COPY . /SERVER/
CMD ["yarn", "start"]
EXPOSE 3000

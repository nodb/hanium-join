FROM node:12-alpine
WORKDIR /SERVER
COPY package*.json /SERVER/
RUN npm install
COPY . /SERVER/
CMD ["npm", "start"]
EXPOSE 3000

FROM node:17

# Create app directory
WORKDIR /usr/src/app

# Copy package.json to container
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# MAP PORT 8080
EXPOSE 8080

CMD [ "node", "server.js" ]

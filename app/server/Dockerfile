FROM node:20.17.0

RUN mkdir -p /app/server/node_modules && chown -R node:node /app/server

WORKDIR /app/server

COPY package*.json ./

USER node

RUN npm install

# Copy files
COPY --chown=node:node . .
RUN chmod -R 777 .

EXPOSE 8080

CMD [ "node", "app.js" ]
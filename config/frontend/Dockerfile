FROM node:20.17.0

WORKDIR /frontend

COPY package*.json ./

RUN npm install

# Copy files
COPY . .
RUN chmod -R 777 .

EXPOSE 3000

CMD ["npm", "run", "dev"]
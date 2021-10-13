FROM node:14

WORKDIR /app

COPY . .

ENV PATH /node_modules/.bin:$PATH

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
FROM node:alpine

WORKDIR /app/frontend

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT npm run dev
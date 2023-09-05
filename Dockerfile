# Use an official Node runtime as the base image
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:14-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=0 /app/dist .
EXPOSE 5000
CMD ["serve", "-s", ".", "-l", "5000"]

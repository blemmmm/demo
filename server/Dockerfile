FROM node:23
WORKDIR /server/
COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY ./ ./
EXPOSE 8080
CMD ["node", "./src/index.ts"]
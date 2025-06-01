FROM node:23
WORKDIR /client/
COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY ./ ./
CMD ["node", "./src/index.ts"]
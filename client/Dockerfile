FROM node:23 AS build-step
WORKDIR /client/
COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY ./ ./
RUN ["npm", "run", "build"]

FROM caddy:2
COPY --from=build-step /client/dist /srv
EXPOSE 80
CMD ["caddy", "file-server", "--root", "/srv"]
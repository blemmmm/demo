# demo

## vite client + docker cli

```sh
# open client dir
cd ./client/

# build the client image
sudo docker build -t demo-client .

# run the client container, visit http://localhost:3000
sudo docker run -p 3000:80 demo-client

# stop the client container
sudo docker stop demo-client-1
```

## nodejs server + docker cli

```sh
# open server dir
cd ./server/

# build the server image
sudo docker build -t demo-server .

# run the server container, visit http://localhost:8080
sudo docker run -p 8080:8080 demo-server

# stop the server container
sudo docker stop demo-server-1
```

## docker cli

```sh
# list running containers
sudo docker ps

# stop a container
sudo docker stop demo-client-1

# stop all containers
sudo docker stop $(sudo docker ps -a -q)

# remove a container
sudo docker rm demo-client-1

# remove all containers
sudo docker rm -f $(sudo docker ps -a -q)
```

## docker compose cli

```sh
# run the client and server containers
# visit http://localhost:3000 and http://localhost:8080
sudo docker compose up

# run only the client container
sudo docker compose up client

# run only the server container
sudo docker compose up server

# rebuilds the image; necessary when Dockerfile or context is modified
sudo docker compose up --build
```
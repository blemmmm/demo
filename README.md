# demo

## client

```sh
# open client dir
cd ./client/

# build the image
sudo docker build -t demo-client .

# run the container, visit http://localhost:3000
sudo docker run -p 3000:80 demo-client
```

## server

```sh
# open server dir
cd ./server/

# build the image
sudo docker build -t demo-server .

# run the container, visit http://localhost:8080
sudo docker run -p 8080:8080 demo-server
```
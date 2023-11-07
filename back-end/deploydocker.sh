#!/bin/bash

# mostrar pasta
pwd

## build

docker build -t enascentedev/back-end-api:lwg .

#push

docker push enascentedev/back-end-api:lwg

# run

docker run -p 3000:3000 enascentedev/back-end-api:lwg
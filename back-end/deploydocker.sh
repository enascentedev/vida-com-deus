#!/bin/bash
set -euo pipefail

# mostrar pasta
pwd

## build

DOCKER_REPO="${DOCKER_REPO:-enascentedev/back-end-api}"
DOCKER_TAG="${DOCKER_TAG:-lwg}"
IMAGE="$DOCKER_REPO:$DOCKER_TAG"

docker build -t "$IMAGE" .

#push

docker push "$IMAGE"

# run

docker run --rm -p 3000:3000 -e PORT=3000 "$IMAGE"
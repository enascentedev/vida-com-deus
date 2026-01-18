#!/bin/bash

# directory
pwd

# clear
if [ -d "dist" ]; then
  chmod -R u+rw dist
  rm -rfv dist
fi

# build
npm run build

# log sucesso + data/hora
if [ $? -eq 0 ]; then
  msg="Build do front-end concluido com sucesso em $(date)"
  echo "$msg"
  echo "$msg" >> build.log
fi
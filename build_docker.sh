#!/usr/bin/env bash

bin/activator dist
docker build -t atlantishomeserver/atlantis:$1 .
if [ $2 = "publish" ]; then
    docker tag atlantishomeserver/atlantis:$1 atlantishomeserver/atlantis:latest
    docker push atlantishomeserver/atlantis:$1
    docker push atlantishomeserver/atlantis:latest
fi
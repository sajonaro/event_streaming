#!/bin/bash

broker='broker:9092'
filename='seed_events.json'
topic='raw-events'

while getopts t:f:b: flag
do
    case "${flag}" in
        t) topic=${OPTARG};;
        f) filename=${OPTARG};;
        b) broker=${OPTARG};;
    esac
done

while read line; do
# reading each line
winpty docker-compose exec kafka-server bin/kafka-console-producer.sh --broker-list $broker --topic $topic $line 
done < $filename

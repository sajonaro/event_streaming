# syntax=docker/dockerfile:1
FROM openjdk:16-alpine3.13
COPY kafka_2.13-3.0.0.tgz .
RUN tar -xzf kafka_2.13-3.0.0.tgz  
RUN apk update && apk add bash && apk add tree
WORKDIR /kafka_2.13-3.0.0

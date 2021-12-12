
#to build 
> docker-compose up -d

#to re-build 
> docker-compose build 

#check server status
>docker-compose logs kafka-server | grep "succeded"

#open UI
>http://localhost:9000

#list topics
>docker-compose exec kafka-server bin/kafka-topics.sh --list --bootstrap-server broker:9092
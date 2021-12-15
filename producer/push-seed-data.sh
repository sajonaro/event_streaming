while read line; do
winpty docker-compose exec node-client node publish-event.js --broker broker:9092 --topic raw-event --message $line
done < '../events/seed_events.json'
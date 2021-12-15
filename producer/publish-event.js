const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const kafka = require("kafka-node");

console.log(`Kafka service URL is ${argv.broker}`);
console.log(`Topic is ${argv.topic}`);
console.log(`Message is ${argv.message}`);

try {
    HighLevelProducer = kafka.HighLevelProducer;
    client = new kafka.KafkaClient({ kafkaHost: argv.broker });
    producer = new HighLevelProducer(client);
    producer.on("ready", () => {
      producer.send([{ topic: argv.topic, messages: argv.message }], function (err, data) {console.log(data)})});
} catch (err) {
  console.log(
    `error ${err} occured while pushing ${argv.message} to topic -  ${argv.topic} `
  );
}

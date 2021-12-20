FROM  jboss/immutant
WORKDIR /app
COPY /app .
CMD lein uberjar
ENTRYPOINT [ "java", "-jar", "target/standalone.jar" ]
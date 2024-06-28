FROM mongo:latest

RUN apt-get update && apt-get install -y sudo

COPY ["./mongod.conf", "/etc/mongod.conf"]
COPY ["./mongo-init.js","/docker-entrypoint-initdb.d/"]

RUN chmod 755 /docker-entrypoint-initdb.d/mongo-init.js

CMD ["mongod", "--config", "/etc/mongod.conf"]

FROM mongo:latest

RUN apt-get update && apt-get install -y sudo

COPY ["./mongod.conf", "/etc/mongod.conf"]
COPY ["./mongo-init.js","/docker-entrypoint-initdb.d/"]
COPY ["./export-data.sh", "/usr/local/bin/export-data.sh"]

RUN chmod 755 /docker-entrypoint-initdb.d/mongo-init.js
RUN chmod +x /usr/local/bin/export-data.sh

CMD ["mongod", "--config", "/etc/mongod.conf"]

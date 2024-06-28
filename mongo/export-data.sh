#!/bin/bash

# Variables from environment
MONGO_ADMIN_USERNAME=${MONGO_INITDB_ROOT_USERNAME}
MONGO_ADMIN_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD}

# Export data
mongoexport --collection=dataLakeNoSQL2 --db=turismoBolivia --jsonArray --out=/data/bigdata/dataLakeNoSQL2.json -u ${MONGO_ADMIN_USERNAME} -p ${MONGO_ADMIN_PASSWORD} --authenticationDatabase admin
mongoexport --collection=dataLakeNoSQL --db=turismoBolivia --jsonArray --out=/data/bigdata/dataLakeNoSQL.json -u ${MONGO_ADMIN_USERNAME} -p ${MONGO_ADMIN_PASSWORD} --authenticationDatabase admin

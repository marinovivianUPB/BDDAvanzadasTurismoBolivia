STOP SLAVE;
CHANGE MASTER TO MASTER_HOST='mysql_master', MASTER_USER='repl_user', MASTER_PASSWORD='repl_password', MASTER_PORT=3306, MASTER_LOG_FILE='mysql-bin.000001', MASTER_LOG_POS=1;
START SLAVE;
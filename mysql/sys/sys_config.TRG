TYPE=TRIGGERS
triggers='CREATE DEFINER=`mysql.sys`@`localhost` TRIGGER sys_config_insert_set_user BEFORE INSERT on sys_config FOR EACH ROW BEGIN IF @sys.ignore_sys_config_triggers != true AND NEW.set_by IS NULL THEN SET NEW.set_by = USER(); END IF; END'
sql_modes=0
definers='mysql.sys@localhost'
client_cs_names='utf8'
connection_cl_names='utf8_general_ci'
db_cl_names='utf8_general_ci'
created=164857313358

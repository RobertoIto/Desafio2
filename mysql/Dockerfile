FROM mysql:5.7

ENV MYSQL_ALLOW_EMPTY_PASSWORD=true
ENV MYSQL_USER=rito
ENV MYSQL_PASSWORD=rito
ENV MYSQL_DATABASE=desafio2
ENV MYSQL_ROOT_PASSWORD=root
ENV TZ=Brazil/East

COPY ./schema.sql /docker-entrypoint-initdb.d/

VOLUME [ "mysql:/var/lib/mysql" ]


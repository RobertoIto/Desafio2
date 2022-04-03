CREATE DATABASE IF NOT EXISTS desafio2;
USE desafio2;

create table desafio2.pessoa(
    id int not null auto_increment, 
    nome varchar(255) not null, 
    data datetime not null default now(), 
    primary key(id)
);

INSERT INTO pessoa(nome) values('Roberto');
INSERT INTO pessoa(nome) values('Adriana');
commit;
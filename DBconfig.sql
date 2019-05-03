CREATE SCHEMA IF NOT EXISTS `dados191n`  ;
USE `dados191n` ;

CREATE  TABLE IF NOT EXISTS `dados191n`.`gaiaUsuarios` (
  `_id` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(50) NOT NULL ,
  `user` VARCHAR(20) NOT NULL UNIQUE,
  `senha` VARCHAR(200) NOT NULL ,
  `email` VARCHAR(50) NOT NULL,
  `admin` BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (`_id`) )
ENGINE = InnoDB;

CREATE  TABLE IF NOT EXISTS `dados191n`.`gaiaCardapios` (
  `_id` INT NOT NULL AUTO_INCREMENT ,
  `pratoPrincipal` VARCHAR(30) NOT NULL ,
  `opcao1` VARCHAR(30) NOT NULL ,
  `opcao2` VARCHAR(30) NOT NULL ,
  `guarnicao1` VARCHAR(30) NOT NULL,
  `guarnicao2` VARCHAR(30) NOT NULL,
  `salada` VARCHAR(30) NOT NULL,
  `sobremesa` VARCHAR(30) NOT NULL,
  `data` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`_id`) )
ENGINE = InnoDB;

CREATE  TABLE IF NOT EXISTS `dados191n`.`gaiaTrocas` (
  `_id` INT NOT NULL AUTO_INCREMENT ,
  `pratoPrincipal` VARCHAR(30) NOT NULL ,
  `cardapio` INT NOT NULL ,
  `user` INT NOT NULL,
  PRIMARY KEY (`_id`), 
  CONSTRAINT `fk_trocas_cd`
    FOREIGN KEY (`cardapio` )
    REFERENCES `dados191n`.`gaiaCardapios` (`_id` ),
  CONSTRAINT `fk_trocas_us`
    FOREIGN KEY (`user` )
    REFERENCES `dados191n`.`gaiaUsuarios` (`_id` ))
ENGINE = InnoDB;

CREATE  TABLE IF NOT EXISTS `dados191n`.`gaiaFeedbacks` (
  `_id` INT NOT NULL AUTO_INCREMENT ,
  `user` INT NOT NULL ,
  `tipo` VARCHAR(10) NOT NULL ,
  `mensagem` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`_id`), 
  CONSTRAINT `fk_feedbacks_us`
    FOREIGN KEY (`user` )
    REFERENCES `dados191n`.`gaiaUsuarios` (`_id` ))
ENGINE = InnoDB;


insert into dados191n.gaiaUsuarios 
 (user, nome, senha, email, admin)
values('neto123','Neto Santos', 'bf7cd4b7644785e3ee11529a52669fa6', 'neto@neto@gneto.com', true),
      ('neto321','Neto Almeida', 'bf7cd4b7644785e3ee11529a52669fa6', 'neto34@neto@gneto.com', null);

insert into dados191n.gaiaCardapios
 (pratoPrincipal, opcao1, opcao2, guarnicao1, guarnicao2, salada, sobremesa, data)
values('Bacon','Omelete',  'Bife', 'Batata Frita','Ameixa da jamaica', 'Alface e tomate','Maça', '2019-05-06T03:00:00.000Z' ),
      ('Bacon','Omelete',  'Bife', 'Batata Frita','Ameixa da jamaica', 'Alface e tomate','Maça', '2019-05-07T03:00:00.000Z' ),
      ('Bacon','Omelete',  'Bife', 'Batata Frita','Ameixa da jamaica', 'Alface e tomate','Maça', '2019-05-08T03:00:00.000Z' ),
      ('Bacon','Omelete',  'Bife', 'Batata Frita','Ameixa da jamaica', 'Alface e tomate','Maça', '2019-05-09T03:00:00.000Z' ),
      ('Bacon','Omelete',  'Bife', 'Batata Frita','Ameixa da jamaica', 'Alface e tomate','Maça', '2019-05-10T03:00:00.000Z' );

insert into dados191n.gaiaTrocas
    (pratoPrincipal, cardapio, user)
    values('Bife',3,1),('desistiu',1,1)

UPDATE gaiaTrocas SET pratoPrincipal = 'Bife' WHERE _id = 4;
      
select * from dados191n.gaiaTrocas;
drop table gaiaTrocas;
update gaiaUsuarios set admin = true where _id = 3;
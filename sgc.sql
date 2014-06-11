-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.27 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL version:             7.0.0.4053
-- Date/time:                    2014-06-10 16:39:46
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;

-- Dumping database structure for sac
DROP DATABASE IF EXISTS `sac`;
CREATE DATABASE IF NOT EXISTS `sac` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `sac`;


-- Dumping structure for procedure sac.ABERTOS
DROP PROCEDURE IF EXISTS `ABERTOS`;
DELIMITER //
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `ABERTOS`()
BEGIN
select id, USUARIO, EMAIL, RAMAL, SERVICO, GRUPO, SLA from v_union where STA = 1 ORDER BY IDSLA;
END//
DELIMITER ;


-- Dumping structure for table sac.ab_chamado
DROP TABLE IF EXISTS `ab_chamado`;
CREATE TABLE IF NOT EXISTS `ab_chamado` (
  `Id_chamado` int(11) NOT NULL AUTO_INCREMENT,
  `Id_funcionario` int(11) NOT NULL,
  `Id_usuario` int(11) NOT NULL,
  `Id_servico` int(11) NOT NULL,
  `Id_grupo` int(11) DEFAULT NULL,
  `descricao_chamado` varchar(200) DEFAULT NULL,
  `data_abrt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `data_finlz` timestamp NULL DEFAULT NULL,
  `datasusini` timestamp NULL DEFAULT NULL,
  `datasusfim` timestamp NULL DEFAULT NULL,
  `sta` int(11) DEFAULT '1',
  `detalhe_causa` varchar(100) DEFAULT NULL,
  `solucao_resposta` varchar(100) DEFAULT NULL,
  `Id_tecsolucionador` int(11) DEFAULT NULL,
  UNIQUE KEY `Id_chamado` (`Id_chamado`),
  KEY `func_fk` (`Id_funcionario`),
  KEY `usu_fk` (`Id_usuario`),
  KEY `serv_fk` (`Id_servico`),
  KEY `GRUP_FK` (`Id_grupo`),
  KEY `sta` (`sta`),
  CONSTRAINT `func_fk` FOREIGN KEY (`Id_funcionario`) REFERENCES `funcionario` (`Id_funcionario`),
  CONSTRAINT `GRUP_FK` FOREIGN KEY (`Id_grupo`) REFERENCES `grupo` (`Id_grupo`),
  CONSTRAINT `serv_fk` FOREIGN KEY (`Id_servico`) REFERENCES `servico` (`Id_servico`),
  CONSTRAINT `STA_fk` FOREIGN KEY (`sta`) REFERENCES `estado_chamado` (`id_sta`),
  CONSTRAINT `usu_fk` FOREIGN KEY (`Id_usuario`) REFERENCES `funcionario` (`Id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- Dumping data for table sac.ab_chamado: ~17 rows (approximately)
DELETE FROM `ab_chamado`;
/*!40000 ALTER TABLE `ab_chamado` DISABLE KEYS */;
INSERT INTO `ab_chamado` (`Id_chamado`, `Id_funcionario`, `Id_usuario`, `Id_servico`, `Id_grupo`, `descricao_chamado`, `data_abrt`, `data_finlz`, `datasusini`, `datasusfim`, `sta`, `detalhe_causa`, `solucao_resposta`, `Id_tecsolucionador`) VALUES
	(1, 1, 2, 2, 1, 'Usuário solicita a configuração do perfil no winmdows', '2014-05-10 00:00:00', '2014-05-29 00:00:00', NULL, NULL, 2, 'teste de data', 'testando', 1),
	(2, 1, 3, 1, 2, 'Usuário não recebe nem envia e-mails', '2014-05-12 00:00:00', '2014-05-12 00:00:00', NULL, NULL, 2, 'Servidor desconfigurado no cliente de e-mail', 'O servidor de e-mail foi configurado no cliente outlook.', NULL),
	(3, 1, 3, 1, 1, 'teste', '2014-05-14 19:54:32', '2014-05-14 20:00:00', NULL, NULL, 2, 'teste 4', 'teste 4', 1),
	(4, 4, 3, 1, 2, 'teste de query', '2014-05-21 08:08:51', '2014-05-29 00:00:00', NULL, NULL, 2, '', '', 1),
	(7, 1, 3, 3, 2, 'teste', '2014-05-25 08:03:22', '2014-05-25 08:03:22', NULL, NULL, 1, ' ', ' ', 1),
	(8, 1, 3, 3, 1, 'teste2', '2014-05-25 08:06:41', '2014-05-25 08:06:41', NULL, NULL, 1, ' ', ' ', 1),
	(13, 1, 2, 2, 3, 'teste', '2014-05-25 09:57:03', '2014-06-04 20:44:34', NULL, NULL, 3, '', '', 1),
	(15, 1, 2, 2, 1, 'Teste 5				', '2014-05-25 10:05:18', '2014-06-04 20:24:04', NULL, NULL, 1, '', '', 1),
	(16, 1, 2, 2, 1, 'Teste 5				', '2014-05-25 10:06:30', '2014-05-25 10:06:30', NULL, NULL, 1, '', '', 1),
	(17, 1, 2, 3, 1, 'Instalar office com visio			', '2014-05-25 10:07:14', '2014-05-25 10:07:14', NULL, NULL, 1, '', '', 1),
	(18, 1, 4, 3, 1, 'Instalar o dreamweaver					', '2014-05-25 16:18:40', '2014-05-25 16:18:40', NULL, NULL, 3, '', '', 1),
	(19, 1, 2, 3, 1, 'instalar office.					', '2014-05-29 08:39:18', NULL, NULL, NULL, 2, 'era necessario instalar o access.', 'foi instalado com sucesso.', 1),
	(20, 1, 4, 1, 2, 'Servidor de e-mail fora do ar	\r\nencaminhar para o terceiro nível...', '2014-05-29 14:36:48', '2014-06-03 20:28:34', NULL, NULL, 2, '', '', 1),
	(21, 1, 2, 1, 2, 'Levantar servidor web.					', '2014-05-29 14:45:31', '2014-06-03 20:20:05', NULL, NULL, 4, '', '', 1),
	(22, 1, 2, 3, 1, 'teste					', '2014-06-03 19:41:27', '2014-06-03 19:43:14', NULL, NULL, 2, 'teste', 'teste', 1),
	(23, 1, 2, 1, 3, 'TESTE DE FORMULARIO					', '2014-06-04 20:52:49', '2014-06-04 20:53:32', NULL, NULL, 3, '', '', 5),
	(24, 1, 2, 1, 3, 'TESTE DE LAYOUT. TÁ FICANDO SHOW...			', '2014-06-06 19:13:36', '2014-06-06 19:29:17', NULL, NULL, 1, '', '', 1);
/*!40000 ALTER TABLE `ab_chamado` ENABLE KEYS */;


-- Dumping structure for table sac.estado_chamado
DROP TABLE IF EXISTS `estado_chamado`;
CREATE TABLE IF NOT EXISTS `estado_chamado` (
  `id_sta` int(11) NOT NULL AUTO_INCREMENT,
  `nome_sta` varchar(40) NOT NULL,
  PRIMARY KEY (`id_sta`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table sac.estado_chamado: ~4 rows (approximately)
DELETE FROM `estado_chamado`;
/*!40000 ALTER TABLE `estado_chamado` DISABLE KEYS */;
INSERT INTO `estado_chamado` (`id_sta`, `nome_sta`) VALUES
	(1, 'ABERTO'),
	(2, 'FECHADO'),
	(3, 'SUSPENSO'),
	(4, 'CANCELADO');
/*!40000 ALTER TABLE `estado_chamado` ENABLE KEYS */;


-- Dumping structure for table sac.funcionario
DROP TABLE IF EXISTS `funcionario`;
CREATE TABLE IF NOT EXISTS `funcionario` (
  `Id_funcionario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(40) NOT NULL,
  `telefone` varchar(40) DEFAULT NULL,
  `ramal` char(4) DEFAULT NULL,
  `setor` varchar(30) DEFAULT NULL,
  `login` varchar(30) DEFAULT NULL,
  `senha` varchar(30) DEFAULT NULL,
  `perfil_acesso` int(1) DEFAULT NULL,
  PRIMARY KEY (`Id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Dumping data for table sac.funcionario: ~7 rows (approximately)
DELETE FROM `funcionario`;
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
INSERT INTO `funcionario` (`Id_funcionario`, `nome`, `email`, `telefone`, `ramal`, `setor`, `login`, `senha`, `perfil_acesso`) VALUES
	(1, 'Alexandre da Silva', 'asilferreira@gmail.com', '021-33441-2122', '2122', 'ARPROJ', 'asilferreira', 'abc123', 1),
	(2, 'Matheus Bandeira', 'mbandeira@gmail.com', '021-33441-2544', '2544', 'ARJUR', 'mbandeira', 'abc123', 0),
	(3, 'Jeison Maia', 'jmaia@gmail.com', '021-33441-2545', '2545', 'ARJUR', 'jmaia', 'abc123', 0),
	(4, 'Renata Sant\'Anna', 'rsantanna@gmail.com', '021-2244-2545', '2545', 'ASPLA', 'rsantanna', 'abc123', 0),
	(5, 'Usuario N3', 'N3@gmail.com', '(21)3333-4444', '3434', 'ASTI', 'N3', 'abc123', NULL),
	(6, 'Usuario N1', 'UN1@gmail.com', '(21)3334-4444', '4343', 'ARTI', 'N1', 'abc123', NULL),
	(7, 'UsuarioN2', 'UN2@gmail.com', '(21)3333-4444', '4444', 'ASTI', 'n2', 'abc123', NULL);
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;


-- Dumping structure for table sac.func_grup
DROP TABLE IF EXISTS `func_grup`;
CREATE TABLE IF NOT EXISTS `func_grup` (
  `id_funcionario` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  KEY `funcG1_fk` (`id_funcionario`),
  KEY `funcG2_fk` (`id_grupo`),
  CONSTRAINT `funcG1_fk` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionario` (`Id_funcionario`),
  CONSTRAINT `funcG2_fk` FOREIGN KEY (`id_grupo`) REFERENCES `grupo` (`Id_grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table sac.func_grup: ~9 rows (approximately)
DELETE FROM `func_grup`;
/*!40000 ALTER TABLE `func_grup` DISABLE KEYS */;
INSERT INTO `func_grup` (`id_funcionario`, `id_grupo`) VALUES
	(1, 1),
	(2, 4),
	(3, 4),
	(4, 4),
	(1, 2),
	(5, 3),
	(6, 1),
	(7, 2),
	(1, 3);
/*!40000 ALTER TABLE `func_grup` ENABLE KEYS */;


-- Dumping structure for table sac.grupo
DROP TABLE IF EXISTS `grupo`;
CREATE TABLE IF NOT EXISTS `grupo` (
  `Id_grupo` int(11) NOT NULL AUTO_INCREMENT,
  `nome_grupo` varchar(50) NOT NULL,
  `sigla` char(10) DEFAULT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id_grupo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table sac.grupo: ~4 rows (approximately)
DELETE FROM `grupo`;
/*!40000 ALTER TABLE `grupo` DISABLE KEYS */;
INSERT INTO `grupo` (`Id_grupo`, `nome_grupo`, `sigla`, `descricao`) VALUES
	(1, '1 Nível', 'N1', 'Grupo de primeiro atendimento'),
	(2, '2 Nível', 'N2', 'Grupo de atendimento local'),
	(3, '3 Nível', 'N3', 'Nível de especialistas'),
	(4, 'Usuário', 'USER', 'Cadastro default');
/*!40000 ALTER TABLE `grupo` ENABLE KEYS */;


-- Dumping structure for procedure sac.LISTAPORSOLUCAO
DROP PROCEDURE IF EXISTS `LISTAPORSOLUCAO`;
DELIMITER //
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `LISTAPORSOLUCAO`(IN `tecnico` INT)
BEGIN
select ID, FUNCIONARIO, SERVICO, GRUPO, DESCRICAO, CAUSA, SOLUCAO from v_union where tec = tecnico AND STA = 2;
END//
DELIMITER ;


-- Dumping structure for procedure sac.LISTATOTAL
DROP PROCEDURE IF EXISTS `LISTATOTAL`;
DELIMITER //
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `LISTATOTAL`(IN `statuss` int)
begin
select grupo ,count(*) as total 
from v_union 
where sta = statuss 
group by id_grupo;
end//
DELIMITER ;


-- Dumping structure for procedure sac.PDATA
DROP PROCEDURE IF EXISTS `PDATA`;
DELIMITER //
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `pdata`()
BEGIN
SELECT ID, USUARIO, EMAIL, RAMAL, SERVICO, ESTADO, TIMEDIFF(FECHAMENTO, ABERTURA) DIFERENCA 
FROM v_union 
WHERE STA IN(1,3)
ORDER BY DIFERENCA DESC;
END//
DELIMITER ;


-- Dumping structure for table sac.servico
DROP TABLE IF EXISTS `servico`;
CREATE TABLE IF NOT EXISTS `servico` (
  `Id_servico` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` char(10) NOT NULL,
  `nome_serv` varchar(40) NOT NULL,
  `idsla` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id_servico`),
  KEY `FK_servico_sla` (`idsla`),
  CONSTRAINT `FK_servico_sla` FOREIGN KEY (`idsla`) REFERENCES `sla` (`idsla`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table sac.servico: ~3 rows (approximately)
DELETE FROM `servico`;
/*!40000 ALTER TABLE `servico` DISABLE KEYS */;
INSERT INTO `servico` (`Id_servico`, `tipo`, `nome_serv`, `idsla`) VALUES
	(1, 'Incidente', 'E-mail.fora', 1),
	(2, 'Requisição', 'Configurar.perfil de usuário', 2),
	(3, 'Requisição', 'Instalar.Programas', 3);
/*!40000 ALTER TABLE `servico` ENABLE KEYS */;


-- Dumping structure for table sac.sla
DROP TABLE IF EXISTS `sla`;
CREATE TABLE IF NOT EXISTS `sla` (
  `idsla` int(11) NOT NULL AUTO_INCREMENT,
  `nomeSla` varchar(30) NOT NULL,
  PRIMARY KEY (`idsla`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table sac.sla: ~3 rows (approximately)
DELETE FROM `sla`;
/*!40000 ALTER TABLE `sla` DISABLE KEYS */;
INSERT INTO `sla` (`idsla`, `nomeSla`) VALUES
	(1, 'ALTA'),
	(2, 'MÉDIA'),
	(3, 'BAIXA');
/*!40000 ALTER TABLE `sla` ENABLE KEYS */;


-- Dumping structure for view sac.v_func
DROP VIEW IF EXISTS `v_func`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `v_func` (
	`id_chamado` INT(11) NOT NULL DEFAULT '0',
	`Nome_Funcionario` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`Servico` VARCHAR(40) NOT NULL COLLATE 'utf8_general_ci',
	`tipo` CHAR(10) NOT NULL COLLATE 'utf8_general_ci',
	`SLA` VARCHAR(30) NOT NULL COLLATE 'utf8_general_ci',
	`idsla` INT(11) NOT NULL DEFAULT '0',
	`Id_grupo` INT(11) NOT NULL DEFAULT '0',
	`nome_grupo` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`descricao_chamado` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`data_abrt` TIMESTAMP NULL DEFAULT NULL,
	`data_finlz` TIMESTAMP NULL DEFAULT NULL,
	`sta` INT(11) NULL DEFAULT '1',
	`nome_sta` VARCHAR(40) NOT NULL COLLATE 'utf8_general_ci',
	`detalhe_causa` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`solucao_resposta` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`Id_tecsolucionador` INT(11) NULL DEFAULT NULL
) ENGINE=MyISAM;


-- Dumping structure for view sac.v_grupo
DROP VIEW IF EXISTS `v_grupo`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `v_grupo` (
	`Id_funcionario` INT(11) NOT NULL DEFAULT '0',
	`Nome_Funcionario` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`nome_grupo` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci'
) ENGINE=MyISAM;


-- Dumping structure for view sac.v_union
DROP VIEW IF EXISTS `v_union`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `v_union` (
	`Id` INT(11) NOT NULL DEFAULT '0',
	`Funcionario` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`Usuario` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`email` VARCHAR(40) NOT NULL COLLATE 'utf8_general_ci',
	`telefone` VARCHAR(40) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`ramal` CHAR(4) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`Servico` VARCHAR(40) NOT NULL COLLATE 'utf8_general_ci',
	`tipo` CHAR(10) NOT NULL COLLATE 'utf8_general_ci',
	`SLA` VARCHAR(30) NOT NULL COLLATE 'utf8_general_ci',
	`idsla` INT(11) NOT NULL DEFAULT '0',
	`Grupo` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`Id_grupo` INT(11) NOT NULL DEFAULT '0',
	`Descricao` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`abertura` TIMESTAMP NULL DEFAULT NULL,
	`fechamento` TIMESTAMP NULL DEFAULT NULL,
	`Estado` VARCHAR(40) NOT NULL COLLATE 'utf8_general_ci',
	`sta` INT(11) NULL DEFAULT '1',
	`causa` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`solucao` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`tec` INT(11) NULL DEFAULT NULL
) ENGINE=MyISAM;


-- Dumping structure for view sac.v_usu
DROP VIEW IF EXISTS `v_usu`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `v_usu` (
	`id_chamado` INT(11) NOT NULL DEFAULT '0',
	`Nome_Usuario` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
	`email` VARCHAR(40) NOT NULL COLLATE 'utf8_general_ci',
	`telefone` VARCHAR(40) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`ramal` CHAR(4) NULL DEFAULT NULL COLLATE 'utf8_general_ci'
) ENGINE=MyISAM;


-- Dumping structure for view sac.v_func
DROP VIEW IF EXISTS `v_func`;
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `v_func`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `v_func` AS select 
		a.id_chamado,
		f.nome as Nome_Funcionario,
		s.nome_serv as Servico,
		s.tipo as tipo,
		sl.nomeSla as SLA,
		sl.idsla,
		g.Id_grupo,
		g.nome_grupo,
		a.descricao_chamado,
		a.data_abrt,
		a.data_finlz,
		a.sta,
		ec.nome_sta,
		a.detalhe_causa,
		a.solucao_resposta,
		a.Id_tecsolucionador
from		ab_chamado a 
inner join	funcionario f 
on a.Id_funcionario = f.Id_funcionario
inner join servico s 
on a.Id_servico = s.Id_servico
inner join sla sl
on sl.idsla = s.idsla
inner join grupo g
on a.Id_grupo = g.Id_grupo 
inner join estado_chamado ec
on ec.id_sta = a.sta ;


-- Dumping structure for view sac.v_grupo
DROP VIEW IF EXISTS `v_grupo`;
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `v_grupo`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `v_grupo` AS select f.Id_funcionario, f.nome as Nome_Funcionario, gr.nome_grupo from funcionario f inner join func_grup g on f.Id_funcionario = g.id_funcionario inner join grupo gr on g.id_grupo=gr.Id_grupo ;


-- Dumping structure for view sac.v_union
DROP VIEW IF EXISTS `v_union`;
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `v_union`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `v_union` AS select
		v1.id_chamado as Id,
	   v1.Nome_Funcionario as Funcionario,
	   v2.Nome_Usuario as Usuario,
	   v2.email,
	   v2.telefone,
	   v2.ramal,
		v1.Servico as Servico,
		v1.tipo,
		v1.SLA,
		v1.idsla,
		v1.nome_grupo as Grupo,
		v1.Id_grupo,
		v1.descricao_chamado as Descricao,
		v1.data_abrt as abertura,
		v1.data_finlz as fechamento,
		v1.nome_sta as Estado,
		v1.sta,
		v1.detalhe_causa as causa,
		v1.solucao_resposta as solucao,
		v1.Id_tecsolucionador as tec
from v_func v1 inner join v_usu v2
on v1.id_chamado = v2.id_chamado ;


-- Dumping structure for view sac.v_usu
DROP VIEW IF EXISTS `v_usu`;
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `v_usu`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `v_usu` AS select 
		a.id_chamado,
		f.nome as Nome_Usuario,
		f.email,
		f.telefone,
		f.ramal
from		ab_chamado a 
inner join	funcionario f 
on a.Id_usuario = f.Id_funcionario ;
/*!40014 SET FOREIGN_KEY_CHECKS=1 */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

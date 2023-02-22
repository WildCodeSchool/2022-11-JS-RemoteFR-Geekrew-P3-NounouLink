-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: baby_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `crenaux`
--

DROP TABLE IF EXISTS `crenaux`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crenaux` (
  `idcrenaux` int NOT NULL AUTO_INCREMENT,
  `libelle_jour` enum('Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche') DEFAULT NULL,
  `heure_debut` datetime DEFAULT NULL,
  `heure_fin` datetime DEFAULT NULL,
  `nbre_place` int DEFAULT NULL,
  `nounous_idnounou` int NOT NULL,
  `nounous_users_iduser` int NOT NULL,
  PRIMARY KEY (`idcrenaux`,`nounous_idnounou`,`nounous_users_iduser`),
  KEY `fk_crenaux_nounous1_idx` (`nounous_idnounou`,`nounous_users_iduser`),
  CONSTRAINT `fk_crenaux_nounous1` FOREIGN KEY (`nounous_idnounou`, `nounous_users_iduser`) REFERENCES `nounous` (`idnounou`, `users_iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crenaux`
--

LOCK TABLES `crenaux` WRITE;
/*!40000 ALTER TABLE `crenaux` DISABLE KEYS */;
/*!40000 ALTER TABLE `crenaux` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enfants`
--

DROP TABLE IF EXISTS `enfants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enfants` (
  `idenfants` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `canwalk` tinyint DEFAULT NULL,
  `allergie` varchar(255) DEFAULT NULL,
  `assurance` varchar(45) DEFAULT NULL,
  `carnetsante` tinyint DEFAULT NULL,
  PRIMARY KEY (`idenfants`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enfants`
--

LOCK TABLES `enfants` WRITE;
/*!40000 ALTER TABLE `enfants` DISABLE KEYS */;
INSERT INTO `enfants` VALUES (1,'jean','valjean','2019-12-15',1,'noisette','222222',1);
/*!40000 ALTER TABLE `enfants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoris`
--

DROP TABLE IF EXISTS `favoris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoris` (
  `idfavoris` int NOT NULL AUTO_INCREMENT,
  `parents_idparent` int NOT NULL,
  `parents_users_iduser` int NOT NULL,
  `nounous_idnounou` int NOT NULL,
  `nounous_users_iduser` int NOT NULL,
  PRIMARY KEY (`idfavoris`,`parents_idparent`,`parents_users_iduser`,`nounous_idnounou`,`nounous_users_iduser`),
  KEY `fk_favoris_parents1_idx` (`parents_idparent`,`parents_users_iduser`),
  KEY `fk_favoris_nounous1_idx` (`nounous_idnounou`,`nounous_users_iduser`),
  CONSTRAINT `fk_favoris_nounous1` FOREIGN KEY (`nounous_idnounou`, `nounous_users_iduser`) REFERENCES `nounous` (`idnounou`, `users_iduser`),
  CONSTRAINT `fk_favoris_parents1` FOREIGN KEY (`parents_idparent`, `parents_users_iduser`) REFERENCES `parents` (`idparent`, `users_iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoris`
--

LOCK TABLES `favoris` WRITE;
/*!40000 ALTER TABLE `favoris` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoris` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nounous`
--

DROP TABLE IF EXISTS `nounous`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nounous` (
  `idnounou` int NOT NULL AUTO_INCREMENT,
  `users_iduser` int NOT NULL,
  `note` int DEFAULT NULL,
  `photos` varchar(255) DEFAULT NULL,
  `tarif_horaire` int DEFAULT NULL,
  `nom_annonce` varchar(150) DEFAULT NULL,
  `adresse_garde` varchar(255) DEFAULT NULL,
  `photo_profil` varchar(255) DEFAULT NULL,
  `presentation` text,
  `psc1` tinyint DEFAULT NULL,
  `pedagogie` tinyint DEFAULT NULL,
  `niveau_diplome` varchar(45) DEFAULT NULL,
  `experience` int DEFAULT NULL,
  `hygiene` tinyint DEFAULT NULL,
  `heures_sup` int DEFAULT NULL,
  `tarif_majore` int DEFAULT NULL,
  `prix_kilometre` int DEFAULT NULL,
  `tarif_repas` int DEFAULT NULL,
  `assurance_habitation` varchar(255) DEFAULT NULL,
  `assurance_auto` varchar(255) DEFAULT NULL,
  `piece_identite` varchar(255) DEFAULT NULL,
  `attestation_secu` varchar(255) DEFAULT NULL,
  `justificatif_domicile` varchar(255) DEFAULT NULL,
  `diplome` varchar(255) DEFAULT NULL,
  `numero_aggrement` int DEFAULT NULL,
  `date_aggrement` date DEFAULT NULL,
  `places_maxi` int DEFAULT NULL,
  PRIMARY KEY (`idnounou`,`users_iduser`),
  KEY `fk_nounous_users1_idx` (`users_iduser`),
  CONSTRAINT `fk_nounous_users1` FOREIGN KEY (`users_iduser`) REFERENCES `users` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nounous`
--

LOCK TABLES `nounous` WRITE;
/*!40000 ALTER TABLE `nounous` DISABLE KEYS */;
INSERT INTO `nounous` VALUES (1,2,5,'ddd',25,'the best','rue victoire','oooo','je suis la meilleure',1,1,'laclasse',50,0,15,25,15,5,'ssss','222','22222','2222','22222','2222',222222,'1975-12-01',4);
/*!40000 ALTER TABLE `nounous` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nounous_has_services`
--

DROP TABLE IF EXISTS `nounous_has_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nounous_has_services` (
  `nounous_idnounou` int NOT NULL,
  `nounous_users_iduser` int NOT NULL,
  `services_idservices` int NOT NULL,
  PRIMARY KEY (`nounous_idnounou`,`nounous_users_iduser`,`services_idservices`),
  KEY `fk_nounous_has_services_services1_idx` (`services_idservices`),
  KEY `fk_nounous_has_services_nounous1_idx` (`nounous_idnounou`,`nounous_users_iduser`),
  CONSTRAINT `fk_nounous_has_services_nounous1` FOREIGN KEY (`nounous_idnounou`, `nounous_users_iduser`) REFERENCES `nounous` (`idnounou`, `users_iduser`),
  CONSTRAINT `fk_nounous_has_services_services1` FOREIGN KEY (`services_idservices`) REFERENCES `services` (`idservices`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nounous_has_services`
--

LOCK TABLES `nounous_has_services` WRITE;
/*!40000 ALTER TABLE `nounous_has_services` DISABLE KEYS */;
/*!40000 ALTER TABLE `nounous_has_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parent_has_enfants`
--

DROP TABLE IF EXISTS `parent_has_enfants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parent_has_enfants` (
  `parent_idparent` int NOT NULL,
  `enfants_idenfants` int NOT NULL,
  PRIMARY KEY (`parent_idparent`,`enfants_idenfants`),
  KEY `fk_parent_has_enfants_enfants1_idx` (`enfants_idenfants`),
  KEY `fk_parent_has_enfants_parent_idx` (`parent_idparent`),
  CONSTRAINT `fk_parent_has_enfants_enfants1` FOREIGN KEY (`enfants_idenfants`) REFERENCES `enfants` (`idenfants`),
  CONSTRAINT `fk_parent_has_enfants_parent` FOREIGN KEY (`parent_idparent`) REFERENCES `parents` (`idparent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parent_has_enfants`
--

LOCK TABLES `parent_has_enfants` WRITE;
/*!40000 ALTER TABLE `parent_has_enfants` DISABLE KEYS */;
/*!40000 ALTER TABLE `parent_has_enfants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parents`
--

DROP TABLE IF EXISTS `parents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parents` (
  `idparent` int NOT NULL AUTO_INCREMENT,
  `numcaf` varchar(45) DEFAULT NULL,
  `autsortie` varchar(45) DEFAULT NULL,
  `droitimage` varchar(45) DEFAULT NULL,
  `users_iduser` int NOT NULL,
  PRIMARY KEY (`idparent`,`users_iduser`),
  KEY `fk_parent_users1_idx` (`users_iduser`),
  CONSTRAINT `fk_parent_users1` FOREIGN KEY (`users_iduser`) REFERENCES `users` (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parents`
--

LOCK TABLES `parents` WRITE;
/*!40000 ALTER TABLE `parents` DISABLE KEYS */;
/*!40000 ALTER TABLE `parents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `parents_idparent` int NOT NULL,
  `parents_users_iduser` int NOT NULL,
  `nounous_idnounou` int NOT NULL,
  `nounous_users_iduser` int NOT NULL,
  `reservationok` tinyint DEFAULT NULL,
  `startdate` datetime DEFAULT NULL,
  `enddate` datetime DEFAULT NULL,
  `frequence` tinyint DEFAULT NULL,
  `flexibility` tinyint DEFAULT NULL,
  PRIMARY KEY (`parents_idparent`,`parents_users_iduser`,`nounous_idnounou`,`nounous_users_iduser`),
  KEY `fk_parents_has_nounous_nounous1_idx` (`nounous_idnounou`,`nounous_users_iduser`),
  KEY `fk_parents_has_nounous_parents1_idx` (`parents_idparent`,`parents_users_iduser`),
  CONSTRAINT `fk_parents_has_nounous_nounous1` FOREIGN KEY (`nounous_idnounou`, `nounous_users_iduser`) REFERENCES `nounous` (`idnounou`, `users_iduser`),
  CONSTRAINT `fk_parents_has_nounous_parents1` FOREIGN KEY (`parents_idparent`, `parents_users_iduser`) REFERENCES `parents` (`idparent`, `users_iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `idservices` int NOT NULL AUTO_INCREMENT,
  `serviceName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservices`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'sortie'),(2,'jardin'),(3,'repas'),(4,'animaux'),(5,'non_fumeur'),(6,'hygiene'),(7,'promenade'),(8,'eveil'),(9,'musique'),(10,'art'),(11,'langue'),(12,'bibliotheque'),(13,'transport');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `superutilisateur`
--

DROP TABLE IF EXISTS `superutilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `superutilisateur` (
  `idsuperutilisateur` int NOT NULL AUTO_INCREMENT,
  `users_iduser` int NOT NULL,
  PRIMARY KEY (`idsuperutilisateur`,`users_iduser`),
  KEY `fk_superutilisateur_users1_idx` (`users_iduser`),
  CONSTRAINT `fk_superutilisateur_users1` FOREIGN KEY (`users_iduser`) REFERENCES `users` (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `superutilisateur`
--

LOCK TABLES `superutilisateur` WRITE;
/*!40000 ALTER TABLE `superutilisateur` DISABLE KEYS */;
/*!40000 ALTER TABLE `superutilisateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `type` enum('parent','ass_mat','superutilisateur') NOT NULL,
  `email` varchar(155) NOT NULL,
  `adress` varchar(155) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'nanny','super','ass_mat','supern@.com','12 rue du coin','0606060606','turlututu'),(3,'loris','chastanet','parent','lchastanet@plop.com','25 avenue de toto','0708080606','hashed'),(4,'super','utilisateur','superutilisateur','trobien.com','onditpas','06.48.48.48.48','root');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-21 17:16:04

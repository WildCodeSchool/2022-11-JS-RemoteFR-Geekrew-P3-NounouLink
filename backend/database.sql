-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
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
-- Table structure for table `children`
--

DROP TABLE IF EXISTS `children`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `children` (
  `idchildren` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lastname` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `canwalk` tinyint DEFAULT NULL,
  `allergie` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `insurance` text COLLATE utf8mb4_general_ci,
  `healthbook` text COLLATE utf8mb4_general_ci,
  `parents_idparents` int NOT NULL,
  `parents_users_idusers` int NOT NULL,
  PRIMARY KEY (`idchildren`,`parents_idparents`,`parents_users_idusers`),
  KEY `fk_children_parents1_idx` (`parents_idparents`,`parents_users_idusers`),
  CONSTRAINT `fk_children_parents1` FOREIGN KEY (`parents_idparents`, `parents_users_idusers`) REFERENCES `parents` (`idparents`, `users_idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `children`
--

LOCK TABLES `children` WRITE;
/*!40000 ALTER TABLE `children` DISABLE KEYS */;
INSERT INTO `children` VALUES (1,'jean','valjean','2019-12-15',1,'noisette','222222',1,0,0);
/*!40000 ALTER TABLE `children` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `idfavorites` int NOT NULL AUTO_INCREMENT,
  `parents_idparents` int NOT NULL,
  `parents_users_idusers` int NOT NULL,
  `nannies_idnannies` int NOT NULL,
  `nannies_users_idusers` int NOT NULL,
  PRIMARY KEY (`idfavorites`,`parents_idparents`,`parents_users_idusers`,`nannies_idnannies`,`nannies_users_idusers`),
  KEY `fk_favorites_parents1_idx` (`parents_idparents`,`parents_users_idusers`),
  KEY `fk_favorites_nannies1_idx` (`nannies_idnannies`,`nannies_users_idusers`),
  CONSTRAINT `fk_favorites_nannies1` FOREIGN KEY (`nannies_idnannies`, `nannies_users_idusers`) REFERENCES `nannies` (`idnannies`, `users_idusers`),
  CONSTRAINT `fk_favorites_parents1` FOREIGN KEY (`parents_idparents`, `parents_users_idusers`) REFERENCES `parents` (`idparents`, `users_idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nannies`
--

DROP TABLE IF EXISTS `nannies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nannies` (
  `idnannies` int NOT NULL AUTO_INCREMENT,
  `users_idusers` int NOT NULL,
  `ranking` int DEFAULT NULL,
  `pictures` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `hourly_rate` int DEFAULT NULL,
  `ad_name` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `custody_address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `profile_picture` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `presentation` text COLLATE utf8mb4_general_ci,
  `psc1` tinyint DEFAULT NULL,
  `pedagogy` tinyint DEFAULT NULL,
  `degree_level` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `experience` int DEFAULT NULL,
  `hygiene` tinyint DEFAULT NULL,
  `overtime` int DEFAULT NULL,
  `tariff_major` int DEFAULT NULL,
  `price_kilometre` int DEFAULT NULL,
  `meal_price` int DEFAULT NULL,
  `home_insurance` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `car_insurance` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `secu_certificate` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `proof_of_residence` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `diploma` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `aggregation_number` int DEFAULT NULL,
  `date_agreement` date DEFAULT NULL,
  `places_max` int DEFAULT NULL,
  PRIMARY KEY (`idnannies`,`users_idusers`),
  KEY `fk_nannies_users1_idx` (`users_idusers`),
  CONSTRAINT `fk_nannies_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nannies`
--

LOCK TABLES `nannies` WRITE;
/*!40000 ALTER TABLE `nannies` DISABLE KEYS */;
INSERT INTO `nannies` VALUES (1,2,5,'ddd',25,'the best','rue victoire','oooo','je suis la meilleure',1,1,'laclasse',50,0,15,25,15,5,'ssss','222','22222','2222','22222','2222',222222,'1975-12-01',4);
/*!40000 ALTER TABLE `nannies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nannies_has_services`
--

DROP TABLE IF EXISTS `nannies_has_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nannies_has_services` (
  `nannies_idnannies` int NOT NULL,
  `nannies_users_idusers` int NOT NULL,
  `services_idservices` int NOT NULL,
  PRIMARY KEY (`nannies_idnannies`,`nannies_users_idusers`,`services_idservices`),
  KEY `fk_nannies_has_services_services1_idx` (`services_idservices`),
  KEY `fk_nannies_has_services_nannies1_idx` (`nannies_idnannies`,`nannies_users_idusers`),
  CONSTRAINT `fk_nannies_has_services_nannies1` FOREIGN KEY (`nannies_idnannies`, `nannies_users_idusers`) REFERENCES `nannies` (`idnannies`, `users_idusers`),
  CONSTRAINT `fk_nannies_has_services_services1` FOREIGN KEY (`services_idservices`) REFERENCES `services` (`idservices`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nannies_has_services`
--

LOCK TABLES `nannies_has_services` WRITE;
/*!40000 ALTER TABLE `nannies_has_services` DISABLE KEYS */;
/*!40000 ALTER TABLE `nannies_has_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parents`
--

DROP TABLE IF EXISTS `parents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parents` (
  `idparents` int NOT NULL AUTO_INCREMENT,
  `caf_number` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `exit_permit` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image_rights` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `users_idusers` int NOT NULL,
  PRIMARY KEY (`idparents`,`users_idusers`),
  KEY `fk_parent_users1_idx` (`users_idusers`),
  CONSTRAINT `fk_parent_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
  `parents_idparents` int NOT NULL,
  `parents_users_idusers` int NOT NULL,
  `nannies_idnannies` int NOT NULL,
  `nannies_users_idusers` int NOT NULL,
  `reservationok` tinyint DEFAULT NULL,
  `startdate` datetime DEFAULT NULL,
  `enddate` datetime DEFAULT NULL,
  `frequence` tinyint DEFAULT NULL,
  `flexibility` tinyint DEFAULT NULL,
  PRIMARY KEY (`parents_idparents`,`parents_users_idusers`,`nannies_idnannies`,`nannies_users_idusers`),
  KEY `fk_parents_has_nannies_nannies1_idx` (`nannies_idnannies`,`nannies_users_idusers`),
  KEY `fk_parents_has_nannies_parents1_idx` (`parents_idparents`,`parents_users_idusers`),
  CONSTRAINT `fk_parents_has_nannies_nannies1` FOREIGN KEY (`nannies_idnannies`, `nannies_users_idusers`) REFERENCES `nannies` (`idnannies`, `users_idusers`),
  CONSTRAINT `fk_parents_has_nannies_parents1` FOREIGN KEY (`parents_idparents`, `parents_users_idusers`) REFERENCES `parents` (`idparents`, `users_idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
  `serviceName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idservices`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
-- Table structure for table `slots`
--

DROP TABLE IF EXISTS `slots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slots` (
  `idslots` int NOT NULL AUTO_INCREMENT,
  `caption_day` enum('Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `beginning_hour` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `place_number` int DEFAULT NULL,
  `nannies_idnannies` int NOT NULL,
  `nannies_users_idusers` int NOT NULL,
  PRIMARY KEY (`idslots`,`nannies_idnannies`,`nannies_users_idusers`),
  KEY `fk_slots_nannies1_idx` (`nannies_idnannies`,`nannies_users_idusers`),
  CONSTRAINT `fk_slots_nannies1` FOREIGN KEY (`nannies_idnannies`, `nannies_users_idusers`) REFERENCES `nannies` (`idnannies`, `users_idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slots`
--

LOCK TABLES `slots` WRITE;
/*!40000 ALTER TABLE `slots` DISABLE KEYS */;
/*!40000 ALTER TABLE `slots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `superusers`
--

DROP TABLE IF EXISTS `superusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `superusers` (
  `idsuperusers` int NOT NULL AUTO_INCREMENT,
  `users_idusers` int NOT NULL,
  PRIMARY KEY (`idsuperusers`,`users_idusers`),
  KEY `fk_superusers_users1_idx` (`users_idusers`),
  CONSTRAINT `fk_superusers_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `superusers`
--

LOCK TABLES `superusers` WRITE;
/*!40000 ALTER TABLE `superusers` DISABLE KEYS */;
/*!40000 ALTER TABLE `superusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `lastname` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `kind` enum('parent','ass_mat','superusers') COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(155) COLLATE utf8mb4_general_ci NOT NULL,
  `adress` varchar(155) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `hashedPassword` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'nanny','super','ass_mat','supern@.com','12 rue du coin','0606060606','turlututu'),(3,'loris','chastanet','parent','lchastanet@plop.com','25 avenue de toto','0708080606','hashed'),(4,'super','utilisateur','superusers','trobien.com','onditpas','06.48.48.48.48','root');
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

-- Dump completed on 2023-02-28 10:56:23

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema baby_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema baby_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `baby_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `baby_db` ;

-- -----------------------------------------------------
-- Table `baby_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baby_db`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL,
  `lastname` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL,
  `kind` ENUM('parent', 'ass_mat', 'superusers') CHARACTER SET 'utf8mb4' NOT NULL,
  `email` VARCHAR(155) CHARACTER SET 'utf8mb4' NOT NULL,
  `adress` VARCHAR(155) CHARACTER SET 'utf8mb4' NOT NULL,
  `phone` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL,
  `hashedPassword` VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `baby_db`.`parents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baby_db`.`parents` (
  `idparents` INT NOT NULL AUTO_INCREMENT,
  `caf_number` VARCHAR(45) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `exit_permit` VARCHAR(45) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `image_rights` VARCHAR(45) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idparents`, `users_idusers`),
  INDEX `fk_parent_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_parent_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `baby_db`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `baby_db`.`children`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baby_db`.`children` (
  `idchildren` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `lastname` VARCHAR(45) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `birthdate` DATE NULL DEFAULT NULL,
  `canwalk` VARCHAR(45) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `allergie` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `insurance` TEXT CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `healthbook` TEXT CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `parents_idparents` INT NOT NULL,
  `parents_users_idusers` INT NOT NULL,
  PRIMARY KEY (`idchildren`, `parents_idparents`, `parents_users_idusers`),
  INDEX `fk_children_parents1_idx` (`parents_idparents` ASC, `parents_users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_children_parents1`
    FOREIGN KEY (`parents_idparents` , `parents_users_idusers`)
    REFERENCES `baby_db`.`parents` (`idparents` , `users_idusers`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `baby_db`.`nannies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baby_db`.`nannies` (
  `idnannies` INT NOT NULL AUTO_INCREMENT,
  `users_idusers` INT NOT NULL,
  `ranking` INT NULL DEFAULT NULL,
  `pictures` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `hourly_rate` INT NULL DEFAULT NULL,
  `ad_name` VARCHAR(150) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `custody_address` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `profile_picture` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `presentation` TEXT CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `psc1` TINYINT NULL DEFAULT NULL,
  `pedagogy` TINYINT NULL DEFAULT NULL,
  `degree_level` VARCHAR(45) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `experience` INT NULL DEFAULT NULL,
  `hygiene` TINYINT NULL DEFAULT NULL,
  `overtime` INT NULL DEFAULT NULL,
  `tariff_major` INT NULL DEFAULT NULL,
  `price_kilometre` INT NULL DEFAULT NULL,
  `meal_price` INT NULL DEFAULT NULL,
  `home_insurance` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `car_insurance` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `id` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `secu_certificate` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `proof_of_residence` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `diploma` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `aggregation_number` INT NULL DEFAULT NULL,
  `date_agreement` DATE NULL DEFAULT NULL,
  `places_max` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idnannies`, `users_idusers`),
  INDEX `fk_nannies_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_nannies_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `baby_db`.`users` (`idusers`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `baby_db`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baby_db`.`favorites` (
  `idfavorites` INT NOT NULL AUTO_INCREMENT,
  `parents_idparents` INT NOT NULL,
  `parents_users_idusers` INT NOT NULL,
  `nannies_idnannies` INT NOT NULL,
  `nannies_users_idusers` INT NOT NULL,
  PRIMARY KEY (`idfavorites`, `parents_idparents`, `parents_users_idusers`, `nannies_idnannies`, `nannies_users_idusers`),
  INDEX `fk_favorites_parents1_idx` (`parents_idparents` ASC, `parents_users_idusers` ASC) VISIBLE,
  INDEX `fk_favorites_nannies1_idx` (`nannies_idnannies` ASC, `nannies_users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_favorites_nannies1`
    FOREIGN KEY (`nannies_idnannies` , `nannies_users_idusers`)
    REFERENCES `baby_db`.`nannies` (`idnannies` , `users_idusers`),
  CONSTRAINT `fk_favorites_parents1`
    FOREIGN KEY (`parents_idparents` , `parents_users_idusers`)
    REFERENCES `baby_db`.`parents` (`idparents` , `users_idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `baby_db`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baby_db`.`services` (
  `idservices` INT NOT NULL AUTO_INCREMENT,
  `serviceName` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  PRIMARY KEY (`idservices`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4;

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'sortie'),(2,'jardin'),(3,'repas'),(4,'animaux'),(5,'non_fumeur'),(6,'hygiene'),(7,'promenade'),(8,'eveil'),(9,'musique'),(10,'art'),(11,'langue'),(12,'bibliotheque'),(13,'transport');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

-- -----------------------------------------------------
-- Table `baby_db`.`nannies_has_services`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nannies_has_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nannies_has_services` (
  `nannies_idnannies` int NOT NULL,
  `nannies_users_idusers` int NOT NULL,
  `services_idservices` int NOT NULL,
  KEY `fk_nannies_has_services_services1_idx` (`services_idservices`),
  KEY `fk_nannies_has_services_nannies1_idx` (`nannies_idnannies`,`nannies_users_idusers`),
  CONSTRAINT `fk_nannies_has_services_nannies1` FOREIGN KEY (`nannies_idnannies`, `nannies_users_idusers`) REFERENCES `nannies` (`idnannies`, `users_idusers`),
  CONSTRAINT `fk_nannies_has_services_services1` FOREIGN KEY (`services_idservices`) REFERENCES `services` (`idservices`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- -----------------------------------------------------
-- Table `baby_db`.`reservations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baby_db`.`reservations` (
  `parents_idparents` INT NOT NULL,
  `parents_users_idusers` INT NOT NULL,
  `nannies_idnannies` INT NOT NULL,
  `nannies_users_idusers` INT NOT NULL,
  `reservationok` TINYINT NULL DEFAULT NULL,
  `startdate` DATETIME NULL DEFAULT NULL,
  `enddate` DATETIME NULL DEFAULT NULL,
  `frequence` TINYINT NULL DEFAULT NULL,
  `flexibility` TINYINT NULL DEFAULT NULL,
  `children_idchildren` INT NOT NULL,
  `children_parents_idparents` INT NOT NULL,
  `children_parents_users_idusers` INT NOT NULL,
  INDEX `fk_parents_has_nannies_nannies1_idx` (`nannies_idnannies` ASC, `nannies_users_idusers` ASC) VISIBLE,
  INDEX `fk_parents_has_nannies_parents1_idx` (`parents_idparents` ASC, `parents_users_idusers` ASC) VISIBLE,
  INDEX `fk_reservations_children1_idx` (`children_idchildren` ASC, `children_parents_idparents` ASC, `children_parents_users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_parents_has_nannies_nannies1`
    FOREIGN KEY (`nannies_idnannies` , `nannies_users_idusers`)
    REFERENCES `baby_db`.`nannies` (`idnannies` , `users_idusers`),
  CONSTRAINT `fk_parents_has_nannies_parents1`
    FOREIGN KEY (`parents_idparents` , `parents_users_idusers`)
    REFERENCES `baby_db`.`parents` (`idparents` , `users_idusers`),
  CONSTRAINT `fk_reservations_children1`
    FOREIGN KEY (`children_idchildren` , `children_parents_idparents` , `children_parents_users_idusers`)
    REFERENCES `baby_db`.`children` (`idchildren` , `parents_idparents` , `parents_users_idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `baby_db`.`slots`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baby_db`.`slots` (
  `idslots` INT NOT NULL AUTO_INCREMENT,
  `caption_day` ENUM('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche') CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `beginning_hour` DATETIME NULL DEFAULT NULL,
  `end_time` DATETIME NULL DEFAULT NULL,
  `place_number` INT NULL DEFAULT NULL,
  `nannies_idnannies` INT NOT NULL,
  `nannies_users_idusers` INT NOT NULL,
  PRIMARY KEY (`idslots`, `nannies_idnannies`, `nannies_users_idusers`),
  INDEX `fk_slots_nannies1_idx` (`nannies_idnannies` ASC, `nannies_users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_slots_nannies1`
    FOREIGN KEY (`nannies_idnannies` , `nannies_users_idusers`)
    REFERENCES `baby_db`.`nannies` (`idnannies` , `users_idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COMMENT = '	';


-- -----------------------------------------------------
-- Table `baby_db`.`superusers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `baby_db`.`superusers` (
  `idsuperusers` INT NOT NULL AUTO_INCREMENT,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idsuperusers`, `users_idusers`),
  INDEX `fk_superusers_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_superusers_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `baby_db`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

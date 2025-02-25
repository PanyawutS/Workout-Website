-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `workoutprograms`
--

DROP TABLE IF EXISTS `workoutprograms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workoutprograms` (
  `program_id` int NOT NULL AUTO_INCREMENT,
  `program_name` varchar(45) NOT NULL,
  `description` varchar(300) NOT NULL,
  `target_muscle` varchar(45) NOT NULL,
  `workoutProgramscol` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `video_url` varchar(6000) DEFAULT NULL,
  `workout_programscol` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`program_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workoutprograms`
--

LOCK TABLES `workoutprograms` WRITE;
/*!40000 ALTER TABLE `workoutprograms` DISABLE KEYS */;
INSERT INTO `workoutprograms` VALUES (1,'โปรแกรมขา','เป็นการฝึกที่เน้นการเพิ่มความแข็งแรงของกล้ามเนื้อขา สะโพก และส่วนล่างของร่างกาย','ขา',NULL,NULL,NULL,'https://i.pinimg.com/474x/35/31/c2/3531c2c6e60db59bdf63284d1c4530f5.jpg',NULL),(2,'โปรแกรมแขน','การออกกำลังกายกล้ามเนื้อแขนเป็นส่วนสำคัญในการเพิ่มความแข็งแรงและความทนทานของร่างกายส่วนบน','แขน',NULL,NULL,NULL,'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e',NULL),(3,'โปรแกรมอก','อกเป็นกล้ามเนื้อส่วนที่ใหญ่ส่วนต้น ๆ ของร่ากายส่วนบน ซึ่งทำให้ร่างกายส่วนบนแข็งแรง','อก',NULL,NULL,NULL,'https://i.pinimg.com/474x/0f/a1/4c/0fa14c0082aea966b1cbfa6b7ffa0ec4.jpg',NULL),(4,'โปรแกรมไหล่','เป็นส่วนที่ทำให้เราดูหนาและทำให้บุคลิกของเราดีขึ้น ไหล่เป็นส่วนสำคัญต่อการใช้งานอย่างมากในชีวิตประจำวัน','ไหล่',NULL,NULL,NULL,'https://i.imgur.com/Zx2i0Wd.jpg',NULL),(5,'ทั่วร่างกาย','หากต้องการเพิ่มจะแข็งแรงของร่างกายโปรแกรมนี้เหมาะสำหรับคุณ','ทั้วร่างกาย',NULL,NULL,NULL,'https://static.bangkokpost.com/media/content/20240913/c1_2865088.jpg',NULL),(6,'หลัง','ทำให้ตัวดูกว้างและช่วยส่งเสริมช่วงบนของร่างกายให้แข็งแรงขึ้น','ไหล่',NULL,NULL,NULL,'https://i.pinimg.com/474x/1d/3c/e6/1d3ce66e748b46771b06816da49cf052.jpg',NULL);
/*!40000 ALTER TABLE `workoutprograms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-25  1:03:36

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
-- Table structure for table `exercises`
--

DROP TABLE IF EXISTS `exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercises` (
  `exercise_id` int NOT NULL AUTO_INCREMENT,
  `exercises_name` varchar(45) NOT NULL,
  `target_muscle` varchar(450) NOT NULL,
  `description` varchar(3000) NOT NULL,
  `video_url` varchar(300) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `exercise_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`exercise_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercises`
--

LOCK TABLES `exercises` WRITE;
/*!40000 ALTER TABLE `exercises` DISABLE KEYS */;
INSERT INTO `exercises` VALUES (1,'Zerker Curl','กล้ามเนื้อแขนด้านหน้า','จับบาร์เบลล์ด้วยมือทั้งสองข้าง โดยให้ฝ่ามือหันออกด้านหน้า (ถือแบบหงายมือ) ยกบาร์เบลล์ขึ้นมาที่ระดับหน้าอก จากนั้นค่อย ๆ ลดลงมาที่ตำแหน่งเริ่มต้น ทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/zj4zXiQqJKY',NULL,NULL,'Zerker Curl'),(2,'Tricep Presses','กล้ามเนื้อแขนด้านหลัง','เริ่มต้นในท่าคุกเข่า หรือยืนเท้าชิด จับดัมเบลล์ด้วยมือทั้งสองข้างไว้ด้านหลังหัว ยืดแขนขึ้นไปจนกระทั่งแขนตรง จากนั้นค่อย ๆ ลดดัมเบลล์กลับมาในตำแหน่งเดิมทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/V1ULieR43tk',NULL,NULL,'Tricep Presses'),(3,'Overhead Extention','กล้ามเนื้อแขนด้านหลัง','จับดัมเบลล์ด้วยมือทั้งสองข้างเหนือศีรษะ แขนตรง \nงอศอกเพื่อลดดัมเบลล์ลงไปด้านหลังศีรษะ \nจากนั้นยืดแขนกลับไปที่ตำแหน่งเริ่มต้น ทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/Z-IdrxCKZ-k',NULL,NULL,'Overhead Extention'),(4,'Hammer Curl','กล้ามเนื้อแขนหน้า','จับดัมเบลล์ในท่าที่ฝ่ามือหันเข้าหาลำตัว\nยกดัมเบลล์ขึ้นมาใกล้หัวไหล่โดยที่ฝ่ามือยังหันเข้าหาตัว\nค่อย ๆ ลดดัมเบลล์ลงมาที่ตำแหน่งเริ่มต้น\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/QWl2dp3KHVo',NULL,NULL,'Hammer Curl'),(5,'Dumbbell Curl','กล้ามเนื้อแขนหน้า','จับดัมเบลล์ด้วยฝ่ามือหันออกด้านหน้า\nยกดัมเบลล์ขึ้นมาในแนวตรงไปที่หัวไหล่ จากนั้นลดกลับลงมา\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/bogAKHihZoY',NULL,NULL,'Dumbbell Curl'),(6,'Deadlift','กล้ามเนื้อขา สะโพก หลังล่าง และกล้ามเนื้อแกนกลาง','ยืนกางขาเล็กน้อย ให้เท้าอยู่ห่างกันพอสมควร\nจับบาร์เบลล์หรือดัมเบลล์ด้วยมือทั้งสองข้าง โดยให้ฝ่ามือหันไปด้านหน้า\nก้มตัวลงโดยงอสะโพกและเข่าในขณะที่หลังยังตรง และดึงบาร์เบลล์ขึ้นมาจนลำตัวตั้งตรง\nค่อย ๆ ลดบาร์เบลล์กลับลงไปในท่าเริ่มต้น โดยงอสะโพกและเข่าอีกครั้ง\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://www.youtube.com/embed/SCyHWB9VBI4',NULL,NULL,'Deadlift'),(7,'Leg Extension','กล้ามเนื้อต้นขาด้านหน้า','นั่งบนเครื่อง Leg Extension วางเท้าไว้ใต้แป้นรองขา\nยืดขาออกไปข้างหน้าให้ตรง โดยเน้นการใช้กล้ามเนื้อต้นขาด้านหน้าในการดัน\nค่อย ๆ งอเข่าลงกลับไปยังตำแหน่งเริ่มต้น\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/tbzwRX-rH70',NULL,NULL,'Leg Extension'),(8,'Leg Lunge','สะโพกและต้นขา','ยืนตัวตรง เท้าชิดกัน วางมือไว้ข้างลำตัวหรือถือดัมเบลล์ไว้ในมือทั้งสองข้าง\nก้าวเท้าข้างหนึ่งไปข้างหน้า แล้วลดสะโพกลงจนกระทั่งเข่าทั้งสองข้างทำมุมประมาณ 90 องศา\nดันตัวขึ้นและกลับสู่ตำแหน่งเริ่มต้น จากนั้นทำซ้ำกับขาอีกข้าง\nทำสลับกันไปมาจนครบจำนวนครั้งที่ต้องการ','https://youtube.com/embed/iCdmx-0p9es',NULL,NULL,'Leg Lunge'),(9,'Squat','กล้ามเนื้อขาและสะโพก','ยืนกางขาให้กว้างกว่าช่วงสะโพกเล็กน้อย โดยให้ปลายเท้าชี้ออกเล็กน้อย\nย่อตัวลงโดยงอเข่าและสะโพก พยายามให้เข่ามีแนวตรงกับปลายเท้า และหลังยังคงตั้งตรง\nดันตัวขึ้นกลับมายืนตรง\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://www.youtube.com/embed/TB8keuX9XLA',NULL,NULL,'Squat'),(10,'Dumblle Front Raise','กล้ามเนื้อไหล่ด้านหน้า','ยืนตรง ถือดัมเบลล์ในแต่ละมือไว้ด้านหน้าของต้นขา ฝ่ามือหันเข้าหาลำตัว\nยกดัมเบลล์ขึ้นมาตรง ๆ ด้านหน้าของร่างกาย โดยให้แขนยกขนานกับพื้น\nลดดัมเบลล์กลับลงมาช้า ๆ ไปที่ตำแหน่งเริ่มต้น\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/_WXSua3v0pc',NULL,NULL,'Dumblle Front Raise'),(11,'Dumblle Shoulder Press','ไหล่และแขนด้านหลัง','นั่งบนม้านั่งหรือยืนถือดัมเบลล์ที่ระดับไหล่ ฝ่ามือหันออกด้านหน้า\nดันดัมเบลล์ขึ้นเหนือศีรษะจนแขนเหยียดตรง\nลดดัมเบลล์กลับลงมาที่ระดับไหล่ช้า ๆ\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/DZK978PkE4I',NULL,NULL,'Dumblle Shoulder Press'),(12,'Dumblle Side Raise','ไหล่ด้านข้าง','ยืนตรง ถือดัมเบลล์ในแต่ละมือที่ด้านข้างของลำตัว ฝ่ามือหันเข้าหาลำตัว\nยกดัมเบลล์ออกไปด้านข้างจนแขนขนานกับพื้น\nค่อย ๆ ลดดัมเบลล์กลับลงมาที่ตำแหน่งเริ่มต้น\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/zAt3oW6TyhE',NULL,NULL,'Dumblle Side Raise'),(13,'Dumblle Ski\'s','ไหล่ แกนกลางลำตัวและขา','ยืนตรง ถือดัมเบลล์ในแต่ละมือ โดยแขนอยู่ข้างลำตัว\nงอเข่าเล็กน้อย และดันสะโพกไปด้านหลังคล้ายท่าสกี\nแกว่งแขนทั้งสองไปข้างหลัง และดันสะโพกไปข้างหน้าเพื่อดันแขนไปข้างหน้า\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/1PNDfNuYxfw',NULL,NULL,'Dumblle Ski\'s'),(14,'Floor Fly','กล้ามเนื้อหน้าอก ไหล่ด้านหน้า','นอนหงายบนพื้น ยกเข่าขึ้นเล็กน้อย และวางเท้าไว้บนพื้น\nถือดัมเบลล์ไว้ในมือทั้งสองข้าง แขนยืดขึ้นไปตรง ๆ เหนือหน้าอก โดยให้ฝ่ามือหันเข้าหากัน\nค่อย ๆ กางแขนออกด้านข้างในแนวโค้งจนกระทั่งหลังแขนสัมผัสพื้น โดยข้อศอกควรงอเล็กน้อยตลอดการเคลื่อนไหว\nบีบกล้ามเนื้อหน้าอกเพื่อยกแขนกลับขึ้นไปยังตำแหน่งเริ่มต้น\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/oYEoUu-82vM',NULL,NULL,'Floor Fly'),(15,'High Pec Fly','กล้ามเนื้อหน้าอกส่วนบน ไหล่','ตั้งสายเคเบิลหรือลูกรอกให้อยู่ที่ระดับสูงเหนือศีรษะ\nจับมือจับของเครื่องเคเบิลทั้งสองข้างไว้ ยืนขาแยกเล็กน้อยเพื่อรักษาสมดุล\nกางแขนออกในลักษณะ V เหนือหัวเล็กน้อย โดยให้ข้อศอกงอเล็กน้อยเพื่อป้องกันไม่ให้เกิดแรงเครียดที่ข้อศอก\nดึงมือจับลงมาและเข้าหากันในแนวโค้งด้านหน้าร่างกายจนมือทั้งสองข้างมาบรรจบกันที่ระดับหน้าอก\nค่อย ๆ คลายมือจับกลับไปในท่าเริ่มต้น โดยรักษาแขนให้อยู่ในแนวโค้งเสมอ\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/CGiKKYOAfeU',NULL,NULL,'High Pec Fly'),(16,'Side Shrug Row','หลังและบ่า','ยืนตรง ถือดัมเบลล์ในแต่ละมือไว้ข้างลำตัว\nยกบ่าและแขนขึ้นเหมือนการ Shrug ขณะที่งอข้อศอกเล็กน้อย ดึงดัมเบลล์เข้าหาลำตัวคล้ายท่า Row\nลดแขนและบ่ากลับลงไปที่ตำแหน่งเริ่มต้น\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/Gyh17FvMTiM',NULL,NULL,'Side Shrug Row'),(17,'Paddle Row','หลังและบ่า','ยืนงอเข่าเล็กน้อย ดันสะโพกไปด้านหลังและโน้มตัวมาด้านหน้า ขณะที่ถือดัมเบลล์ไว้ในแต่ละมือ\nดึงดัมเบลล์ขึ้นมาข้างลำตัวโดยงอข้อศอกและเกร็งกล้ามเนื้อหลัง\nค่อย ๆ ลดดัมเบลล์กลับไปที่ตำแหน่งเริ่มต้น\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/NkOK4IcV5PU',NULL,NULL,'Paddle Row'),(18,'Leaning Side Row','หลังและแกนกลางลำตัว','ยืนด้านข้างของม้านั่งหรือที่ยึดอื่น ๆ ใช้มือข้างหนึ่งเกาะไว้เพื่อการทรงตัว ขณะที่มืออีกข้างถือดัมเบลล์\nโน้มตัวลงเล็กน้อย และดึงดัมเบลล์ขึ้นมาข้างลำตัว โดยงอข้อศอกไปด้านหลัง\nค่อย ๆ ลดดัมเบลล์กลับลงไปที่ตำแหน่งเริ่มต้น\nทำซ้ำกับข้างตรงข้ามและตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/vVNAs1K6QYg',NULL,NULL,'Leaning Side Row'),(19,'Clow Row Rear Fly','หลัง บ่าและไหล่','ยืนงอเข่าเล็กน้อย โน้มตัวมาข้างหน้า ขณะที่ถือดัมเบลล์ไว้ทั้งสองมือ\nเริ่มต้นด้วยการดึงดัมเบลล์เข้าหาลำตัวคล้ายการทำ Row\nจากนั้น กางแขนออกด้านข้างคล้ายท่า Fly โดยรักษาข้อศอกให้งอเล็กน้อย\nค่อย ๆ กลับมาที่ตำแหน่งเริ่มต้น\nทำซ้ำตามจำนวนครั้งที่ต้องการ','https://youtube.com/embed/8seQSFGRac4',NULL,NULL,'Clow Row Rear Fly ');
/*!40000 ALTER TABLE `exercises` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-25  1:03:37

-- no 1 
INSERT INTO `booking`(`id`, `bank`, `amount`, `payment_date`) VALUES ('danamon','1000','2022-11-05')
INSERT INTO `master`(`id`, `source_name`, `status`) VALUES ('','ccc','pending')

-- no 2 
UPDATE `master` SET `source_name`='zzzz',`status`='gagal' WHERE id=1;

-- no 3
SELECT * FROM booking LEFT JOIN MASTER ON booking.id = MASTER.id GROUP BY booking.bank;
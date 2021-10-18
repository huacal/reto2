/* ---------- Tabla Bike --------- */
/* manejador GET */
SELECT * FROM BIKE

/* manejador POST */
BEGIN
INSERT INTO BIKE (ID, BRAND, MODEL, CATEGORY_ID, NAME) VALUES (:id, :brand, :model, :category_id, :name);
:status_code := 201;
END;

/* manejador PUT */
BEGIN
UPDATE BIKE SET  BRAND= :brand, MODEL= :model, CATEGORY_ID= :category_id, NAME= :name  WHERE ID=:id;
:status_code := 201;
END;

/* manejador DELETE */
BEGIN
DELETE FROM BIKE WHERE ID = :id;
:status_code:=204;
END;

/* ---------- Tabla Client --------- */

/* manejador GET */
SELECT * FROM CLIENT

/* manejador POST */
BEGIN
INSERT INTO CLIENT (ID, NAME, EMAIL, AGE) VALUES (:id, :name, :email, :age);
:status_code :=201;
END;

/* manejador PUT */
BEGIN
UPDATE CLIENT SET NAME=:name, EMAIL=:email, AGE=:age WHERE ID =:id;
:status_code := 201;
END;

/* manejador DELETE */
BEGIN
DELETE FROM CLIENT WHERE ID = :id;
:status_code:=204;
END;



/* ---------- Tabla Message --------- */

/* manejador GET */
SELECT * FROM MESSAGE

/* manejador POST */
BEGIN
INSERT INTO MESSAGE (ID, MESSAGETEXT) VALUES (:id, :messagetext);
:status_code := 201;
END;

/* manejador PUT */
BEGIN
UPDATE MESSAGE SET  MESSAGETEXT= :messagetext WHERE ID=:id;
:status_code := 201;
END;

/* manejador DELETE */
BEGIN
DELETE FROM MESSAGE WHERE ID = :id;
:status_code:=204;
END;
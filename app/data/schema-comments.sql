use msis

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
    id int AUTO_INCREMENT PRIMARY KEY,
    commentText text
);

INSERT INTO Comments (commentText) VALUES
("This is the first comment"),
("This is the second comment");

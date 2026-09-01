/*Author: Leanna Persaud
File for creating the table schema used in the webpage application.
*/

CREATE TABLE surveys(
    surveyID INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    street VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    _state VARCHAR(50) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    telephone VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    _date varchar(15) NOT NULL,
    liked varchar(60),
    interest VARCHAR(15),
    _likelihood VARCHAR(15),
    _comments VARCHAR(500),
    PRIMARY KEY(surveyID)
)
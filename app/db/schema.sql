CREATE TABLE Users (user_id INTEGER NOT NULL PRIMARY KEY, username VARCHAR(100) UNIQUE, auth_token VARCHAR(500));
CREATE TABLE TOkens (user_id INTEGER NOT NULL, access_token TEXT, expiration_time INTEGER, refresh_token VARCHAR(500), PRIMARY KEY(user_id), FOREIGN KEY (user_id) REFERENCES Users(user_id));

import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  port: "3300",
  user: "root",
  password: "password",
  database: "messages_db",
});

export default function messageHandler(req, res) {
  connection.connect();

  if (req.method == "POST") {
    const data = req.body;
    console.log(data.name);

    //TODO: SQL Injection?
    connection.query(
      "INSERT INTO contacts (name, email, phone, title, message) VALUES" +
        `("${data.name}", "${data.email}", "${data.phone}","${data.title}", "${data.message}")`,
      (err, results, fields) => {
        console.log("Error:", err);
        res.status(201).json(results);
      }
    );
  } else if (req.method == "GET") {
    //TODO: authentication needed
    connection.query("Select * from contacts", (err, results, fields) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(results);
      }
    });
  }
}

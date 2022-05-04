const db = require("../../models/index");
import { protect } from "../../helpers/api/jwt-middleware";

export default async function messageHandler(req, res) {
  return new Promise((resolve, reject) => {
    db.sequelize.sync();

    if (req.method == "POST") {
      const data = req.body;
      db.Messages.create(data)
        .then((data) => {
          res.status(201).send(data);
          resolve();
        })
        .catch((err) => {
          res.status(400).send(err);
          resolve();
        });
    } else if (req.method == "GET") {
      protect(req, res);
      db.Messages.findAll()
        .then((data) => {
          res.status(200).json(data);
          resolve();
        })
        .catch((err) => {
          res.status(500).send(err);
          resolve();
        });
    }
  });
}

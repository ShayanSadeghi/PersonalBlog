const db = require("../../models/index");
import { protect } from "../../helpers/api/jwt-middleware";

export default async function messageHandler(req, res) {
  const { messageId } = req.query; // get message id because for delete endpoint

  console.log(messageId);
  return new Promise((resolve, reject) => {
    db.sequelize.sync();
    if (req.method == "POST") {
      const data = req.body;
      db.Messages.create(data)
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else if (req.method == "GET") {
      protect(req, res);
      db.Messages.findAll({ order: [["id", "DESC"]] })
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    } else if (req.method === "DELETE") {
      protect(req, res);
      db.Messages.destroy({ where: { id: messageId } })
        .then(() => {
          res.status(202).json({ message: "done!" });
          res;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    resolve();
  });
}

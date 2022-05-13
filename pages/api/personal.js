const db = require("../../models/index");
import { protect } from "../../helpers/api/jwt-middleware";

export default async function PersonalDataHandler(req, res) {
  const { dataId } = req.query; // get message id because for delete endpoint

  console.log(dataId);
  return new Promise((resolve, reject) => {
    db.sequelize.sync();
    if (req.method == "POST") {
      const data = req.body;
      db.Personal.create(data)
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else if (req.method == "GET") {
      db.Personal.findAll()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    } else if (req.method === "DELETE") {
      protect(req, res);
      db.Personal.destroy({ where: { id: messageId } })
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

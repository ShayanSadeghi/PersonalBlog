const db = require("../../models/index");
import { protect } from "../../helpers/api/jwt-middleware";

export default async function PersonalDataHandler(req, res) {
  const { id } = req.query;
  console.log(id);

  return new Promise((resolve, reject) => {
    db.sequelize.sync();
    if (req.method == "GET") {
      db.Personal.findAll({ order: [["position", "ASC"]] })
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    } else if (req.method == "POST") {
      const data = req.body;
      db.Personal.create(data)
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else if (req.method == "PUT") {
      protect(req, res);
      db.Personal.update(req.body, { where: { id: req.body.id } })
        .then((data) => {
          res.status(201).json(data);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } else if (req.method === "DELETE") {
      protect(req, res);
      console.log("hey");
      db.Personal.destroy({ where: { id: id } })
        .then(() => {
          res.status(202).json({ message: "done!" });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    }
    resolve();
  });
}

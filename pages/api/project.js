const db = require("../../models/index");
import { protect } from "../../helpers/api/jwt-middleware";

export default async function ProjectHandler(req, res) {
  const { Id } = req.query;
  db.sequelize.sync();
  if (req.method == "GET") {
    db.Projects.findAll({ order: [["position", "ASC"]] })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else if (req.method == "POST") {
    protect(req, res);
    db.Projects.create(req.body)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else if (req.method == "PUT") {
    protect(req, res);
    db.Projects.update(req.body, { where: { id: req.body.id } })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else if (req.method == "DELETE") {
    protect(req, res);
    db.Projects.destroy({ where: { id: Id } })
      .then(() => {
        res.status(202).json({ message: "done!" });
        res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

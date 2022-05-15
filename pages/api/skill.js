const db = require("../../models/index");
import { protect } from "../../helpers/api/jwt-middleware";

export default async function skillHandler(req, res) {
  // const { dataId } = req.query;
  // console.log(dataId);

  db.sequelize.sync();
  if (req.method == "GET") {
    db.Skills.findAll({ include: "SubSkill" })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
}

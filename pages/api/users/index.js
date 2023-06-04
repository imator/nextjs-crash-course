import { users } from "../../data.js";
export default function handler(req, res) {
  const id = req.query.id;
  return res.status(200).json(users);
}

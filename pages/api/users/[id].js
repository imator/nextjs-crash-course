import { users } from "../../data.js";
export default function handler(req, res) {
  const id = req.query.id;
  const filtered = users.filter((user) => user.id === Number(id));
  if (filtered.length > 0) {
    return res.status(200).json(filtered[0]);
  } else {
    return res.status(201).json({ message: `${id} not found` });
  }
}

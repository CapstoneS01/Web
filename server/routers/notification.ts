import express from "express";
import { Knock } from "@knocklabs/node";

import isAuthenticated from "../middleware/isAuthenticated";

const router = express.Router();
const knock = new Knock(process.env.KNOCK_API_KEY);

router.post("/", isAuthenticated, async (req, res) => {
  try {
    await knock.users.identify(req.user, {
      email: req.user,
    });

    await knock.workflows.trigger("detected", {
      recipients: [req.user],
    });

    res.send("Notification sent");
  } catch (err) {
    return res.status(401).send((<Error>err).message);
  }
});

export default router;

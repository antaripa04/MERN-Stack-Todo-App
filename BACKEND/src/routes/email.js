const { Router } = require("express");

const { saveEmail, getEmail } = require("../controllers/email");

const router = Router();

router.post("/save-email", saveEmail);

router.get("/get-email", getEmail);

module.exports = router;

const express = require("express");
const { getPool } = require("../servicos/postgresUserService.js");

const router = express.Router();

router.get("/", async (req, res) => {
  let dbStatus = "disconnected";

  try {
    const pool = getPool();
    await pool.query("SELECT 1;");
    dbStatus = "connected";
  } catch (error) {
    dbStatus = "error";
  }

  res.json({ db: dbStatus });
});

module.exports = router;

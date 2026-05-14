const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {

    const { name, phone, email, message } = req.body;
    if (!name || !phone || !message) {
  return res.status(400).json({
    success: false,
    error: "Name, phone, and message are required"
  });
}

    const query = `
      INSERT INTO contacts (name, phone, email, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    const values = [name, phone, email, message];

    const result = await pool.query(query, values);

    res.status(201).json({
      success: true,
      message: "Contact inquiry saved successfully",
      data: result.rows[0]
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: "Failed to save contact inquiry"
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM contacts ORDER BY created_at DESC"
    );

    res.json({
      success: true,
      data: result.rows
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: "Failed to fetch contacts"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM contacts WHERE id = $1", [id]);

    res.json({
      success: true,
      message: "Lead deleted successfully"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: "Failed to delete lead"
    });
  }
});

module.exports = router;
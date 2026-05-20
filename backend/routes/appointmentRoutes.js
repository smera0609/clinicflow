const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, service, date, time } = req.body;

    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        error: "Name, phone, service, date, and time are required"
      });
    }

    const existingAppointment = await pool.query(
      `SELECT * FROM appointments
       WHERE service = $1
       AND appointment_date = $2
       AND appointment_time = $3
       AND status != 'Cancelled'`,
      [service, date, time]
    );

    if (existingAppointment.rows.length > 0) {
      return res.status(409).json({
        success: false,
        error: "This appointment slot is already booked. Please choose another time."
      });
    }

    const query = `
      INSERT INTO appointments
      (name, phone, email, service, appointment_date, appointment_time)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;

    const values = [name, phone, email, service, date, time];

    const result = await pool.query(query, values);

    res.status(201).json({
      success: true,
      message: "Appointment saved successfully",
      data: result.rows[0]
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: "Failed to save appointment"
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM appointments ORDER BY created_at DESC"
    );

    res.json({
      success: true,
      data: result.rows
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: "Failed to fetch appointments"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM appointments WHERE id = $1", [id]);

    res.json({
      success: true,
      message: "Appointment deleted successfully"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: "Failed to delete appointment"
    });
  }
});

router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      "UPDATE appointments SET status = $1 WHERE id = $2 RETURNING *",
      [status, id]
    );

    res.json({
      success: true,
      message: "Appointment status updated successfully",
      data: result.rows[0]
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: "Failed to update appointment status"
    });
  }
});

module.exports = router;
const express = require("express");

const Customer = require("../models/customer");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


// ADD CUSTOMER
router.post("/", authMiddleware, async (req, res) => {
  try {

    const customer = new Customer(req.body);

    await customer.save();

    res.status(201).json({
      message: "Customer Added",
      customer,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// GET ALL CUSTOMERS
router.get("/", authMiddleware, async (req, res) => {
  try {

    const customers = await Customer.find();

    res.json(customers);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// UPDATE CUSTOMER
router.put("/:id", authMiddleware, async (req, res) => {
  try {

    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(customer);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// DELETE CUSTOMER
router.delete("/:id", authMiddleware, async (req, res) => {
  try {

    await Customer.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Customer Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;
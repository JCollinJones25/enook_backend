const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");

// routes
//index
router.get("/", async (req, res, next) => {
  try {
    res.json(await db.Book.find({}));
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

//show
router.get("/:id", async (req, res, next) => {
  try {
    res.json(await db.Book.findById(req.params.id));
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

//create
router.post("/", async (req, res, next) => {
  try {
    res.json(await db.Book.create(req.body));
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

//update
// router.put("/:id", (req, res) => {
//   products[req.params.id] = req.body;
//   res.redirect(`/library/${req.params.id}`);
// });

//delete
router.delete('/:id', async (req, res, next) => {
  try {
    res.json(await db.Book.findByIdAndRemove(req.params.id));
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;

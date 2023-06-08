const { Schema, model } = require("mongoose");

const mealSchema = new Schema({
  id: String,
  name: String,
  description: String,
  price: Number,
});

const Meal = model("Meal", mealSchema);

module.exports = Meal;

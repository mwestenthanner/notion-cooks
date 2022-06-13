const express = require("express");
const serverless = require("serverless-http");
const getRecipes = require('../services/notion');

const app = express();
const router = express.Router();

router.get('/recipes', async(req, res) => {
  const recipes = await getRecipes()
  res.json(recipes)
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
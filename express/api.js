const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors');
const { getRecipes, getRecipeContent } = require('../services/notion');

const app = express();
const router = express.Router();

router.get('/recipes', async(req, res) => {
  const recipes = await getRecipes()
  res.json(recipes)
});

router.get('/recipe/:recipeId', async(req, res) => {
  const recipeContent = await getRecipeContent(req.params.recipeId)
  res.json(recipeContent)
});

app.use(cors({
  origin: '*'
}));

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
require("../config/db.connection");

module.exports = {
  Recipe: require("./recipe_model"),
  Review: require("./review_model"),
};
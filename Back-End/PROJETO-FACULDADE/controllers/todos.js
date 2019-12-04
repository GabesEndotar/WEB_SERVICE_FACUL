const todos = require('../db_apis/todos.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);
    context.location_id = parseInt(req.query.location_id, 10);
    context.departments_id = parseInt(req.query.departments_id, 10);
    context.country_id = parseInt(req.query.country_id, 10);
    const rows = await todos.find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;
const departments = require('../db_apis/departments.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);
    context.department_id = parseInt(req.query.department_id, 10);

    const rows = await departments.find(context);

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

function getDepartmentsFromRec(req) {
  const departments = {
    department_id: req.body.department_id,
    department_name: req.body.department_name,
    manager_id: req.body.manager_id,
    location_id: req.body.location_id
  };

  return departments;
}

async function post(req, res, next) {
  try {
    let departments = getDepartmentsFromRec(req);

    departments = await departments.create(departments);

    res.status(201).json(departments);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;

async function put(req, res, next) {
  try {
    let departments = getDepartmentsFromRec(req);

    departments.department_id = parseInt(req.params.id, 10);

    departments = await departments.update(departments);

    if (departments !== null) {
      res.status(200).json(departments);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

module.exports.put = put;

async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);

    const success = await departments.delete(id);

    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

module.exports.delete = del;

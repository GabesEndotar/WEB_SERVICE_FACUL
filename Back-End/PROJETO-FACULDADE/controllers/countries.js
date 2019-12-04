const countries = require('../db_apis/countries.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);
    context.country_id = parseInt(req.query.country_id, 10);
    const rows = await countries.find(context);

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

function getCountriesFromRec(req) {
  const countries = {
    country_name: req.body.country_name,
    region_id: req.body.region_id
  };

  return countries;
}

async function post(req, res, next) {
  try {
    let countries = getCountriesFromRec(req);

    countries = await countries.create(countries);

    res.status(201).json(countries);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;

async function put(req, res, next) {
  try {
    let countries = getCountriesFromRec(req);

    countries.countries_id = parseInt(req.params.id, 10);

    countries = await countries.update(countries);

    if (countries !== null) {
      res.status(200).json(countries);
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

    const success = await countries.delete(id);

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

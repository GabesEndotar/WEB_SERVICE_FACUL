const locations = require('../db_apis/locations.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);
    context.location_id = parseInt(req.query.location_id, 10);
    const rows = await locations.find(context);

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

function getLocationsFromRec(req) {
  const locations = {
    street_address: req.body.street_address,
    postal_code: req.body.postal_code,
    city: req.body.city,
    state_province: req.body.state_province,
    country_id: req.body.country_id
  };

  return locations;
}

async function post(req, res, next) {
  try {
    let locations = getLocationsFromRec(req);

    locations = await locations.create(locations);

    res.status(201).json(locations);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;

async function put(req, res, next) {
  try {
    let locations = getLocationsFromRec(req);

    locations.locations_id = parseInt(req.params.id, 10);

    locations = await locations.update(locations);

    if (locations !== null) {
      res.status(200).json(locations);
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

    const success = await locations.delete(id);

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

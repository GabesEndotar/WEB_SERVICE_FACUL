const oracledb = require('oracledb');
const database = require('../services/database.js');

const baseQuery =
`select 
    location_id "location_id",
    street_address "street_address",
    postal_code "postal_code",
    city "city",
    state_province "state_province",
    country_id "country_id"
from hr.locations`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.location_id = context.id;

    query += `\n where location_id = :location_id`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

const createSql =
`insert into hr.locations (
    street_address,
    postal_code,
    city,
    state_province,
    country_id
  ) values (
    :street_address,
    :postal_code,
    :city,
    :state_province,
    :country_id
  ) returning location_id
  into :location_id`;

async function create(emp) {
  const locations = Object.assign({}, emp);

  locations.location_id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }

  const result = await database.simpleExecute(createSql, employee);

  locations.location_id = result.outBinds.location_id[0];

  return locations;
}

module.exports.create = create;

const updateSql =
  `update hr.locations
  set street_address = :street_address,
  postal_code = :postal_code,
  city = :city,
  state_province = :state_province,
  country_id = :country_id
  where location_id = :location_id`;

async function update(emp) {
  const locations = Object.assign({}, emp);
  const result = await database.simpleExecute(updateSql, locations);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return locations;
  } else {
    return null;
  }
}

module.exports.update = update;

const deleteSql =
` begin
  delete from job_history
  where location_id = :location_id;
  delete from hr.locations
  where location_id = :location_id;
  :rowcount := sql%rowcount;
end;`

async function del(id) {
  const binds = {
    employee_id: id,
    rowcount: {
      dir: oracledb.BIND_OUT,
      type: oracledb.NUMBER
    }
  }
  const result = await database.simpleExecute(deleteSql, binds);

  return result.outBinds.rowcount === 1;
}

module.exports.delete = del;
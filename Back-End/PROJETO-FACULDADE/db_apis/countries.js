const oracledb = require('oracledb');
const database = require('../services/database.js');

const baseQuery =
 `SELECT country_id "country_id",
  country_name "country_name",
  region_id "region_id"
  FROM HR.countries`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.country_id = context.id;

    query += `\n where country_id = :country_id`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

const createSql =
 `INSERT INTO HR.countries (
    country_name,
    region_id)
    VALUES (
    :country_name,
    :region_id)
    RETURNING country_id
    INTO country_id`;

async function create(emp) {
  const countries = Object.assign({}, emp);

  countries.country_id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }

  const result = await database.simpleExecute(createSql, countries);

  countries.country_id = result.outBinds.country_id[0];

  return countries;
}

module.exports.create = create;

const updateSql =
 `UPDATE HR.countries 
    SET country_name = :country_name,
    region_id = :region_id
    WHERE country_id = :country_id`;

async function update(emp) {
  const countries = Object.assign({}, emp);
  const result = await database.simpleExecute(updateSql, countries);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return countries;
  } else {
    return null;
  }
}

module.exports.update = update;

const deleteSql =
 `begin
    delete from job_history
    where country_id = :country_id;
    delete from hr.countries
    where country_id = :country_id;
    :rowcount := sql%rowcount;
  end;`

async function del(id) {
  const binds = {
    country_id: id,
    rowcount: {
      dir: oracledb.BIND_OUT,
      type: oracledb.NUMBER
    }
  }
  const result = await database.simpleExecute(deleteSql, binds);

  return result.outBinds.rowcount === 1;
}

module.exports.delete = del;
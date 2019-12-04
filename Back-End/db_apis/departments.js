const oracledb = require('oracledb');
const database = require('../services/database.js');

const baseQuery =
 `SELECT department_id "department_id",
  department_name "department_name",
  manager_id "manager_id",
  location_id "location_id" 
  FROM HR.departments`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.department_id = context.id;

    query += `\n where department_id = :department_id`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

const createSql =
 `INSERT INTO HR.departments (
    department_name,
    manager_id,
    location_id
    ) VALUES (
    :department_name,
    :manager_id,
    :location_id
    ) RETURNING department_id
    INTO :department_id`;

async function create(emp) {
  const departments = Object.assign({}, emp);

  departments.department_id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }

  const result = await database.simpleExecute(createSql, departments);

  departments.department_id = result.outBinds.department_id[0];

  return departments;
}

module.exports.create = create;

const updateSql =
 `UPDATE HR.departments
    set department_name = :department_name,
    manager_id = :manager_id,
    location_id = :location_id
    where department_id = :department_id`;

async function update(emp) {
  const departments = Object.assign({}, emp);
  const result = await database.simpleExecute(updateSql, departments);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return departments;
  } else {
    return null;
  }
}

module.exports.update = update;

const deleteSql =
 `begin
    delete from job_history
    where department_id = :department_id;
    delete from HR.departments
    where department_id = :department_id;
    :rowcount := sql%rowcount;
  end;`

async function del(id) {
  const binds = {
    department_id: department_id,
    rowcount: {
      dir: oracledb.BIND_OUT,
      type: oracledb.NUMBER
    }
  }
  const result = await database.simpleExecute(deleteSql, binds);

  return result.outBinds.rowcount === 1;
}

module.exports.delete = del;
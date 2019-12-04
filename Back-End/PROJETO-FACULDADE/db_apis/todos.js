const oracledb = require('oracledb');
const database = require('../services/database.js');


const baseQuery =
`SELECT func.first_name||' '||func.last_name as NOME,
       dep.department_name DEPARTAMENTO,
       locais.city CIDADE,
       paises.country_name PAIS
from hr.countries paises,
     hr.locations locais,
     hr.departments dep,
     hr.employees func
where 1=1
and   func.department_id = dep.department_id
and   dep.location_id = locais.location_id
and   locais.country_id = paises.country_id

Order by nome,departamento,cidade,pais`;

async function find(context) {
    let query = baseQuery;
    const binds = {};
  
    if (context.department_id) {
      binds.department_id = context.department_id;
         
        query += '\n and department_id = :department_id';
    }
    if (context.location_id) {
        binds.location_id = context.location_id;
     
        query += '\n and location_id = :location_id';
      }          
    
      if (context.country_id) {
        binds.country_id = context.country_id;
     
        query += '\n and country_id = :country_id';
      }

    
    const result = await database.simpleExecute(query, binds);
  
    return result.rows;
    }
  module.exports.find = find;
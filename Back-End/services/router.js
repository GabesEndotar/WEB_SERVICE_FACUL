const express = require('express');
const router = new express.Router();
const employees = require('../controllers/employees.js');
const departments = require('../controllers/departments.js');
const countries = require('../controllers/countries.js');
const locations = require('../controllers/locations.js');
const todos = require('../controllers/todos.js');
 
router.route('/employees/:id?')
  .get(employees.get)
  .post(employees.post)
  .put(employees.put)
  .delete(employees.delete);

router.route('/departments/:id?')
  .get(departments.get)
  .post(departments.post)
  .put(departments.put)
  .delete(departments.delete);

router.route('/countries/:id?')
  .get(countries.get)
  .post(countries.post)
  .put(countries.put)
  .delete(countries.delete);

router.route('/locations/:id?')
  .get(locations.get)
  .post(locations.post)
  .put(locations.put)
  .delete(locations.delete);

router.route('/todos/')
  .get(todos.get)
  
  
module.exports = router;
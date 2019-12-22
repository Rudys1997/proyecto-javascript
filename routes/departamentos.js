const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all departamentos
router.get('/departamentos/', (req, res) => {
  mysqlConnection.query('SELECT * FROM departamentos', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET A departamentos
router.get('/departamentos/:id_depto', (req, res) => {
  const { id_depto } = req.params; 
  mysqlConnection.query('SELECT * FROM departamentos WHERE id_depto = ?', [id_depto], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE A departamentos
router.delete('/departamentos/:id_depto', (req, res) => {
  const { id_depto } = req.params; 
  mysqlConnection.query('DELETE * FROM departamentos WHERE id_depto = ?', [id_depto], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'departamentos Deleted'});
    } else {
      console.log(err);
    }
  });
});


// INSERT A departamentos
router.post('/departamentos',   (req, res) => {
  
  mysqlConnection.query('INSERT INTO departamentos SET ?', [req.body], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'departamentos insertado'});
    } else {
      console.log(err);
    }
  });
 

});
// Update A departamentos
router.put('/departamentos/:id', (req, res) => {
  const {nombre_depto} = req.body;
  const { id_depto } = req.params;
  const query= "UPDATE departamentos SET nombre_depto = ? WHERE id_depto = ?"
  mysqlConnection.query(query, [nombre_depto, id_depto], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'departamentos Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
const mysqlConnection  = require('../database.js');
const {Request,Response} = require('express');


class departamentos {

// GET all departamentos
 GetAll (req=Request, res=Response) {
    mysqlConnection.query('SELECT * FROM departamentos', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  };
  
  // GET A departamentos
  GetOne (req=Request, res=Response){
    const { id_depto } = req.params; 
    mysqlConnection.query('SELECT * FROM departamentos WHERE id_depto = ?', [id_depto], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  };
  
  

}

const departamentos = new departamentos();

export default departamentos;

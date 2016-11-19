var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/hisaac';

router.get('/', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    if(err){
      console.log('connection to server error:', err);
      res.sendStatus(500);
    }

    client.query('SELECT * FROM todos ORDER BY id DESC;', function(err, result){
      done(); // close the connection

      if(err){
        console.log('select query error:', err);
        res.sendStatus(500);
      }
      res.send(result.rows);
    }); // client.query
  }); // pg.connect
}); // router.get

router.post('/', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    if(err){
      console.log('connection to server error:', err);
      res.sendStatus(500);
    }

    client.query("INSERT INTO todos (title) VALUES ('new todo');", function(err, result){
      done();

      if(err){
        console.log('insert query error:', err);
        res.sendStatus(500);
      }
    }); // client.query
  }); // pg.connect
  res.sendStatus(200);
}); // router.post

router.put('/toggle/:id', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    if(err){
      console.log('connection to server error:', err);
      res.sendStatus(500);
    }

    client.query(
      "UPDATE todos SET completed = NOT completed WHERE id=$1",
      [req.params.id],
      function(err, result){
        done();
        if(err){
          console.log('put query error:', err);
        }
      }
    ); // client.query
  }); // pg.connect
}); // router.put

router.put('/:newTitle/:id', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    if(err){
      console.log('connection to server error:', err);
      res.sendStatus(500);
    }

    client.query(
      "UPDATE todos SET title=$1 WHERE id=$2",
      [req.params.newTitle, req.params.id],
      function(err, result){
        done();
        if(err){
          console.log('put query error:', err);
        }
      }
    ); // client.query
  }); // pg.connect
  res.sendStatus(200);
}); // router.put

router.delete('/:id', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    if(err){
      console.log('connection to server error:', err);
      res.sendStatus(500);
    }

    client.query(
      "DELETE FROM todos WHERE id = '" + req.params.id + "';",
      function(err, result){
        if(err){
          console.log('delete query error:', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      }
    ); // client.query
  }); // pg.conect
}); // router.delete

module.exports = router;

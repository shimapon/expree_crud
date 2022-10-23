import express from "express";
import * as mysql from "promise-mysql";
import config from "./config";

const app = express();
// body-parser settings
app.use(express.json());
// Content-Typeがapplication/x-www-form-urlencodedのデータを取得する
app.use(express.urlencoded({ extended: true }));

app.listen(config.port, () => {
  console.log(`Start on port ${config.port}`);
});

const connection = async () => {
  return await mysql.createConnection(config.db);
};

app.get("/movie", (req, res) => {
  connection()
    .then((connection) => {
      const result = connection.query("SELECT * FROM MOVIE");
      connection.end();
      return result;
    })
    .then((rows) => {
      res.send(rows);
    });
});

// movie単一
app.get("/movie/:id", (req, res) => {
  const movieId = req.params.id;
  connection()
    .then((connection) => {
      const result = connection.query("SELECT * FROM MOVIE WHERE ID = ?", [
        movieId,
      ]);
      connection.end();
      return result;
    })
    .then((rows) => {
      res.send(rows);
    });
});

// movie追加処理
app.put("/movie", (req: express.Request, res: express.Response) => {
  console.log(req.body);

  const name = req.body.name;

  connection()
    .then((connection) => {
      const result = connection.query("INSERT INTO MOVIE (NAME) VALUES (?)", [
        name,
      ]);
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows);
    });
});

// movie更新処理
app.patch("/movie/:id", (req, res) => {
  const movieId = req.params.id;
  const name = req.body.name;
  connection()
    .then((connection) => {
      const result = connection.query(
        "UPDATE MOVIE SET NAME = ? WHERE ID = ?",
        [name, movieId]
      );
      connection.end();
      return result;
    })
    .then((rows) => {
      res.send(rows);
    });
});

// movie削除処理
app.delete("/movie/:id", (req, res) => {
  const movieId = req.params.id;
  connection()
    .then((connection) => {
      const result = connection.query("DELETE FROM MOVIE WHERE ID = ?", [
        movieId,
      ]);
      connection.end();
      return result;
    })
    .then((rows) => {
      res.send(rows);
    });
});

import * as express from 'express';

const PORT = 1236;

const app = express()
app.get("/:id", (req, res) => {
  const id = parseInt(req.params["id"]);

  // TODO: Call fizz-server && buzz-server and aggregate
  res.send(`${id}`);
})

app.listen(PORT, () => {
  console.log(`fizzbuzz-server running on port ${PORT}`);
});

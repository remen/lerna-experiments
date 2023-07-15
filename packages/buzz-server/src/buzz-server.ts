import express from 'express';
import {LOGGER_MIDDLEWARE} from "@fizzbuzz/utils";

const PORT = 1235;

const app = express()
app.use(LOGGER_MIDDLEWARE);
app.get("/:id", (req, res) => {
    const id = parseInt(req.params["id"]);
    if (id % 5 == 0) {
        res.send("Buzz");
    } else {
        res.send(`${id}`);
    }
})
app.listen(PORT, () => {
    console.log(`buzz-server running on port ${PORT}`);
});

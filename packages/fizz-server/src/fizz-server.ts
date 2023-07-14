import * as express from 'express';
import {LOGGER_MIDDLEWARE} from "@fizzbuzz/utils";

const PORT = 1234;

const app = express();
app.use(LOGGER_MIDDLEWARE);
app.get("/:id", (req, res) => {
    const id = parseInt(req.params["id"]);
    if (id % 3 == 0) {
        res.send("Fizz");
    } else {
        res.send(`${id}`);
    }
})
app.listen(PORT, () => {
    console.log(`fizz-server running on port ${PORT}`);
});

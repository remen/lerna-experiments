import express from 'express';
import {asyncHandler, LOGGER_MIDDLEWARE} from "@fizzbuzz/utils";
import {getFizzBuzz} from "./services/fizzbuzz-service";

const PORT = 1236;

const app = express()
app.use(LOGGER_MIDDLEWARE);

app.get("/:id", asyncHandler(async (req) => {
    const n = parseInt(req.params["id"]);
    return await getFizzBuzz(n);
}));

app.listen(PORT, () => {
    console.log(`fizzbuzz-server running on port ${PORT}`);
});

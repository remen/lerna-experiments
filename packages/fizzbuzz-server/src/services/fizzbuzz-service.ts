import {getFizz} from "../clients/fizz-client";
import {getBuzz} from "../clients/buzz-client";

export async function getFizzBuzz(n: number) {
    const [fizz, buzz] = await Promise.all([
        getFizz(n),
        getBuzz(n)
    ]);

    let result = "";
    let s = String(n);
    if (fizz !== s) {
        result += fizz;
    }
    if (buzz !== s) {
        result += buzz;
    }
    if (result === "") {
        result = s
    }
    return result;
}
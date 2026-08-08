const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

function factorial(n) {
    let result = 1n;

    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }

    return result;
}

rl.on("line", (line) => {
    const n = parseInt(line);
    console.log(factorial(n).toString());
    rl.close();
});
rl.on("close", () => process.exit(0));
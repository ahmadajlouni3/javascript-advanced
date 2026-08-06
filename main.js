const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

// function* squares() { ... }
function* squares() {
    let start = 1;
    let num = 3;
    
    while (true) {
        yield start;

        start += num;
        num += 2;

    }
    
}

rl.on("line", (line) => {
    const n = parseInt(line);
    const gen = squares();
    for (let i = 0; i < n; i++) console.log(gen.next().value);
    rl.close();
});
rl.on("close", () => process.exit(0));

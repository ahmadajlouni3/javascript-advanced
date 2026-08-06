const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

    class Animal {
        kind() {
            return "animal"
        }
    }

    class Dog extends Animal {
        kind() {
            return "dog"
        }
    }

    class Puppy extends Dog {}

    const puppy = new Puppy();
    console.log(puppy.kind());
    console.log(puppy.__proto__.constructor.name);
    console.log(puppy.__proto__.__proto__.constructor.name)
    console.log(puppy.__proto__.__proto__.__proto__.constructor.name)

rl.on("line", (line) => {
    const n = parseInt(line);
    

    // console.log(puppy.prototype.__proto__.kind());
    // console.log(puppy.prototype.__proto__.prototype.__proto__.kind());
    // console.log(puppy.prototype.__proto__.prototype.__proto__.prototype.__proto__.kind());


    rl.close();
});
rl.on("close", () => process.exit(0));

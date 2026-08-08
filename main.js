const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const lines = [];

class EvenRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;

        return {
            next() {
                // تخطَّ الأعداد الفردية
                while (current < end && current % 2 !== 0) {
                    current++;
                }

                // انتهى النطاق
                if (current >= end) {
                    return {
                        value: undefined,
                        done: true
                    };
                }

                // خزّن العدد الزوجي الحالي
                const value = current;

                // انتقل إلى الرقم التالي
                current++;

                return {
                    value,
                    done: false
                };
            }
        };
    }
}

rl.on("line", (line) => {
    lines.push(line);
    if (lines.length === 2) {
        const start = parseInt(lines[0]);
        const end = parseInt(lines[1]);
        for (const n of new EvenRange(start, end)) console.log(n);
        rl.close();
    }
});
rl.on("close", () => process.exit(0));
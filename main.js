process.stdin.on("data", (chunk) => {
    const inputData = chunk.toString().trim().split("\n");
    const proxyObj = new Proxy({}, {
        get(obj, prop) {
            return obj[prop];
        },

        set(obj, prop, value) {
            console.log(`set ${prop}=${value}`);

            obj[prop] = value;
            return true;
        }
    });

    const items = inputData.map(item => item.trim().split("="));
    
    for ( let item of items ) {
        proxyObj[item[0]] = item[1];
    }

    console.log(proxyObj.color);

})
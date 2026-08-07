function memoize(fn) {
    const cache = new WeakMap();
    return function(obj) {
        // if cache has obj, return cache.get(obj)
        if (cache.has(obj)) return cache.get(obj);
        // else compute, store, return

        const result = fn(obj);

        return result;
    };
}

function expensive(obj) {
    return obj.x * 2;
}

const memo = memoize(expensive);
const input = { x: 5 };
console.log(memo(input));
console.log(memo(input));
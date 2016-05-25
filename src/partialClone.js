export function partialClone(obj, properties) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (!Array.isArray(properties)) {
        throw new TypeError("Properties are not array");
    }
    var cloneObj = Object.create(obj);
    properties.forEach(function(prop) {
        if (typeof(obj[prop]) === "object") {
            cloneObj[prop] = Object.create(obj[prop]);
        }
    });
    return cloneObj;
}
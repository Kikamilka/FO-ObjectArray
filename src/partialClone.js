export { partialClone };

function partialClone(obj, properties) {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}	
	var cloneObj = Object.create(obj);
	properties.forEach(function(prop) {
		if (typeof(obj[prop]) === "object") {
			cloneObj[prop] = Object.create(obj[prop]); 
		} 
	});
  return cloneObj;
}
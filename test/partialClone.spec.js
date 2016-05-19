import { partialClone } from "../src/partialClone";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Partial clone", function () {

	let obj = {prop1: 1, prop2: {subprop: 1}, prop3: {subprop: 1}};
	let clone = partialClone(obj, ["prop2"]);

	it("Clone.prop2.subprop = 3", function () {
		clone.prop2.subprop = 3;
		expect(clone.prop2.subprop).to.be.equal(3);
		expect(obj.prop2.subprop).to.be.equal(1);
	});

	it("Clone.prop3.subprop = 3", function () {
		clone.prop3.subprop = 3;
		expect(clone.prop3.subprop).to.be.equal(3);
		expect(obj.prop3.subprop).to.be.equal(3);
	});

	it("Clone.prop1 = 3", function () {		
		clone.prop1 = 3;
		expect(clone.prop1).to.be.equal(3);
		expect(obj.prop1).to.be.equal(1);
	});

	it.skip("(with *) Clone.prop1 = 3", function () {	
		clone.prop1 = 3;
		expect(clone.prop1).to.be.equal(3);
		expect(obj.prop1).to.be.equal(3);
	});
});
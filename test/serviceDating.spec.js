import {ServiceDating} from "../src/serviceDating";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Dating service functions", function () {
	function Person(name, age, sex, city) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.city = city;
	};
	var petya = new Person("Petya", 20, "male", "Moskow");
	var vasya = new Person("Vasya", 27, "male", "Moskow");
	var masha = new Person("Masha", 18, "female", "Moskow");
	var egor = new Person("Egor", 24, "male", "Vladivostok");
	var lera = new Person("Lera", 16, "female", "Saratov");
	var roma = new Person("Roma", 13, "male", "Saratov");

	var people = new ServiceDating([petya, vasya, masha, egor, lera, roma]);

	it("Name man who is younger than 25 and older than 18 years old", function () {
		var names = people.filtered();
		expect(names.length).to.be.equal(2);
		expect(names).to.deep.equal(["Petya", "Egor"]);
	});

	people.printNames();

	it("List cities and people who lives there", function () {
		var list = people.listCity();
		expect(list["Moskow"].length).to.be.equal(3);
		expect(list["Saratov"].length).to.be.equal(2);
		expect(list["Vladivostok"].length).to.be.equal(1);
	});

	it("List cities with sort by number people", function () {
		var listCityWithNumbers = people.sortListCityForPeople();
		expect(listCityWithNumbers.length).to.be.equal(3);
		expect(listCityWithNumbers[0]).to.deep.equal(["Moskow", 3]);
		expect(listCityWithNumbers[1]).to.deep.equal(["Saratov", 2]);
		expect(listCityWithNumbers[2]).to.deep.equal(["Vladivostok", 1]);
	});

	it("City when number of man and women is equal", function () {
		expect(people.cityEqualSex()).to.be.equal(true);
	});
});

export function ServiceDating(people) {
    this.people = people;
};

ServiceDating.prototype.filtered = function() {
    return this.people
        .filter(person => (person.age >= 18 && person.age <= 25 && person.sex == "male"))
        .map(person => person.name);
}

ServiceDating.prototype.printNames = function() {
    console.log(this.people.map(person => person.name).join(', '));
}

ServiceDating.prototype.listCity = function() {
    return this.people.reduce(function(prev, person) {
        if (prev[person.city] === undefined) {
            prev[person.city] = [];
        }
        prev[person.city].push(person);
        return prev;
    }, {});
}

ServiceDating.prototype.sortListCityForPeople = function() {
    var cities = [];
    var groupCities = this.listCity();
    for (var nameCity in groupCities) {
        cities.push([nameCity, groupCities[nameCity].length]);
    }
    return cities.sort((firstCity, secondCity) => firstCity[1] < secondCity[1]);
}

ServiceDating.prototype.cityEqualSex = function() {
    var listOfCity = createListCitySex(this.listCity());
    var result = listOfCity.some(item => item['male'] == item['female']);
    return result;
}

function createListCitySex(cities) {
    var listNumberEachSex = [];
    for (var key in cities) {
        var newMap = cities[key].reduce(function(prev, person) {
            if (prev.male === undefined || prev.female === undefined) {
                prev.male = 0;
                prev.female = 0;
            }
            if (person.sex == 'male') {
                prev.male++;
            } else {
                prev.female++;
            }
            return prev;
        }, {});
        listNumberEachSex.push(newMap);
    }
    return listNumberEachSex;
}
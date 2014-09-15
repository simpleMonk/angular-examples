"use strict";

function PersonFactory(){
    var Person = function (person) {
        this.name = person.name;
        this.department = person.department;
    };

    return Person;

}


module.exports = PersonFactory;
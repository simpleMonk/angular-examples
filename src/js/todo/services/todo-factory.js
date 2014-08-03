"use strict";

function TodoFactory() {
    var todoTitle, set, get;

    set = function (value) {
        todoTitle = value;
    };

    get = function () {
        return todoTitle;
    };

    return{
        set: set,
        get: get
    };

}

module.exports = TodoFactory;
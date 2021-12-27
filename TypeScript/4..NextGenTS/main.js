var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr2 = [100, 105, 5555, 666];
var arr = __spreadArray(['A1', 'B1'], arr2, true);
arr.map(function (e) { return console.log(e); });
var person = {
    name: 'MAX',
    age: '20'
};
// So here we will have the person all details with that we added person2 detail
var person2 = __assign(__assign({}, person), { city: 'utah' });
console.log(person);
console.log(person2);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumber = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(addedNumber);
var addTuple = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 60);
};
var addedNumber2 = addTuple(1, 2, 3);
console.log(addedNumber2);
var num1 = arr2[0], num2 = arr2[1], num = arr2.slice(2);
console.log(arr2, num1, num2, num);
var hometown = person2.city, age = person2.age;
console.log(hometown);
console.log(age);

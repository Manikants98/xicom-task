"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var candidates_1 = require("../controllers/candidates");
var route = (0, express_1.Router)();
var getTimeOfDay = function () {
    var currentTime = new Date().getHours();
    if (currentTime < 12) {
        return 'Good morning';
    }
    else if (currentTime < 18) {
        return 'Good afternoon';
    }
    else {
        return 'Good evening';
    }
};
route.get('/', function (req, res) {
    var greeting = getTimeOfDay();
    res.status(200).json("".concat(greeting, ", Welcome to the Xicon MERN Stack Task!"));
});
route.get('/candidates', candidates_1.getCandidatesFn);
route.post('/candidates', candidates_1.addCandidateFn);
route.put('/candidates', candidates_1.updateCandidateFn);
route.delete('/candidates', candidates_1.deleteCandidateFn);
exports.default = route;

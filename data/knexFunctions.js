const connect = require("./knexconfig");
exports.db = db = connect("cars");
exports.newCar = car => db.insert(car);

const User = require("../schema/user");
const mongoose = require("mongoose");

module.exports.addUser = (userParams) => {
    userParams["_id"] = new mongoose.Types.ObjectId();
    const user = new User(userParams);
    return user.save();
};

module.exports.listUser = (page, size) => {
    return User.find()
        .sort({ createdOn: -1 })
        .skip(Number(size) * Number(page))
        .limit(Number(size));
};

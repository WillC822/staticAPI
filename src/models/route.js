const db = require('./db');

//Create
exports.create = (payload, err, success) => {
    db.user.create(payload).then(success).catch(err);
}

//Find all
exports.findAll = (err, success) => {
    db.user.findAll().then(success).catch(err);
}

//Find a specific person
exports.find = (payload, err, success) => {
    db.user.find({
        where: {
            id: payload.id,
        },
        // find all relations in sequelize
        include: [{
            all: true,
            nested: true,
        }],
    }).then(success).catch(err);
}

//Update
exports.update = (payload, err, success) => {
    db.user.find({
        where: {
            id: payload.id,
        }
    }).then( (existingData) => {
        existingData.updateAttributes(payload).then(success).catch(err);
    }).catch(err);
}

//Destroy
exports.destroy = (payload, err, success) => {
    db.user.destroy({
        where: {
            id: payload.id,
        },
    }).then(success).catch(err);
}
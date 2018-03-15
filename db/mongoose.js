var mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect('mongodb://admin:onlyadmin@ds215089.mlab.com:15089/healthcamp_spa');

module.exports = {
  mongoose
};

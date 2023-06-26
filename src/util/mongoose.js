module.exports = {
  multipleMongooseToObject: (arr) => {
    return arr.map((data) =>
      data.toObject(),
    );
  },

  mongooseToObject: (obj) => {
    return obj.toObject();
  },
};

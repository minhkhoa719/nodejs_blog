const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1/f8_education_dev",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log("connect success");
  } catch (error) {
    console.log("connect failed");
  }
}

module.exports = { connect };

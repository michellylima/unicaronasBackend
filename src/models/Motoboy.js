const mongoose = require("mongoose");
const { baseURL } = require("../config/urls");

const MotoboySchema = new mongoose.Schema(
  {
    thumbnail: String,
    googleUID: String,
    name: String,
    phoneNumber: { type: String, unique: true, index: true, required: true },
    online: Boolean,
    status: String, // 'delivering' 'free'
    latitude: Number,
    longitude: Number,
    heading: Number,
    lastTimeOnline: Number,
    firebaseNotificationToken: String,
    cfp: String,
    CNHDocument: String,
    criminalRecord: String,
    profileImage: String,
    profileStatus: String, //analysing, created, block, awaitingPayment
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

MotoboySchema.virtual("thumbnail_url").get(function () {
  if (this.thumbnail === undefined) return null;

  return `${baseURL}/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Motoboy", MotoboySchema);

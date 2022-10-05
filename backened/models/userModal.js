const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,

      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

userModel.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

userModel.methods.comparePassword =async function (password, callback) {
  return await bcrypt.compare(password, this.password )
  
  
};

const User = mongoose.model("User", userModel);

module.exports = User;

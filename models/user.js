const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

userSchema.plugin(passportLocalMongoose, {
  errorMessages: {
    UserExistsError: "そのユーザー名は既に登録済です",
    MissingPasswordError: "パスワードを入力してください",
    AttemptTooSoonError:
      "アカウントがロックされています。時間を空けて再度お試しください",
    TooManyAttemptsError: "アカウントをロックしました",
    NoSaltValueStoredError: "認証ができませんでした",
    IncorrectPasswordError: "ユーザー名またはパスワードが間違っています",
    IncorrectUsernameError: "ユーザー名またはパスワードが間違っています",
    MissingUsernameError: "そのユーザーは存在しません",
  },
});

module.exports = mongoose.model("User", userSchema);

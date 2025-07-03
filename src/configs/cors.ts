export const corsOptions = {
  origin: function (origin: any, callback: any) {
    // Cho phép việc gọi API bằng POSTMAN trên môi trường dev,
    // Thông thường khi sử dụng postman thì cái origin sẽ có giá trị là undefined
    if (!origin && process.env.BUILD_MODE === "dev") {
      return callback(null, true);
    }

    return callback(null, true);
  },

  // Some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,

  // CORS sẽ cho phép nhận cookies từ request
  credentials: true,
};

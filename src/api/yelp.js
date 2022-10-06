import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer aZZuIzOUMJ52fsDieRnXvlUhn6IOWCuS58wwVkSYJpm8g0wN-i7GlqFyhdRpiMgY6ZEK-SyBSvBYxHFcdKKKEnALUZiyCxibII5bGBlyjx7r0N4jA2yzCQnopE09Y3Yx",
  },
});

import authHanler from "./utils/authorization.js";

const init = () => {
  authHanler();
};
document.addEventListener("DOMContentLoaded", init);

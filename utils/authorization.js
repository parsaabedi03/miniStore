import { getCookie } from "./cookie.js";

const authHanler = () => {
  const cookie = getCookie();
  const url = location.href;

  if (
    (cookie && url.includes("auth")) ||
    (!cookie && url.includes("dashboard"))
  ) {
    location.assign("index.html");
    return false;
  }
};

export default authHanler;

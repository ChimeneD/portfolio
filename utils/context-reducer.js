import Cookies from "js-cookie";
// import toast from "react-hot-toast";
import { loadTheme, getCurrentTheme } from "./css-theme";

export const storeReducer = (state, action) => {
    switch (action.type) {
      case "dark_mode_off": {
        Cookies.set("darkMode", "OFF");
        loadTheme(getCurrentTheme());
        return { ...state, darkMode: false };
      }
      case "dark_mode_on": {
        Cookies.set("darkMode", "ON");
        loadTheme(getCurrentTheme());
        return { ...state, darkMode: true };
      }
    }
}

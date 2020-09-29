import { red } from "@material-ui/core/colors";
import { atom } from "recoil";
import { THEME } from "./keys";

export const themeState = atom({
    key: THEME,
    default: localStorage.getItem('@theme') || {
        mode: 'light',
        color: red[500]
    }
});
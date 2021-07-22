import {ThemeOptions} from "@material-ui/core";
import {purple, common} from "@material-ui/core/colors";

export const lightTheme: ThemeOptions = {
    /* theme properties you want to override, e.g: */
    palette: {
        type: 'light', // We want to easily enable multiple themes
        primary: {
            main: common.white,
        },
        secondary: {
            main: purple['500'],
        },
    }
}

/* A dark theme is just as simple! */

export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: common.black,
        },
        secondary: {
            main: purple['500'],
        },
    }
}

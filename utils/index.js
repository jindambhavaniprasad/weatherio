
import * as Font from 'expo-font';

export const colors = {
    PRIMARY_COLOR: '#ff304f',
    SECONDARY_COLOR: '#002651',
    BORDER_COLOR: '#dbdbdb'
}

export const fetchFonts = () => {
    return Font.loadAsync({
        'gotham-bold': require('../assets/fonts/GothamBold.ttf'),
        'gotham-book': require('../assets/fonts/GothamBook.ttf'),
        'gotham-medium': require('../assets/fonts/GothamMedium.ttf')
    });
};

export const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export const ERROR_TEXT = 'An Error Occured or Location permission not granted. Please try again';
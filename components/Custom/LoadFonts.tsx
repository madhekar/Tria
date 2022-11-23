import * as Font from 'expo-font';

const usFonts = async () =>
   await Font.loadAsync({
    'Lato-Bold': require("../../assets/fonts/Lato-Bold.ttf"),
    'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
   });

export default usFonts;   
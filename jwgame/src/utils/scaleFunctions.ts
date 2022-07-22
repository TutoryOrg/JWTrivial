import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number): number => (windowWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number): number => (windowHeight / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5): number => size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale, windowWidth, windowHeight};

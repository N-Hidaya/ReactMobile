import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

const orientation = () => {
    const {height, width} = useDimensions().window;
    const landscape = width > height;
    return { landscape};
};

export default orientation;
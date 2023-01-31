import { ImageSourcePropType } from "react-native";

export interface SettingProps {
    id: number;
    title: string;
    subTitle: string | undefined;
    type: string;
}

export interface SettingPropsList{
    data: Array<SettingProps>;
}
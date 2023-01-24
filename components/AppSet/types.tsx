import { ImageSourcePropType } from "react-native";

export interface SettingProps {
    id: number;
    title: string;
    subTitle: string | undefined;
}

export interface SettingPropsList{
    data: Array<SettingProps>;
}
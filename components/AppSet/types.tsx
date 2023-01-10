export interface SettingProps {
    id: number;
    title: string;
    subTitle: string;
    // onPress: () => void;
}

export interface SettingPropsList{
    data: Array<SettingProps>;
}

/* export const settingOptions = [
    {id: 1, title: 'user name' , subTitle: 'bhalchandra', onPress: () => {}},
    {id: 2, title: 'avatar/ image' , subTitle: null, onPress:() => {}},
    {id: 3, title: 'city' , subTitle: 'san diego', onPress:() => {}},
    {id: 4, title: 'state' , subTitle: 'california', onPress:() => {}},
    {id: 5, title: 'country' , subTitle: 'United States', onPress:() => {}},
    {id: 6, title: 'operation start time' , subTitle: '1800', onPress:() => {}},
    {id: 7, title: 'operation end time' , subTitle: '0800', onPress:()=> {}},
    {id: 8, title: 'use ML' , subTitle: 'true', onPress:() => {}}
]; */
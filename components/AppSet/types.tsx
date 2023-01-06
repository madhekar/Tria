export interface SettingProps {
    id: number;
    title: string;
    subTitle: string;
    onPress: () => void;
}

export interface SettingPropsList{
    data: Array<SettingProps>;
}

const settingOptions = [
    {id: 1, title: 'user name' , subtitle: 'bhalchandra', onPress:() => {}},
    {id: 2, title: 'avatar/ image' , subtitle: null, onPress:() => {}},
    {id: 3, title: 'city' , subtitle: 'san diego', onPress:() => {}},
    {id: 4, title: 'state' , subtitle: 'california', onPress:() => {}},
    {id: 5, title: 'country' , subtitle: 'United States', onPress:() => {}},
    {id: 6, title: 'operation start time' , subtitle: '1800', onPress:() => {}},
    {id: 7, title: 'operation end time' , subtitle: '0800', onPress:()=> {}},
    {id: 8, title: 'use ML' , subtitle: 'true', onPress:() => {}}
];
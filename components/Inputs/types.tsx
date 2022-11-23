export interface InputProps{
    id: number;
    deviceid: string;
    title: string;
    unit: string;
    value: number;
    timestamp: string;
    art: {
        icon: string;
        background: string;
    };
};

export interface InputSectionProps{
    data: Array<InputProps>;
};

export interface InputAviProps{
    icon: any;
    background: string;
};

export interface DeviceProps {
    id: number;
    deviceNo: string;
    alias: string;
    highValue: string;
    lowValue: string;
    accuracy: string;
    art: {
        icon: string;
        background: string;
    };
};

export interface DeviceSectionProps{
    data: Array<DeviceProps>;
};

export interface DeviceAviProps{
    icon: any;
    background: string;
};
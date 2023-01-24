
 export default interface DeviceValueProps{
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

export const DeviceLimits = [ 100.0, 81.0, 80.0, 40.0, 
                              100.0, 81.0, 60.0, 20.0, 
                              900.0, 500.0, 300.0, 0.0 ];

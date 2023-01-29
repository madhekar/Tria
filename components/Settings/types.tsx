
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

export const DeviceLimits = [ 100.0, 81.0, 80.0, 0.0, 
                              90.0, 60.0, 50.0, 20.0, 
                              200.0, 100.0, 30.0, 0.0 ];

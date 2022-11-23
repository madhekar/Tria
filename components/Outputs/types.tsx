export interface OutputProps{
    id: number;
    name: string;
    unit: string;
    value: string;
    art: {
        icon: string;
        background: string;
    };
};

export interface OutputSectionProps{
    data: Array<OutputProps>;
};

export interface OutputAviProps{
    icon: any;
    background: string;
};
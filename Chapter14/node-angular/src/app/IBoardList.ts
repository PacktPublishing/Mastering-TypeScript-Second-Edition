export interface IBoardSizeItem {
    volume: number;
    length: number;
    width: number;
    sail_min: string;
    sail_max: string;
}

export interface IBoardType {
    board_type: string;
}

export interface IBoardListItem {
    name: string;
    description?: string;
    image?: string;
    long_description?: string;
    board_types?: IBoardType [];
    sizes?: IBoardSizeItem [];
}

export interface IManufacturer {
    manufacturer: string;
    manufacturer_logo: string;
    boards?: IBoardListItem[];
}
export interface IRegionState {
    selectedRegion: string;
    regionDropdownList: string[];
}

export const initialRegionState: IRegionState = {
    selectedRegion: '',
    regionDropdownList: ['Europe', 'Asia']
}
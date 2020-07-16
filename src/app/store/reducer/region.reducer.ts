import { initialRegionState, IRegionState } from '../state/region.state';
import { RegionActions, ERegionAction } from '../action/region.action';

export const regionReducer = (state = initialRegionState, action: RegionActions): IRegionState => {
    switch (action.type) {
        case ERegionAction.SetSelectedRegion: {
            return {
                ...state,
                selectedRegion: action.payload
            };
        }
        default:
            return state;
    }
};

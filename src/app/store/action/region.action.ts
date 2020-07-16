import { Action } from '@ngrx/store';

export enum ERegionAction {
    GetRegions = '[Region] Get Regions',
    GetSelectedRegions = '[Region] Get Selected Region',
    SetSelectedRegion = '[Region] Set Selected Region'
}

export class GetRegions implements Action {
    public readonly type = ERegionAction.GetRegions;
}

export class GetSelectedRegion implements Action {
    public readonly type = ERegionAction.GetSelectedRegions;
}

export class SetSelectedRegion implements Action {
    public readonly type = ERegionAction.SetSelectedRegion;
    constructor(public payload: string) { }
}

export type RegionActions = GetRegions | SetSelectedRegion | GetSelectedRegion;

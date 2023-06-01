import { TResort } from "./resort.model"

export type TLocation = {
    headerImgUrl : string,
    headerLogoUrl : string,
    locationName : string,
    locationDescription : string,
    resorts : TResort[]
}
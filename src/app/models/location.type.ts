import { TResort } from "./resort.type"

export type TLocation = {
    headerImgUrl : string,
    headerLogoUrl : string,
    locationName : string,
    locationDescription : string,
    resorts : TResort[]
}
export type TResortPage = {
    name : string,
    location : string,
    imgUrl : string,
    rooms : TRoom[]
}

export type TResort = {
    name : string,
    location : string,
    imgUrl : string
}

export type TRoom = {
    destinationName : string,
    location : string,
    imageUrl : string,
    amenities : string[],
    verified : string[],
    description : string,
    duration : number,
    personCount : number,
    price : {
        value : number,
        cutPercent : number
    }
}

export type TRoomPage = TRoom & {
    roomGalleryUrls : string[]
}
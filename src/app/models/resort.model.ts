
export type TResort = {
    name : string,
    description : string,
    location : string,
    imgUrl : string
}

export type TResortPage = TResort & {
    name : string,
    location : string,
    imgUrl : string,
    images : string[],
    rooms : TRoom[]
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
    },
}

export type TRoomPage = TRoom & {
    roomGalleryUrls : string[],
    inclusions : string[]
}


export type Promo = {
    name : string,
    price : {
        value : number,
        cutPer : number
    },
    sections :  { 
        title : string,
        contents : string[]
    }[]
}
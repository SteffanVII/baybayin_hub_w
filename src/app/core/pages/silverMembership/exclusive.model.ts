export type Promo =  {
    image : string,
    images : string[],
    name : string,
    quantity : number,
    price : {
        value : number,
        cutPer: number,
    }
    section : {
        title : string,
        contents : string []
    }[]
        
       
};

export type fanRoom =  {
    image : string,
    name : string,
    quantity : number,
    price : {
        value : number,
        cutPer: number,
    }
    section : {
        title : string,
        contents : string []
    }[]
        
       
};

export type pass =  {
    image : string,
    name : string,
    price : {
        value : number,
        cutPer: number,
    }
    section : {
        title : string,
        contents : string []
    }[]
        
       
};



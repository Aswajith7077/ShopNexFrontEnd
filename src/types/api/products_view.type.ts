


type VariationType = {
    name:string,
    value:string
}


type ProductViewResponseType = {
  "NAME": string,
  "BRAND": string,
  "DESC": string[],
  "INITIAL_PRICE": number,
  "FINAL_PRICE": number,
  "CURRENCY": string,
  "REVIEWS": number,
  "CATEGORIES": string[]
  "SELLER_NAME": string,
  "DOMAIN": string,
  "REFERAL_LINK": string,
  "IMAGES": string[],
  "RATING": number,
  "VARIATIONS": VariationType[],
  "FEATURES": string[],
  "STOCK": number
}



export type{
  VariationType,
    ProductViewResponseType
}
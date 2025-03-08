import { Dispatch, SetStateAction } from "react";


type FeaturedCategoryType = {
    title:string,
    sub_categories:string[]
}

type CategoryButtonsPropType = {
  state: number;
  setState: Dispatch<SetStateAction<number>>;
};




type ListProductsResponseType = {
  NAME:string,
  BRAND:string,
  FINAL_PRICE:number,
  CURRENCY:string,
  CATEGORIES:string[],
  IMAGES:string,
  RATING:number,
  STOCK:number
}

// {
//     "NAME": "KASOTT Replacement Airpod Pro Ear Tip Premium Memory Foam Earbud Tips, Perfect Noise Reduction, Ultra-Comfort, Anti-Slip Eartips, Fit in The Charging Case (Sizes M, 3 Pairs)",
//     "BRAND": "KASOTT",
//     "FINAL_PRICE": 17.88,
//     "CURRENCY": "USD",
//     "CATEGORIES": [
//       "Electronics",
//       "Headphones, Earbuds & Accessories"
//     ],
//     "IMAGES": "https://m.media-amazon.com/images/I/51PJLJF3tIL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
//     "RATING": 4.3,
//     "STOCK": 0
//   },



export type{
    FeaturedCategoryType,
    CategoryButtonsPropType,
    ListProductsResponseType
}
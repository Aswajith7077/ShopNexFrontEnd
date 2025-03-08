


// type SearchProductRequestType = {
//   search_text: string;
//   isFilterApplied:  boolean;
//   FINAL_PRICE: number[];
//   CURRENCY: string;
//   RATING: number;
//   STOCK: number;
// };

type SearchProductRequestType = {
  "search_text": string,
  "isFilterApplied": boolean,
  "FINAL_PRICE": number[],
  "CURRENCY": string,
  "RATING": number,
  "STOCK": number
}

type SearchProductResponseType = {
    "NAME": string,
    "BRAND": string,
    "FINAL_PRICE": number,
    "CURRENCY": string,
    "CATEGORIES": string[],
    "SELLER_NAME": string,
    "IMAGES": string,
    "RATING": number,
    "STOCK": number
};



export type{
    SearchProductRequestType,
    SearchProductResponseType
}
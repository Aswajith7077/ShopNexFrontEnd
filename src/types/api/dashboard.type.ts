import { Dispatch, SetStateAction } from "react";


type FeaturedCategoryType = {
    title:string,
    sub_categories:string[]
}

type CategoryButtonsPropType = {
  state: number;
  setState: Dispatch<SetStateAction<number>>;
};

export type{
    FeaturedCategoryType,
    CategoryButtonsPropType
}
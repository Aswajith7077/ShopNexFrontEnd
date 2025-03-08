import { ScrollArea } from "@/components/ui/scroll-area";
import { API_ENDPOINTS } from "@/constants/api.enpoints";
import { useApiQuery } from "@/hooks/useApiService";
import { ProductViewResponseType } from "@/types/api/products_view.type";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Rating from "@/components/search/Rating";
import ProductDescription from "@/components/product_view/Description";
import Categories from "@/components/product_view/Categories";
import Pricing from "@/components/product_view/Pricing";
import { Button } from "@/components/ui/button";
import Variations from "@/components/product_view/Variations";
import Features from "@/components/product_view/Features";
import Reviews from "@/components/product_view/Reviews";

const ProductsView = () => {
  const context = useOutletContext<Record<string, unknown>>();

  const { data } = useApiQuery<
    ProductViewResponseType
  >(API_ENDPOINTS.GET_DETAILS_ENDPOINT, { id: context.product_name });

  useEffect(
    () => {
      console.log(data);
    },
    [data]
  );

  if (data)
    return <ScrollArea className="flex p-5 overflow-auto">
        <div className="flex flex-col">
          <div className="flex flex-row w-full gap-10 ">
            <div className="flex justify-center items-center rounded-2xl bg-white w-[40%] p-10 max-h-130">
              <img src={data.IMAGES[0]} alt={data.BRAND} className="w-100 h-100" />
            </div>
            <div className="w-[60%]">
              <h2 className="uppercase text-cyan-500 font-bold text-lg">
                {data.BRAND}
              </h2>
              <h1 className="font-semibold text-3xl pr-10 py-5">
                {data.NAME}
              </h1>
              <Categories data={data.CATEGORIES} />
              <Rating score={data.RATING} display_number={true} size={26}/>

              <Pricing FINAL_PRICE={data.FINAL_PRICE} INITIAL_PRICE={data.INITIAL_PRICE} CURRENCY={data.CURRENCY} />

              <div className="flex flex-row gap-5">
                  <Button className="cursor-pointer">Add to Cart</Button>
                  <Button className="cursor-pointer">Go to the Website</Button>
              </div>
            </div>
          </div>
          <ProductDescription data={data.DESC} />
          <Variations data={data.VARIATIONS}/>
          <Features data={data.FEATURES} />
          <Reviews rating={data.RATING} reviews={data.REVIEWS} />
        </div>
      </ScrollArea>;
  else return <div />;
};

export default ProductsView;

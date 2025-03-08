import { API_ENDPOINTS } from "@/constants/api.enpoints";
import { useApiQuery } from "@/hooks/useApiService";
import { ProductViewResponseType } from "@/types/api/products_view.type";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

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

  return <div />;
};

export default ProductsView;

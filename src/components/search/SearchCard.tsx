import { SearchProductResponseType } from "@/types/search.type";
import { Badge } from "@/components/ui/badge";
import Rating from "@/components/search/Rating";
import { useHomeContext } from "@/context/home.context";
import { useNavigate } from "react-router-dom";

const SearchCard = ({
  search_data
}: {
  search_data: SearchProductResponseType;
}) => {
  const context_handler = useHomeContext();
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row items-center gap-10"
      onClick={() =>{
        context_handler.setContext({ product_name: search_data.NAME })
        navigate("/home/products_view")
      }}
    >
      <div className="flex items-center justify-center bg-white p-10 rounded-2xl w-[30%] h-70">
        <img
          src={search_data.IMAGES}
          alt={search_data.BRAND}
          className="max-h-50"
        />
      </div>
      <div className="flex flex-col w-[70%] pr-10">
        <h1 className="font-semibold uppercase text-cyan-600 mb-3">
          {search_data.BRAND}
        </h1>
        <p>
          {search_data.NAME}
        </p>
        <div className="flex flex-wrap gap-2 py-4">
          {search_data.CATEGORIES.slice(0, 5).map((category, key) => {
            return (
              <Badge
                key={key}
                variant={"secondary"}
                className="py-2 rounded-full px-5"
              >
                {category}
              </Badge>
            );
          })}
        </div>
        <div className="flex flex-row justify-between mr-10">
          <Rating score={search_data.RATING} display_number={true} size={26}/>
          <h2 className="font-semibold text-2xl">
            {search_data.FINAL_PRICE + " " + search_data.CURRENCY}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;

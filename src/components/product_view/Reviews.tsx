import { Separator } from "@radix-ui/react-separator";
import Rating from "../search/Rating";

const Reviews = ({ rating, reviews }: { rating: number; reviews: number }) => {
  return <div className="flex ">
      <h1 className="font-semibold text-3xl">Reviews</h1>
      <div className="flex flex-row w-full gap-5 my-20 justify-evenly">
        <div className="flex flex-col gap-5">
          <h3 className="text-lg">Total Reviews</h3>
          <h2 className="font-semibold text-4xl">
            {Math.pow(10, Math.floor(Math.log10(reviews)))} +
          </h2>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col gap-5">
          <h3 className="text-lg">Average Rating</h3>
          <div className="flex flex-row items-center gap-7">
            <h2 className="font-semibold text-4xl">
              {rating}
            </h2>
            <Rating score={rating} display_number={false} size={24} />
          </div>
        </div>
      </div>
    </div>;
};

export default Reviews;

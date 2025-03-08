import { IconType } from "react-icons/lib";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";

const renderStars = (value: number): IconType[] => {
  let result: IconType[] = [];
  for (var i = 0; i < 5; i++) {
    if (value >= 1) result.push(MdOutlineStarPurple500);
    else if (0 < value && value < 1) {
      result.push(MdOutlineStarHalf);
    } else result.push(MdOutlineStarOutline);
    value--;
  }
  return result;
};

const Rating = ({ score,display_number  = false,size = 26}: { score: number ,display_number:boolean,size:number}) => {
  const stars: IconType[] = renderStars(score);
  return (
    <div className="flex flex-row items-center gap-5">
      <div className="flex flex-row gap-2">
        {stars.map((StarComponent, key) => {
          return <StarComponent key={key} size={size} />;
        })}
      </div>
      {display_number && <h1 className="font-semibold text-lg">
        {score}
      </h1>}
    </div>
  );
};

export default Rating;

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Features = ({ data }: { data: string[] }) => {
  return (
    <div>
      <h1 className="font-semibold text-3xl"> Features</h1>
      <div className="flex flex-col my-10">
          {data.map((value, key) => {
            return (
              <div className="flex flex-row mr-10 gap-5 ">
                <MdOutlineKeyboardDoubleArrowRight size={24} className="w-[2%]" />
                <p className="font-normal w-[98%]" key={key}>
                  {value}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Features;

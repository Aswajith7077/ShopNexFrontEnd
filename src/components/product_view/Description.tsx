import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const ProductDescription = ({data}:{data:string[]}) => {
    return <div className="flex flex-col gap-5 my-10">
      <h1 className="font-semibold text-3xl">About this Product</h1>

      <div className="flex flex-col gap-2">
        {data.map((value, key) => {
          return <div className="flex flex-row mr-10 gap-5 ">
              <MdOutlineKeyboardDoubleArrowRight size={24} className="w-[2%]" />
              <p className="font-normal w-[98%]" key={key}>
                {value}
              </p>
            </div>;
        })}
      </div>
    </div>;
}

export default ProductDescription;
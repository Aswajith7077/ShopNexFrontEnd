

const Pricing = ({INITIAL_PRICE,FINAL_PRICE,CURRENCY}:{INITIAL_PRICE:number,FINAL_PRICE:number,CURRENCY:string}) => {
    return <div className="flex flex-col my-5">
        <h2 className="line-through text-xl text-slate-400">
          {INITIAL_PRICE}
        </h2>
        <h2 className=" text-3xl bg-gradient-to-br from-blue-600 to-white bg-clip-text">
          {FINAL_PRICE + " " + CURRENCY}
        </h2>
      </div>;
}

export default Pricing;
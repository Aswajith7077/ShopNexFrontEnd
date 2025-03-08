import { Button } from "@/components/ui/button";


const ad_content = [
    {
        description:"Immerse yourself in a revolutionary gaming experience with our cutting-edge products",
        url:"",
        button_text:"Explore Gaming"
    },
    {
        description:"Discover the world's finest fashion collections, all in one place—where style meets elegance and trends come to life!",
        url:"",
        button_text:"Explore Fashion",
    },
    {
        description:"Explore our unbeatable selection now and elevate your shopping experience!",
        url:"",
        button_text:"Go to Mart",
    }
]

type AdCardPropType = {
    content:{description:string,
    url:string,
    button_text:string
    }
}

const AdCard = ({content}:AdCardPropType) => {
    return <div className={`flex flex-col border rounded-2xl p-10 bg-slate-900 justify-between w-1/3`}>
            <h1 className="font-semibold text-lg w-[70%]">{content.description}</h1>
            <Button className="w-fit my-5">{content.button_text}</Button>
      </div>
}

const AdCards = () => {
  return (
    <div className="flex flex-row gap-5 ">
      {ad_content.map((value,key) => {
        return <AdCard content={value} key={key}/>
      })}
    </div>
  );
};

export default AdCards;

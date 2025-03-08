import { Badge } from "@/components/ui/badge";



const Categories = ({data}:{data:string[]}) => {
    return <div className="flex flex-wrap gap-3 mb-5">
        {data.map((category, key) => {
          return <Badge key={key} className="py-2 px-5 rounded-full" variant={"secondary"}>
              {category}
            </Badge>;
        })}
      </div>;
}

export default Categories;
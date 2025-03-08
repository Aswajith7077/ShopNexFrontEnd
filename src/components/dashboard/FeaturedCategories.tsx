import { useState } from "react";
import { Button } from "@/components/ui/button";
import { featured_categories } from "@/data/api/dashboard.data";
import { Card, CardHeader } from "@/components/ui/card";
import { CategoryButtonsPropType } from "@/types/api/dashboard.type";

const CategoryButtons = ({ state, setState }: CategoryButtonsPropType) => {
  return (
    <div className="flex flex-row w-fit items-center gap-5">
      {featured_categories.map((value, key) => {
        return (
          <Button
            variant={key === state ? "secondary" : "ghost"}
            key={key}
            onClick={() => setState(key)}
            className="cursor-pointer"
          >
            {value.title}
          </Button>
        );
      })}
    </div>
  );
};

const SubCategoryCard = ({
  value,
  width
}: {
  value: string;
  width: number;
}) => {
  return (
    <Card className={`border w-1/${width}`}>
      <CardHeader className="flex items-center h-60">
        {value}
      </CardHeader>
    </Card>
  );
};

const FeaturedCategories = () => {
  const [current, setCurrent] = useState<number>(0);
  return (
    <div className="flex flex-col my-10 justify-center">
      <div className="flex flex-row justify-between mx-5">
        <h1 className="font-semibold text-4xl ">Featured Categories</h1>
        <CategoryButtons state={current} setState={setCurrent} />
      </div>
      <section className="flex flex-row  mt-10 gap-5">
        {featured_categories[current].sub_categories.map((value, key) => {
          return (
            <SubCategoryCard
              key={key}
              value={value}
              width={featured_categories[current].sub_categories.length}
            />
          );
        })}
      </section>
    </div>
  );
};

export default FeaturedCategories;

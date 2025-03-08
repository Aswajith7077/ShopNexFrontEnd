import { VariationType } from '@/types/api/products_view.type'
import { Card } from '@/components/ui/card'

const Variations = ({data}:{data:VariationType[]}) => {
  return <div className="pb-10">
    <h1 className='mb-5 font-semibold text-3xl'>{"Variations"}</h1>
      <div className="grid grid-cols-2 gap-5 ">
        {data.map((value, key) => {
          return <Card key={key} className="px-5 hover:bg-slate-900 cursor-pointer">
              {value.value}
            </Card>;
        })}
      </div>
    </div>;
}

export default Variations
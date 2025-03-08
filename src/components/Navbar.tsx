import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Navbar = () => {
  return <main className="flex flex-row justify-between w-full py-5 px-10 items-center">
      
          <div>
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
          </div>

        <Input placeholder="Search" className="w-[60%] bg-slate-900"/>

        <div className="flex flex-row gap-3 items-center">
            <Switch />
            <Label>Dark Mode</Label>
        </div>
    </main>;
};

export default Navbar;

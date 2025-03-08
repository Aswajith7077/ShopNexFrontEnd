import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useHomeContext } from "@/context/home.context";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const handleNavigate = useCallback((path:string) => navigate(path),[navigate]);


  const [text, setText] = useState<string>("");
  const context_handler = useHomeContext();
  return (
    <main className="flex flex-row justify-between w-full py-5 px-10 items-center">
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

      <Input
        placeholder="Search"
        className="w-[60%] bg-slate-900"
        onChange={e =>
          setText(prev => (e.target.value ? e.target.value : prev))}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            context_handler.setContext({search_text:text});
            handleNavigate("search");
          }
        }}
      />

      <div className="flex flex-row gap-3 items-center">
        <Switch />
        <Label>Dark Mode</Label>
      </div>
    </main>
  );
};

export default Navbar;

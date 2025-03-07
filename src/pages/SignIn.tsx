import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const FormComponent = () => {
  return <div className="flex flex-col items-center justify-between w-full lg:w-1/2 border bg-slate-950 py-20">
      <div className="flex flex-row w-full px-20 lg:px-[22%] justify-end">
        <Button variant={"ghost"} className="cursor-pointer">
          Login
        </Button>
      </div>
      <div className="flex flex-col px-20 lg:px-[22%] gap-4 w-full">
        <h2 className="font-semibold text-3xl w-full">Create Your Account</h2>
        <p className="w-full mb-5 text-gray-400 text-sm">
          Enter your credentials
        </p>
        <Input placeholder="Username" type="name" className="bg-slate-900 py-5" />
        <Input placeholder="New Password" type="password" className="bg-slate-900 py-5" />
        <Input placeholder="Confirm Password" type="password" className="bg-slate-900 py-5" />
        <Button variant={"default"} className="rounded-lg text-base mt-3 cursor-pointer py-6 w-full">
          Login
        </Button>
        <div className="flex flex-row items-center px-2 w-full">
          <div className="hidden md:inline border-gray-400 w-1/3 border h-0" />
          <Label className="text-center w-full md:w-1/3 my-3 justify-center">
            Or Continue With
          </Label>
          <div className="hidden md:inline w-1/3 border-gray-400 border h-0" />
        </div>
        <Button variant={"outline"} className="py-5 w-full  cursor-pointer">
          Continue with Google
        </Button>
      </div>

      <div className="flex flex-row w-full justify-center ">
        <Button variant={"link"} className="text-sm text-gray-400 cursor-pointer">
          Privacy
        </Button>
        <Button variant={"link"} className="text-sm text-gray-400 cursor-pointer">
          Terms and Conditions
        </Button>
      </div>

      <div />
    </div>;
};

const SignIn = () => {
  document.body.classList.add("dark");
  return <main className="flex flex-row w-screen h-screen bg-slate-900">
      <FormComponent />
      <div className="hidden lg:flex flex-col justify-between lg:w-1/2 p-15">
        <h2 className="text-2xl font-semibold ">Shopnex</h2>
        <p className="font-semibold text-lg">
          This library has saved me countless hours of work and helped me
          deliver stunning designs to my clients faster than ever before.
        </p>
      </div>
    </main>;
};

export default SignIn;

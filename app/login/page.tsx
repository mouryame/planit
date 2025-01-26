import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CustomCard from "@/components/custom/CustomCard";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <CustomCard title="Login">
        <form action="" className="w-64 flex flex-col gap-4">
          <Label className="flex flex-col gap-4">
            UserName
            <Input />
          </Label>
          <Label className="flex flex-col gap-4">
            Password
            <Input type="password" />
          </Label>
          <Button>Sign In</Button>
        </form>
      </CustomCard>
    </div>
  );
};

export default Page;

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CustomCard from "@/components/custom/CustomCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <CustomCard title="Create Project">
        <form action="" className="w-80 flex flex-col gap-4">
          <Label className="flex flex-col gap-4">
            Project Title :
            <Input />
          </Label>
          <Label className="flex flex-col gap-4">
            Project Description:
            <Textarea />
          </Label>
          <Label className="flex flex-col gap-4">
            Status:
            <Input />
          </Label>
          <Button>Add Project</Button>
        </form>
      </CustomCard>
    </div>
  );
};

export default Page;

import { IoIosAdd } from "react-icons/io";
import { Card } from "./ui/card";

interface CreateCardProps {
  type: "project" | "task";
}

export default function CreateCard({ type }: CreateCardProps) {
  return (
    <Card className="flex flex-col justify-center items-center">
      <IoIosAdd className="text-4xl" />
      {`Create a new ${type}`}
    </Card>
  );
}

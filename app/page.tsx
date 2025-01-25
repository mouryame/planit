import AnimatedModal from "@/components/custom/AnimatedModal";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center">
      <AnimatedModal trigger={<div>Open Modal</div>}>Hello World</AnimatedModal>
    </div>
  );
}

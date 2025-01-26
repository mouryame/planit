import AnimatedModal from "@/components/custom/AnimatedModal";
import { CustomTabs } from "@/components/custom/CustomTabs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen ">
      <AnimatedModal trigger={<div>Open Modal</div>}>Hello World</AnimatedModal>
      <CustomTabs
        tabs={{
          "Tab 1": <div>Tab 1</div>,
          "Tab 2": <div>Tab 2</div>,
          "Tab 3": <div>Tab 3</div>,
        }}
      />
    </div>
  );
}

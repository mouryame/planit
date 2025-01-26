import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CustomTabs({ tabs }: CustomTabProps) {
  const keys = Object.keys(tabs);
  return (
    <Tabs defaultValue={keys[0]} className="w-[400px]">
      <TabsList className={`grid w-full grid-cols-${keys.length}`}>
        {keys.map((key) => (
          <TabsTrigger key={key} value={key}>
            {key}
          </TabsTrigger>
        ))}
      </TabsList>
      {keys.map((key) => (
        <TabsContent key={key} value={key}>
          {tabs[key]}
        </TabsContent>
      ))}
    </Tabs>
  );
}

import { Button } from "./button";
import { usePermission } from "./hooks/use-permission";
import { cn } from "./utils/cn";

export function PermissionModal() {
  const { needsPermission, askPermission, skip } = usePermission();
  
  return (
    <div
      className={cn("absolute z-50 p-4 bg-gray-100 text-black top-0 left-0 right-0 border border-b-gray-300", {
        hidden: !needsPermission,
      })}
    >
      <div className="flex flex-col h-full gap-4">
        <div className="flex flex-col gap-4">
          <h1 className={"text-lg font-bold"}>Optional Permission request</h1>
          <p className={"text-base"}>
            Hey there, sorry to bother you. We are requesting a small permission
            to access your device's motion sensors. This will allow us to
            provide a more interactive experience.
          </p>
          <p className={"text-base text-gray-400 italic"}>
            We promise to not store any data or track you in any way.
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            className="text-white bg-green-500 outline-green-500"
            onClick={askPermission}
            text="Allow"
          />
          <Button
            className={cn("text-white bg-orange-500 outline-orange-500")}
            onClick={skip}
            text="Not now"
          />
        </div>
      </div>
    </div>
  );
}

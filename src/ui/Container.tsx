import { TContainer } from "@/types";
import { cn } from "@/utils";




const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("px-[20px] w-full max-w-[1230px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;

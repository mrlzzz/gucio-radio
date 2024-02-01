import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, onClick, ...props }, ref) => {
    // const [stateValue, setStateValue] = React.useState<number>(value);

    return (
        <ProgressPrimitive.Root
            ref={ref}
            onClick={onClick}
            className={cn(
                "relative h-4 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800",
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-zinc-900 transition-all dark:bg-zinc-900"
                style={{
                    transform: `translateX(-${100 - (value || 0)}%)`,
                }}
            />
        </ProgressPrimitive.Root>
    );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

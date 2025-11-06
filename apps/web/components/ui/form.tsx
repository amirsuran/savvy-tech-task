import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { useFormContext, Controller, FormProvider, type FieldValues, type UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

type FormProps<TFieldValues extends FieldValues> = {
  children: React.ReactNode;
} & UseFormReturn<TFieldValues>;

function Form<TFieldValues extends FieldValues>({ children, ...form }: FormProps<TFieldValues>) {
  return <FormProvider {...form}>{children}</FormProvider>;
}

const FormField = Controller;

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FormItem.displayName = "FormItem";

const FormLabel = ({ className, ...props }: React.ComponentProps<"label">) => (
  <label className={cn("text-sm font-medium", className)} {...props} />
);

const FormControl = ({ className, ...props }: React.ComponentProps<typeof Slot>) => (
  <Slot className={className} {...props} />
);

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-sm text-destructive", className)} {...props}>
        {children}
      </p>
    );
  }
);
FormMessage.displayName = "FormMessage";

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage };



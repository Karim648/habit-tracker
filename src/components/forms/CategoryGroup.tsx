import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { newHabitFormSchema } from "@/form-schemas/new-habit";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Categories } from "@/data/data";
import { cn } from "@/lib/utils";

export default function CategoryGroup({
  form,
}: {
  form: UseFormReturn<z.infer<typeof newHabitFormSchema>>;
}) {
  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Category</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex w-full flex-wrap justify-around"
            >
              {Categories.map((category) => {
                const selected = field.value === category;
                return (
                  <FormItem
                    key={category}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-1.5 font-normal",
                      selected
                        ? "border border-red-700 bg-red-700 text-white"
                        : "border border-gray-400/50 hover:bg-red-700 hover:text-white",
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem
                        value={category}
                        className="sr-only"
                      />
                    </FormControl>
                    <FormLabel className="cursor-pointer">{category}</FormLabel>
                  </FormItem>
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

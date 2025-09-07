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
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem
                    value="Health"
                    className="hidden"
                  />
                </FormControl>
                <FormLabel
                  className="cursor-pointer rounded-lg border border-gray-400/50 px-3 py-1.5 font-normal hover:bg-red-700 hover:text-white data-[state=checked]:bg-red-700 data-[state=checked]:text-white"
                >
                  Health
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="Fitness" className="hidden" />
                </FormControl>
                <FormLabel className="cursor-pointer rounded-lg border-1 border-gray-400/50 px-3 py-1.5 font-normal hover:bg-red-700 hover:text-white">
                  Fitness
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="Personal" className="hidden" />
                </FormControl>
                <FormLabel className="cursor-pointer rounded-lg border-1 border-gray-400/50 px-3 py-1.5 font-normal hover:bg-red-700 hover:text-white">
                  Personal
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="Home" className="hidden" />
                </FormControl>
                <FormLabel className="cursor-pointer rounded-lg border-1 border-gray-400/50 px-3 py-1.5 font-normal hover:bg-red-700 hover:text-white">
                  Home
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="Social" className="hidden" />
                </FormControl>
                <FormLabel className="cursor-pointer rounded-lg border-1 border-gray-400/50 px-3 py-1.5 font-normal hover:bg-red-700 hover:text-white">
                  Social
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

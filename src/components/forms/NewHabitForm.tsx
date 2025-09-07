"use client";

import { newHabitFormSchema } from "@/form-schemas/new-habit";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Calendar, Clock, Save, Target } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CategoryGroup from "./CategoryGroup";
import { db } from "@/db";
import { HabitsTable } from "@/db/schema";
import createNewHabit from "@/app/actions/new-habit";

export default function NewHabitForm() {
  const form = useForm<z.infer<typeof newHabitFormSchema>>({
    resolver: zodResolver(newHabitFormSchema),
    defaultValues: {
      name: "",
      description: "",
      target: 1,
      reminder: "09:00",
    },
  });

  async function onSubmit(values: z.infer<typeof newHabitFormSchema>) {
    // do form logic
    await createNewHabit(values);
    console.log("Habit Added Successfully!");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-2/5 min-w-90 space-y-8 rounded-xl border-2 bg-red-100/85 p-8"
      >
        <span className="flex items-center gap-2 text-lg font-semibold">
          <Save className="h-5 w-5 text-red-700" /> Habit Details
        </span>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Habit Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., Drink 8 glasses of water"
                  className="bg-card"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Textarea
                  className="bg-card resize-none"
                  placeholder="Stay hydrated throughout the day for better health and energy"
                  {...field}
                ></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <CategoryGroup form={form} />

        <div className="flex items-center gap-12">
          <FormField
            control={form.control}
            name="frequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Calendar /> Frequency
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-card">
                      <SelectValue defaultValue="Daily" placeholder="Daily" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Daily">Daily</SelectItem>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="target"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Target className="h-4 w-4" />
                  Daily Target *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    type="number"
                    className="bg-card"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="reminder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Clock className="h-4 w-4" />
                Reminder Time
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  type="time"
                  className="bg-card appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="ml-auto flex w-2/6 cursor-pointer bg-red-700 hover:bg-red-800"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

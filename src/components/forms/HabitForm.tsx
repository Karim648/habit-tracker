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
import { Calendar, Clock, Edit, Save, Target, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CategoryGroup from "./CategoryGroup";
import { createNewHabit, deleteHabit, editHabit } from "@/app/actions/habits";
import { toast } from "sonner";
import { InferSelectModel } from "drizzle-orm";
import { HabitsTable } from "@/db/schema";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

type Habit = InferSelectModel<typeof HabitsTable>;

export default function HabitForm({ habit }: { habit?: Habit }) {
  const form = useForm<z.infer<typeof newHabitFormSchema>>({
    resolver: zodResolver(newHabitFormSchema),
    defaultValues: {
      name: habit?.name || "",
      description: habit?.description || "",
      target: habit?.target || 1,
      reminder: habit?.reminder || "09:00",
      category: habit?.category,
      frequency: habit?.frequency || "Daily",
    },
  });

  async function onSubmit(values: z.infer<typeof newHabitFormSchema>) {
    try {
      if (!habit) {
        await createNewHabit(values);
        toast.success("Habit successfully created!");
      } else {
        await editHabit(habit.id, values);
        console.log("habit edited")
        toast.success("Habit successfully edited!");
      }
    } catch (error) {
      toast.error("Failed to Create habit");
    }

    form.reset();
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
        {!habit ? (
          <Button
            type="submit"
            className="ml-auto flex w-2/6 cursor-pointer bg-red-700 hover:bg-red-800"
          >
            Submit
          </Button>
        ) : (
          <div className="flex items-center justify-end gap-4">
            <AlertDialog>
              <AlertDialogTrigger className="flex cursor-pointer items-center gap-2 font-bold text-red-700">
                <Trash2 className="h-4 w-4" /> Delete
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="cursor-pointer">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="cursor-pointer bg-red-700 text-white hover:bg-red-800"
                    onClick={() => deleteHabit(habit.id)}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button type="submit" variant="outline" className="cursor-pointer">
              <Edit /> Edit
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}

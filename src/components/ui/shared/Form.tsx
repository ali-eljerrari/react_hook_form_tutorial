"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(watch("name")); // watch input value by passing the name of it

  console.log(watch("email")); // watch input value by passing the name of it

  console.log(watch("password")); // watch input value by passing the name of it

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-1.5 mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} placeholder="Name..." />
          </div>
          <div className="flex flex-col space-y-1.5 mb-6">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...register("email", { required: true })}
              placeholder="Email..."
            />
          </div>
          <div className="flex flex-col space-y-1.5 mb-6">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              {...register("password", { required: true })}
              placeholder="Password..."
            />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <CardFooter className="flex justify-between mt-8">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </form>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="w-full">
            Cancel
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
export default Form;

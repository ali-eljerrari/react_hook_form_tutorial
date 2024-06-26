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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  password: yup.string().required(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(watch("username")); // watch input value by passing the name of it
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
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              {...register("username", { required: true })}
              placeholder="Username..."
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="flex flex-col space-y-1.5 mb-6">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...register("email", { required: true })}
              placeholder="Email..."
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="flex flex-col space-y-1.5 mb-6">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              {...register("password", { required: true })}
              placeholder="Password..."
            />
            <p>{errors.password?.message}</p>
          </div>
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

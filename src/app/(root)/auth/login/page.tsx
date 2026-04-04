"use client";
import { Card, CardContent } from "@/components/ui/card";
import { zodSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  const fromSchema = zodSchema.pick({
    email: true,
    password: true,
  });

  const form = useForm<{ email: string; password: string; username: string }>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const handleLoginSubmit = async (values: any) => {
    values = { username: "typed_value" };
    console.log("Field value:", values.username);
    console.log("Field type:", typeof values.username);
  };

  return (
    <section>
      <Card className="w-[450px] py-8 pc-3">
        <CardContent>
          <div className="flex items-center justify-center">
            <Image
              src="https://i.ibb.co.com/27jzrDyw/logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-xl font-semibold mt-5">Login Into Account</h1>
            <p className="text-[14px]">
              Login into your account by filling out the form below.
            </p>
          </div>

          <div className="mt-5">
            <form
              id="form-rhf-input"
              onSubmit={form.handleSubmit(handleLoginSubmit)}
            >
              <Controller
                name="username"
                control={form.control}
                rules={{
                  required: "Username is required",
                  minLength: { value: 3, message: "Minimum 3 characters" },
                  maxLength: { value: 10, message: "Maximum 10 characters" },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message: "Only letters, numbers, and underscores allowed",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    {/*-------User----Name------*/}
                    <FieldLabel htmlFor="form-rhf-input-username">
                      Full Name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-username"
                      aria-invalid={fieldState.invalid}
                      placeholder="shadcn"
                      autoComplete="username"
                      className="py-5 px-4"
                    />
                    {/*-------User----Email------*/}
                    <FieldLabel htmlFor="form-rhf-input-email">
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="user@example.com"
                      autoComplete="email"
                      className="py-5 px-4"
                    />
                    {/*-------User----Password------*/}
                    <FieldLabel htmlFor="form-rhf-input-password">
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-password"
                      aria-invalid={fieldState.invalid}
                      placeholder="*********"
                      autoComplete="current-password"
                      className="py-5 px-4"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Button type="submit" className="w-full py-5 mt-5">Login</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;

"use client";
import { Card, CardContent } from "@/components/ui/card";
import { zodSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import ButtonSpinner from "@/components/ApplicationUi/ButtonSpinner";
import { useState } from "react";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

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
    console.log(values);
  };

  return (
    <section>
      <Card className="w-[400px] py-8 pc-3">
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
              onSubmit={form.handleSubmit(handleLoginSubmit)}
              className="space-y-4"
            >
              {/*-------Username--------*/}
              <Controller
                name="username"
                control={form.control}
                // rules={{ required: "Username required" }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-input-username">
                      Full Name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-username"
                      placeholder="Mr. Shadcn"
                      className="py-5 px-4"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/*---------Email---------*/}
              <Controller
                name="email"
                control={form.control}
                rules={{ required: "Email required" }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-input-email">
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-email"
                      placeholder="user@example.com"
                      className="py-5 px-4"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/*---------Password---------*/}
              <Controller
                name="password"
                control={form.control}
                rules={{ required: "Password required" }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-input-password">
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-password"
                      placeholder="*********"
                      type="password"
                      className="py-5 px-4"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <ButtonSpinner
              loading={loading}
                type="submit"
                text="Login"
                className="w-full py-5 mt-5 bg-[#F5690D] text-white hover:bg-[#02376C] hover:text-white cursor-pointer duration-300"
              >
                Login
              </ButtonSpinner>
            </form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;

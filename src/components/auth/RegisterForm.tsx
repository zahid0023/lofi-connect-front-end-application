import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerSchema, type RegisterDto } from "@/validations/auth.dto";
import { registerService } from "@/services/auth.service";

export function RegisterForm() {
  const navigate = useNavigate();
  const form = useForm<RegisterDto>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: registerService,
    onSuccess: () => {
      toast.success("Registered successfully", { description: "Welcome!" });
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Registration failed", {
        description: error.message || "Something went wrong",
      });
    },
  });

  const onSubmit = async (data: RegisterDto) => {
    await mutateAsync(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to create your account
          </p>
        </div>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </div>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="off"
              />
            </Field>
          )}
        />
        <FieldDescription>
          We&apos;ll use this to contact you. We will not share your email with anyone else.
        </FieldDescription>
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  {...field}
                  type="password"
                  id="password"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </Field>
            )}
          />
          <Controller
            name="confirm_password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="confirm_password">Confirm Password</FieldLabel>
                <Input
                  {...field}
                  type="password"
                  id="confirmPassword"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </Field>
            )}
          />
        </div>
        <Button className="w-full">Register</Button>
        <FieldDescription className="text-center">
          Already have an account? <Link to="/login">Sign in</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}

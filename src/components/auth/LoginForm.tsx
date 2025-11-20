import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginDto } from "@/validations/auth.dto";
import { loginService } from "@/services/auth.service";
import { setAuthToken } from "@/lib/auth-token.util";
import { useAuth } from "@/hooks/useAuth";
import { Spinner } from "@/components/ui/spinner";

export function LoginForm() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const form = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      toast.success("Logged in successfully", { description: "Welcome back!" });
      setAuthToken(data.data.token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error("Login failed", {
        description: error.message || "Something went wrong",
      });
    },
  });

  const onSubmit = async (data: LoginDto) => {
    await mutateAsync(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground text-balance">Login to your Lofi Connect account</p>
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
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </div>
              <Input
                {...field}
                type="password"
                id="password"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
            </Field>
          )}
        />
        <Button type="submit" className="w-full">
          {form.formState.isSubmitting && <Spinner />}
          Login
        </Button>
        <FieldDescription className="text-center">
          Don&apos;t have an account? <Link to="/register">Sign up</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}



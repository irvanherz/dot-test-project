import { ApiError } from "@/common/api-error";
import { LayoutAuth } from "@/components/layout-auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import SigninForm from "./signin-form";
import {
  SigninFields,
  signinFieldsSchema,
} from "./signin-form-validation-schema";

export function AuthSignin() {
  const signin = useMutation(() => []);
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(signinFieldsSchema),
    defaultValues: { username: "", password: "" },
  });

  const handleSubmit: SubmitHandler<SigninFields> = async (values) => {
    try {
      const result = await signin.mutateAsync(values as any);
      console.log(result);
    } catch (error: unknown) {
      if (error instanceof ApiError) toast(error.message);
      else toast("Something went wrong");
    }
  };

  const handleSubmitFailed: SubmitErrorHandler<SigninFields> = (_errors) => {
    toast("Please check the form for errors");
  };

  return (
    <LayoutAuth>
      <Card className="mx-auto max-w-lg w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormProvider {...form}>
            <SigninForm />
          </FormProvider>
          <Button
            type="submit"
            className="w-full"
            onClick={form.handleSubmit(handleSubmit, handleSubmitFailed)}
          >
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/auth/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </LayoutAuth>
  );
}

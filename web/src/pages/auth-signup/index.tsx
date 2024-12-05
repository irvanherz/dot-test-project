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
import SignupForm from "./signup-form";
import {
  SignupFields,
  signupFieldsSchema,
} from "./signup-form-validation-schema";

export function AuthSignup() {
  const signup = useMutation(() => []);
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(signupFieldsSchema),
    defaultValues: { username: "", email: "", full_name: "", password: "" },
  });

  const handleSubmit: SubmitHandler<SignupFields> = async (values) => {
    try {
      const result = await signup.mutateAsync(values);
      console.log(result);
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        toast(error.message);
      } else toast("Something went wrong");
    }
  };

  const handleSubmitFailed: SubmitErrorHandler<SignupFields> = (_errors) => {
    toast("Please check the form for errors");
  };

  return (
    <LayoutAuth>
      <Card className="mx-auto max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <FormProvider {...form}>
              <SignupForm />
            </FormProvider>
            <Button
              type="submit"
              className="w-full"
              onClick={form.handleSubmit(handleSubmit, handleSubmitFailed)}
            >
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
            <div className="mt-2 text-center text-sm">
              Already have an account?{" "}
              <Link to="/auth/signin" className="underline">
                Sign in
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </LayoutAuth>
  );
}

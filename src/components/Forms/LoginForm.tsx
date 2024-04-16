import "./Forms.sass";
import { PasswordInput, TextInput } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../fetchData/user/login";
import { StepButton } from "..";
import { useSession } from "../../hooks/useSession";

interface Inputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setSessionData } = useSession();

  const { mutate, isError } = useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      navigate("/advertisements");
      setSessionData(data.user, true);
    },
  });
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="formContent"
      id="loginForm"
    >
      <TextInput
        {...register("email", { required: true })}
        size="md"
        label="Email"
        placeholder="Type here..."
        error={isError && "Something went wrong"}
      />
      <PasswordInput
        {...register("password", { required: true })}
        size="md"
        label="Password"
        placeholder="Type here..."
        error={isError && "Something went wrong"}
      />
      <StepButton
        redirectUrl="register"
        redirectText="Create account"
        buttonText="Sign In"
      />
    </form>
  );
};

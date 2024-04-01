import "./LoginForm.sass";
import { Button, PasswordInput, TextInput, Text } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../fetchData/user/login";

interface Inputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate, isError } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/advertisements");
    },
  });
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="inputContent">
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
      <Text
        style={{ width: "100%", textAlign: "center" }}
        size="sm"
        c={"orange"}
      >
        <Link className="navlink" to="/auth/register">
          Create account
        </Link>
      </Text>
      <Button
        variant="gradient"
        gradient={{ from: "rgba(255, 94, 0, 1)", deg: 90, to: "orange" }}
        size="compact-xl"
        style={{
          fontSize: "24px",
          fontStyle: "italic",
        }}
        color="orange"
        type="submit"
      >
        Log In
      </Button>
    </form>
  );
};

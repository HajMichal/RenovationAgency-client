import "./Forms.sass";
import { PasswordInput, TextInput } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import useStore from "../../store";

interface Inputs {
  email: string;
  password: string;
}

export const RegisterFirstForm = () => {
  const { updateRegisterState } = useStore();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateRegisterState("email", data.email);
    updateRegisterState("password", data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formContent">
      <TextInput
        {...register("email", { required: true })}
        size="md"
        label="Email"
        placeholder="Type here..."
      />
      <PasswordInput
        {...register("password", { required: true })}
        size="md"
        label="Password"
        placeholder="Type here..."
      />
    </form>
  );
};

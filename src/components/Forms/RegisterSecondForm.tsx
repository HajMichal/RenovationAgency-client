import { TextInput } from "@mantine/core";
import "./Forms.sass";
import { type SubmitHandler, useForm } from "react-hook-form";
import useStore from "../../store";

interface Inputs {
  name: string;
  phone: string;
  address: string;
}

export const RegisterSecondForm = () => {
  const { updateRegisterState } = useStore();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateRegisterState("name", data.name);
    updateRegisterState("phone", data.phone);
    updateRegisterState("address", data.address);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formContent">
      <TextInput
        {...register("name", { required: true })}
        size="md"
        label="Full Name"
        placeholder="Type here..."
      />
      <TextInput
        {...register("phone", { required: true })}
        size="md"
        label="Phone"
        placeholder="Type here..."
      />
      <TextInput
        {...register("address", { required: true })}
        size="md"
        label="Address"
        placeholder="Type here..."
      />
    </form>
  );
};

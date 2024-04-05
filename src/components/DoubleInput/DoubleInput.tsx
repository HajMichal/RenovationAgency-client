import { Input } from "@mantine/core";
import "./DoubleInput.sass";
import { type UseFormRegister } from "react-hook-form";
import { type Inputs } from "../../pages/Advertisements";

type FormKey =
  | "search"
  | "city"
  | "zipcode"
  | "ltPrice"
  | "gtPrice"
  | "ltArea"
  | "gtArea";

interface DoubleInput {
  icon: JSX.Element;
  number?: boolean;
  placeholders: string[];
  formKeys: FormKey[];
  label: string;
  className: string;
  register: UseFormRegister<Inputs>;
}

export const DoubleInput = ({
  icon,
  number = false,
  placeholders,
  label,
  className,
  register,
  formKeys,
}: DoubleInput) => {
  return (
    <Input.Wrapper id="wrapper" label={label}>
      {number ? (
        <div style={{ display: "flex" }}>
          <Input
            {...register(formKeys[0], { valueAsNumber: true })}
            placeholder={placeholders[0]}
            leftSection={icon}
            className={className}
            size="lg"
          />
          <Input
            {...register(formKeys[1], { valueAsNumber: true })}
            placeholder={placeholders[1]}
            className={className}
            size="lg"
          />
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <Input
            {...register(formKeys[0])}
            placeholder={placeholders[0]}
            size="lg"
            leftSection={icon}
            className={className}
          />
          <Input
            {...register(formKeys[1])}
            placeholder={placeholders[1]}
            size="lg"
            className={className}
          />
        </div>
      )}
    </Input.Wrapper>
  );
};

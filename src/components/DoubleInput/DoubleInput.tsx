import { Input } from "@mantine/core";
import "./DoubleInput.sass";
import useStore from "../../store";

type FormKey =
  | "search"
  | "location"
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
}

export const DoubleInput = ({
  icon,
  number = false,
  placeholders,
  label,
  className,
  formKeys,
}: DoubleInput) => {
  const { updateBuildingState } = useStore();

  const handleOnChange = (value: string, key: FormKey) =>
    updateBuildingState(key, value);

  return (
    <Input.Wrapper id="wrapper" label={label}>
      {number ? (
        <div style={{ display: "flex" }}>
          <Input
            placeholder={placeholders[0]}
            leftSection={icon}
            className={className}
            size="lg"
            autoComplete="off"
            onChange={(e) => handleOnChange(e.target.value, formKeys[0])}
          />
          <Input
            placeholder={placeholders[1]}
            className={className}
            size="lg"
            autoComplete="off"
            onChange={(e) => handleOnChange(e.target.value, formKeys[1])}
          />
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <Input
            placeholder={placeholders[0]}
            size="lg"
            leftSection={icon}
            className={className}
            autoComplete="off"
            onChange={(e) => handleOnChange(e.target.value, formKeys[0])}
          />
          <Input
            placeholder={placeholders[1]}
            size="lg"
            className={className}
            autoComplete="off"
            onChange={(e) => handleOnChange(e.target.value, formKeys[1])}
          />
        </div>
      )}
    </Input.Wrapper>
  );
};

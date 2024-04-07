import "./DoubleInput.sass";
import useStore from "../../store";
import { Input } from "@mantine/core";

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
        <div className="doubleInputs">
          <Input
            aria-label="leftInput"
            placeholder={placeholders[0]}
            leftSection={icon}
            className={className}
            size="lg"
            autoComplete="off"
            onChange={(e) => handleOnChange(e.target.value, formKeys[0])}
          />
          <Input
            aria-label="rightInput"
            placeholder={placeholders[1]}
            className={className}
            size="lg"
            autoComplete="off"
            onChange={(e) => handleOnChange(e.target.value, formKeys[1])}
          />
        </div>
      ) : (
        <div className="doubleInputs">
          <Input
            aria-label="leftInput"
            placeholder={placeholders[0]}
            size="lg"
            leftSection={icon}
            className={className}
            autoComplete="off"
            onChange={(e) => handleOnChange(e.target.value, formKeys[0])}
          />
          <Input
            aria-label="rightInput"
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

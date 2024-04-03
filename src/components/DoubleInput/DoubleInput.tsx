import { Input, NumberInput } from "@mantine/core";
import "./DoubleInput.sass";

interface DoubleInput {
  icon: JSX.Element;
  number?: boolean;
  placeholders: string[];
  label: string;
  className: string;
}

export const DoubleInput = ({
  icon,
  number = false,
  placeholders,
  label,
  className,
}: DoubleInput) => {
  return (
    <Input.Wrapper id="wrapper" label={label}>
      {number ? (
        <div style={{ display: "flex" }}>
          <NumberInput
            placeholder={placeholders[0]}
            leftSection={icon}
            className={className}
            size="lg"
            hideControls
          />
          <NumberInput
            placeholder={placeholders[1]}
            className={className}
            size="lg"
            hideControls
          />
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <Input
            placeholder={placeholders[0]}
            size="lg"
            leftSection={icon}
            className={className}
          />
          <Input
            placeholder={placeholders[1]}
            size="lg"
            className={className}
          />
        </div>
      )}
    </Input.Wrapper>
  );
};

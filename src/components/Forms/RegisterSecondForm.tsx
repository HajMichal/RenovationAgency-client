import { NumberInput, TextInput } from "@mantine/core";
import "./Forms.sass";
import { memo } from "react";
import { RegisterFormProps } from "../../types/user/registrationData";

export const RegisterSecondForm = memo(
  ({ userData, setUserData }: RegisterFormProps) => {
    return (
      <form className="formContent">
        <TextInput
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          value={userData.name}
          size="md"
          label="Full Name"
          placeholder="Type here..."
        />
        <NumberInput
          onChange={(e) => setUserData({ ...userData, phone: e.toString() })}
          value={userData.phone}
          size="md"
          label="Phone"
          placeholder="Type here..."
          hideControls
          maxLength={9}
        />
        <TextInput
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          value={userData.city}
          size="md"
          label="City"
          placeholder="Type here..."
        />
        <TextInput
          onChange={(e) =>
            setUserData({ ...userData, address: e.target.value })
          }
          value={userData.address}
          size="md"
          label="Address"
          placeholder="Type here..."
        />
      </form>
    );
  }
);

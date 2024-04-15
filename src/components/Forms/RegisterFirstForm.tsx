import "./Forms.sass";
import { PasswordInput, TextInput } from "@mantine/core";
import { memo } from "react";
import { RegisterFormProps } from "../../types/user/registrationData";

export const RegisterFirstForm = memo(
  ({ userData, setUserData }: RegisterFormProps) => {
    return (
      <form className="formContent">
        <TextInput
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          value={userData.email}
          size="md"
          label="Email"
          placeholder="Type here..."
        />
        <PasswordInput
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          value={userData.password}
          size="md"
          label="Password"
          placeholder="Type here..."
        />
      </form>
    );
  }
);

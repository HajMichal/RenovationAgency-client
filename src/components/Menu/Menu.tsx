import "./Menu.sass";
import { Menu, rem } from "@mantine/core";
import {
  IconUserCircle,
  IconPhoto,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";

export const MenuList = () => {
  return (
    <Menu.Dropdown>
      <Menu.Label>Application</Menu.Label>
      <Menu.Item
        leftSection={
          <IconSettings style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Settings
      </Menu.Item>
      <Menu.Item
        leftSection={
          <IconUserCircle style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Profile
      </Menu.Item>
      <Menu.Item
        leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}
      >
        Your ads
      </Menu.Item>

      <Menu.Divider />

      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item
        color="red"
        leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
      >
        Log out
      </Menu.Item>
    </Menu.Dropdown>
  );
};

import "./Menu.sass";
import { Menu, rem } from "@mantine/core";
import {
  IconUserCircle,
  IconPhoto,
  IconSettings,
  IconLogout,
  IconHammer,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const MenuList = () => {
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <Menu.Dropdown>
      <Menu.Label>Application</Menu.Label>
      <Menu.Item
        onClick={() => handleClick("/createAd")}
        color="green"
        leftSection={
          <IconSettings style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Create Ad
      </Menu.Item>
      <Menu.Item
        onClick={() => handleClick("/profile")}
        leftSection={
          <IconUserCircle style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Profile
      </Menu.Item>
      <Menu.Item
        onClick={() => handleClick("/yourAds")}
        leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}
      >
        Your ads
      </Menu.Item>
      <Menu.Item
        onClick={() => handleClick("/profile/contractor")}
        leftSection={<IconHammer style={{ width: rem(14), height: rem(14) }} />}
      >
        Contractor profile
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

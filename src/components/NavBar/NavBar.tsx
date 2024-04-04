import "./NavBar.sass";
import { Avatar, Button, Menu, Switch, useMantineTheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { MenuList } from "..";
import useStore from "../../store/index";

export const NavBar = () => {
  const theme = useMantineTheme();

  const { updateTheme } = useStore();

  return (
    <div id="navContainer">
      <div id="profile">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button
              size="xl"
              color="dark"
              id="text"
              variant="transparent"
              style={{ "--button-padding-x": 0 }}
            >
              <Avatar radius="xl" size={"lg"} style={{ marginRight: "5px" }} />
              My profile
            </Button>
          </Menu.Target>
          <MenuList />
        </Menu>
      </div>
      <Switch
        size="xl"
        color="dark"
        onChange={(e) => updateTheme(e.currentTarget.checked)}
        onLabel={<IconSun color={theme.colors.yellow[4]} />}
        offLabel={<IconMoonStars color={theme.colors.blue[6]} />}
      />
    </div>
  );
};

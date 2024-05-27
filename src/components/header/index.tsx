import { Box, Flex, Slot, Text, TextField } from "@radix-ui/themes";
import Container from "../container";
import Image from "../image";
import Link from "../link";
import classes from "./header.module.css";
import Menu from "./menu";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.headerContainer}>
        <Flex align="center">
          <Link href="/">
            <Text weight="bold" color="violet">
              Logo
            </Text>
          </Link>
          <TextField.Root variant="soft" placeholder="Search..." ml="8">
            <TextField.Slot side="right">
              <MagnifyingGlassIcon />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <Menu />
      </Container>
    </header>
  );
};

export default Header;

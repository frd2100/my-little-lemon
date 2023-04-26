import { ReactNode } from "react";
import littleLemonLogo from "../Images/littleLemonLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Menu", "Reserve a Table", "Contact Us"];

/* const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);
 */
export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("#F5F5F5", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box alignItems="inLine">
              <Image
                src={littleLemonLogo}
                boxSize="40px"
                alignItems="flex"
              ></Image>
            </Box>
            <Box>
              <Text color="gray.900"> Little Lemon </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              <Link href="#home">Home</Link>
              <Link href="#menu">Menu</Link>
              <Link href="#reserve-a-table">Reserve a Table</Link>
              <Link href="#about-us">About Us</Link>
            </HStack>
          </HStack>
          <Flex alignItems={"right "}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <IconButton
            backgroundColor="#F5F5F5"
            aria-label="Search database"
            icon={<FontAwesomeIcon icon={faCartShopping} color="#495e57" />}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="#home">Home</Link>
              <Link href="#menu">Menu</Link>
              <Link href="#reserve-a-table">Reserve a Table</Link>
              <Link href="#about-us">About Us</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

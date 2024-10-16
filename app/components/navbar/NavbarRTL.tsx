// Chakra Imports
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import AdminNavbarLinks from "./NavbarLinksAdmin";
import { isWindowAvailable } from "../../utils/navigation";
import { Home } from "solar-icon-set";

const AdminNavbar = (props: {
  secondary: boolean;
  message: string | boolean;
  brandText: string;
  logoText: string;
  fixed: boolean;
  onOpen: (...args: any[]) => any;
}) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (isWindowAvailable()) {
      window.addEventListener('scroll', changeNavbar)

      return () => {
        window.removeEventListener('scroll', changeNavbar)
      }
    }
  })

  const { secondary, message, brandText, fixed } = props

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = useColorModeValue('navy.700', 'white')
  let secondaryText = useColorModeValue('gray.700', 'white')
	let navbarPosition = 'fixed' as const;
  let navbarFilter = 'none'
  let navbarBackdrop = 'blur(20px)'
  let navbarShadow = 'none'
  let navbarBg = useColorModeValue(
    'rgba(244, 247, 254, 0.2)',
    'rgba(11,20,55,0.5)'
  )
  let navbarBorder = 'transparent'
  let secondaryMargin = '0px'
  let gap = '0px'
  const changeNavbar = () => {
    if (isWindowAvailable() && window.scrollY > 1) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <Box
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      display={secondary ? "block" : "flex"}
      minH="75px"
      position={navbarPosition}
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      left={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      px="0"
      pt="8px"
      top={{ base: "12px", md: "16px", xl: "18px" }}
      zIndex="10"
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 325px)",
        "2xl": "calc(100vw - 355px)",
      }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
        justifyContent={{ sm:"center", md: "space-between"}}
        mb={gap}
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Breadcrumb separator=">">
            <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
              <BreadcrumbLink href="/" color={secondaryText} className="flex items-center justify-center gap-2">
                <Home iconStyle="Bold" width="14px" height="14px" color="gray" />
                <span>خانه</span>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
              <BreadcrumbLink href="/Dashboard" color={secondaryText} className="flex items-center justify-center gap-2">
                <span>پنل کاربری</span>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={secondaryText} fontSize="sm">
              <BreadcrumbLink href={`#`} color={secondaryText}>
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/* Here we create navbar brand, based on route name */}
          <Link
            color={mainText}
            href="#"
            bg="inherit"
            borderRadius="inherit"
            fontWeight="bold"
            fontSize="16px"
            _hover={{ color: { mainText } }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            {brandText}
          </Link>
        </Box>
        <Box pl="10" w={{ sm: "100%", md: "unset" }}>
          <AdminNavbarLinks onOpen={props.onOpen} secondary={secondary} fixed={fixed} />
        </Box>
      </Flex>
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string.isRequired
};

export default AdminNavbar;
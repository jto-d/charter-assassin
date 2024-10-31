import { useEffect, useState } from "react";

import { Box, Button, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

// State
import { userIDAtom } from "global/user-state";

// API
import { requestTokens } from "utils/auth";
import { logout } from "api/auth";

/**
 * Container for all app screens, includes header and react router outlet.
 */
function Root() {
  const userId = useRecoilValue(userIDAtom);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only use this is the user ID is not null
    if (userId != null) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const grab = async () => {
      try {
        await requestTokens();
        setLoading(false);
      } catch {
        navigate("/login");
      }
    };
    // Otherwise, attempt to grab refresh tokens
    grab();
  }, [userId, navigate]);

  /* Make the outlet cover the whole screen, but leave 50 pixels on the top, which
   which is space for the header. */
  return (
    <>
      {!loading && (
        <>
          <Header />
          <Box
            position="absolute"
            top="50px"
            left="0"
            right="0"
            bottom="0"
            overflow="auto"
          >
            <Outlet />
          </Box>
        </>
      )}
    </>
  );
}

function Header() {
  const navigate = useNavigate();
  return (
    <Box
      width="100%"
      height="50px"
      backgroundColor="blue.100"
      display="flex"
      flexDir="row"
      padding="16px"
      alignItems="center"
      fontWeight="extrabold"
      position="fixed"
      top="0"
      left="0"
      right="0"
      overflow="hidden"
      zIndex={1}
    >
      <Text
        fontSize="2xl"
        bgGradient="linear(to-l, blue.500, blue.700, blue.400)"
        bgClip="text"
      >
        WHITMAN WIPEOUT
      </Text>
      <Button
        marginLeft="auto"
        onClick={async () => {
          await logout();
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Box>
  );
}

export default Root;

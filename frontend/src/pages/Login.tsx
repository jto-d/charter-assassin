import { BASE_URL } from "../constants";
import { useEffect, useState } from "react";
import { userIDAtom } from "../global/user-state";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { requestTokens } from "../utils/auth";

// Components
import { Box, Button, Spinner, Stack, Text } from "@chakra-ui/react";

function Login() {
  const userId = useRecoilValue(userIDAtom);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Attempt to auto login
  useEffect(() => {
    if (userId != null) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const grab = async () => {
      try {
        await requestTokens();
        navigate("/app/leaderboard");
      } catch {
        setLoading(false);
      }
    };
    grab();
  }, [userId, navigate]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      paddingX={{ base: "4", md: "8" }}
      textAlign="center"
    >
      {!loading ? (
        <Stack alignItems="center" spacing={{ base: "4", md: "6" }} width="100%">
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="Instrument Sans"
          >
            Welcome to
          </Text>
          <Text
            fontSize={{ base: "12vw", md: "8vw", lg: "6vw" }}
            bgGradient="linear(to-l, blue.300, blue.400, blue.200)"
            bgClip="text"
            fontWeight="extrabold"
            fontFamily="Inter"
          >
            WHITMAN WIPEOUT
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            mt="6"
            maxWidth="500px"
            paddingX="4"
          >
            Login with your{" "}
            <Box as="span" fontWeight="bold">
              princeton.edu
            </Box>{" "}
            Google account to begin
          </Text>
          <Button
            colorScheme="blue"
            size={{ base: "md", md: "lg" }}
            paddingX={{ base: "6", md: "8" }}
            onClick={async () => {
              window.location.href = `${BASE_URL}/auth/google`;
            }}
          >
            Login
          </Button>
        </Stack>
      ) : (
        <Spinner size="xl" />
      )}
    </Box>
  );
}

export default Login;

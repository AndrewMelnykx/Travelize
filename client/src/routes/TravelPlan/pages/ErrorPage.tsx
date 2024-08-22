import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mt={"10%"}
    >
      <Typography variant="h2" color="white">
        Error 404
      </Typography>
      <Typography variant="h3" color="white" width="800px">
        Server error occurred, please return to the home page.
      </Typography>
    </Box>
  );
};

export default ErrorPage;

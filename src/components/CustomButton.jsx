import { Button } from "@mui/material";

const CustomButton = ({ ...props }) => {
  return (
    <Button
      variant="contained"
      {...props}
      sx={{ margin: "5px", backgroundColor: "green" }}
    />
  );
};

export default CustomButton;

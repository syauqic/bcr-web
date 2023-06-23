import { Button } from "react-bootstrap";
const BUTON_VARIANT = {
  base: "success",
  edit: "outline-primary",
};
const CustomButton = ({
  buttonSearch = false,
  text,
  type = "button",
  variant = "base",
  isShow = true,
  onClick = () => {},
}) => {
  return isShow ? (
    <Button
      type={type}
      variant={BUTON_VARIANT[variant]}
      onClick={onClick}
      className={!buttonSearch ? "" : "w-100"}
    >
      {text}
    </Button>
  ) : (
    <></>
  );
};

export default CustomButton;

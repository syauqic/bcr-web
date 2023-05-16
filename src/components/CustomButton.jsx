import { Button } from "react-bootstrap";
const BUTON_VARIANT = {
  base: "success",
  edit: "outline-primary",
};
const CustomButton = ({
  text,
  type = "button",
  variant = "base",
  isShow = true,
  onClick = () => {},
}) => {
  return isShow ? (
    <Button type={type} variant={BUTON_VARIANT[variant]} onClick={onClick}>
      {text}
    </Button>
  ) : (
    <></>
  );
};

export default CustomButton;

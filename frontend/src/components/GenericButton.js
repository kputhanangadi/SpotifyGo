import Button from "@mui/material/Button";

// accepts props.text = text for button, props.href = href loc
export default function GenericButton(props) {
  return (
    <Button
      id="login-bt"
      variant="contained"
      target="_self"
      href={props.href}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}

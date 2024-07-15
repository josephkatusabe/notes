import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/register");
  };

  return (
    <div>
      <Form route="/api/token/" method="login" />
      <p>Already have an account?</p>
      <span
        onClick={handleLoginClick}
        style={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Register
      </span>
    </div>
  );
}

export default Login;

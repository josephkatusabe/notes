import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

function Register() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <Form route="/api/user/register/" method="register" />
      <p>Already have an account?</p>
      <span
        onClick={handleLoginClick}
        style={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Login
      </span>
    </div>
  );
}

export default Register;

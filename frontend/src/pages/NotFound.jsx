import { Navigate } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404: Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={() => window.history.back()}>Go Home</button>
    </div>
  );
}

export default NotFound;

import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Oof! page not found</h3>
          <p>See above - can't find the page you're looking for</p>
          <Link to="/dashboard">back to dashboard</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong!</h3>
      </div>
      <Link to="/">back home</Link>
    </Wrapper>
  );
};
export default Error;

import { useNavigate } from "react-router";
import CustomKideImage from "./CostumKideIamge";

const About = () => {
  const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/"); // whatever route you want to navigate to
  // };

  return (
    <>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          nesciunt, quam voluptate deserunt tenetur eius nisi fugit molestiae
          adipisci suscipit, facilis aliquid. Tempore sequi eum facilis illo
          quis et quaerat.
        </p>
        <button onClick={() => navigate("/")}>Return to Home</button>
      </div>

      <div style={{ width: "100%", height: "500px" }}>
        <CustomKideImage />
      </div>
    </>
  );
};

export default About;

import  { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();
  return(
    <>
    <h1>This is the about page</h1>
    <button onClick={()=>navigate("/")}>Go back to Home</button>
    <button onClick={()=>navigate("/contact")}>Go back to Contact page</button>
    </>
  )
}

export default About;
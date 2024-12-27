import './body.css'
import avatars from "../../assets/avatars.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Body() {
  return (
    <div className="body d-flex justify-content-center align-items-center flex-column vh-100">
      <img src= {avatars} alt="" />
      <h1>Start Framework</h1>
      <div className=" wrapper">
        <div className="line"></div>
        <i className="fa-solid fa-star star text-white "></i>
        <div className="line"></div>
      </div>
      <h3>Graphic Artist - Web Designer - Illustrator</h3>
    </div>
  );
}

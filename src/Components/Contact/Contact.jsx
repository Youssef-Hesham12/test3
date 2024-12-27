import "./contact.css";
export default function Contact() {
  return (
    <div className="d-flex justify-content-between  contact text-white p-5">
      <div className="container d-flex justify-content-between">
        <div className="d-flex flex-column align-items-center">
          <h3>Location</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3>AROUND THE WEB</h3>
          <div className="d-flex justify-content-center align-items-center w-100">
            <i className="fa-brands fa-facebook p-2 border border-white rounded m-2 "></i>
            <i className="fa-brands fa-twitter p-2  border border-white rounded m-2 "></i>
            <i className="fa-brands fa-linkedin p-2 border border-white rounded m-2 "></i>
            <i className="fa-solid fa-globe p-2 border border-white rounded m-2 "></i>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3>ABOUT FREELANCER</h3>
          <p className="text-center w-75">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
    </div>
  );
}

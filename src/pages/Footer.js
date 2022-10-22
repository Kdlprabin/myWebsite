import SocialLinksList from "../SocialLinksList";

function Footer() {
  return (
    <>
      <div className="text-white d-flex justify-content-between mx-5 mt-4">
      <SocialLinksList />
          <div>
          <p className="text-primary">Website: <span className="text-white">kandelprabin.com.np</span></p>
          <p className="text-primary">Email: <span className="text-white">kdlprabin444@gmail.com</span></p>
          <p className="text-primary">Contact: <span className="text-white">+977-9841265446</span></p>
          </div>
      </div>
      <div className="text-white text-center p-5">
        &copy;{" "}
        <span>
          copyrights reserved by{" "}
          <span className="text-danger">Prabin Kandel</span>
        </span>
      </div>
    </>
  );
}
export default Footer;

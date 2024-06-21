import ContentHead_ad from "./ContentHead_ad";
import "../styles/content.css";
import Card_ad from "../admin_components/Card_ad";
import Teams_ad from "./Teams_ad";

const Content_ad = () => {
  return (
    <div className="content">
      <ContentHead_ad />
      <Card_ad />
      <Teams_ad />
    </div>
  );
};

export default Content_ad;

import "./HeaderSample.scss";

type Props = {
  text: string;
  buttonText: string;
  article: string[] | string;
};
const HeaderSample = ({ text, buttonText, article }: Props) => {
  return (
    <div className="main-text-wrapper">
      <div className="main-text">
        <div className="main-article-wrapper">
          <span className="span-article span-title">{article}</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeaderSample;

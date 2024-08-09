import ClientPage from "./ClientPage";
import { useBlogContext } from "../BlogContext";
import SameArticle from "./SameArticle";

export default function Article() {
  return (
    <div className="article__page">
      <ClientPage />
      <SameArticle/>
    </div>
  );
}

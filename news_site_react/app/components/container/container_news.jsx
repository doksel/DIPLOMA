import React from "react";
import NewsList from "../../containers/news_list";
import DetailsNews from "../../containers/details_news";

class ContainerNews extends React.Component {
    render() {
      return <div className="containerNews">
                <NewsList/>
                <DetailsNews/>
             </div>;
    }
  }
  export default ContainerNews;
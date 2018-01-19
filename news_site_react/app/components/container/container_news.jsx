import React from "react";
import NewsList from "../../containers/news_list";

class ContainerNews extends React.Component {
    render() {
      return <div className="containerNews">
                <NewsList/>
             </div>;
    }
  }
  export default ContainerNews;
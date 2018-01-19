import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class NewsList extends React.Component{
    showNews(){
        return this.props.news.map((news)=>{
            return <div class="onenews">
                        <h2 key={news.id}>{news.title}</h2>
                        <p key={news.id}>{news.text}</p>
                    </div>
            }
        );
    }
    render(){
        return <div>
                        {this.showNews()}
                </div>;
    }
}

function mapStateToProps (state){
    return{
        news: state.news
    }
}

export default connect(mapStateToProps)(NewsList);
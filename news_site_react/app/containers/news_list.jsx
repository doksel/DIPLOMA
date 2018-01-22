import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectNews} from '../actions/actionNews';

class NewsList extends React.Component{
    showNews(){
        return this.props.news.map((news)=>{
            return <div className="onenews" key={news.id} onClick={()=>this.props.selectNews(news)}>
                        <h3>{news.title}</h3>
                    </div>
            }
        );
    }
    render(){
        return <div>
                    <h2>Последние новости</h2>
                    {this.showNews()}
                </div>;
    }
}

function mapStateToProps (state){
    return{
        news: state.news
    }
}

function matchDispatchToProps (dispatch){
    return bindActionCreators({selectNews: selectNews},dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewsList);
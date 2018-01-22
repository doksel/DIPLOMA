import React from 'react';
import {connect} from 'react-redux';

class DetailsNews extends React.Component{
    render(){
        if(!this.props.news){
            return <p>Выберите ноость</p>;
            }
        return <div>
            <h2>{this.props.news.title}</h2>
            {/* <div className="imgOneNews">
                <img src="{this.props.news.img}" alt="Картинка"/>
            </div> */}
            <p>{this.props.news.text}</p><br/>
            <p>{this.props.news.dataNews}</p>
               </div>
    }
}

function mapStateToProps (state){
    return {
        news: state.active
    }
}

export default connect(mapStateToProps)(DetailsNews)
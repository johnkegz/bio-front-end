import React, { Component } from "react";
import LayOut from "./layOut";
import "./stories.scss";
import { connect } from "react-redux";
import { getFeed, approve } from '../../redux/actions/actions';

class Analytics extends Component {
    componentDidMount(){
        this.props.getFeed();
    }

    handleApprove(id){
       return this.props.approve(id);
    }
    displayStory(feedData){
        const feed = feedData.map(feed=>{
            return (
                <div className='innerCardTwo' key={feed.id}>
                <div className='innerCardTwoContent'>
                  <img
                    src={feed.picUrl}
                    alt=''
                  />
                </div>
                <div className='innerCardTwoContent'>
                  {feed.title}
                </div>
                <div className='statusButtons'>
                  <button type="button" className="btn btn-primary" onClick={()=>this.handleApprove(feed.id)}>Approve</button>
                  <button type="button" className="btn btn-danger">reject</button>
                </div>
              </div>
            )
        })
        return feed;
    }

  render() {
    return (
      <div>
        <LayOut>
          <div className='container'>
            <div className='firstCards'>
              <div className='innerCardOne'>
                <div className='innerCardOneBrown'>
                  <div className='storyCard'>View member</div>
                </div>
                <div className='innerCardOneGreen'>
                  <div className='storyCard'>Add member</div>
                </div>
                <div className='innerCardOneOrange'>
                  <div className='storyCard'>Chat</div>
                </div>
              </div>
              {this.displayStory(this.props.feedData)}
            </div>
          </div>
        </LayOut>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    feedData: state.feedReducer.feedData
  });
  const mapDispatchToProps = ({
    getFeed,
    approve
  });

export default connect(mapStateToProps,
    mapDispatchToProps)(Analytics);
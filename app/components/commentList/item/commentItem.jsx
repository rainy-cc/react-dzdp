import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Star from '../../star/star.jsx';

import './item.less';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        const item = this.props.data;

        return (
            <div className="comment-item clearfix">
                <div className="headPortrait">
                    <img src = {item.headPortrait} alt="头像" />
                </div>
                <div className="comment-box">
                    <p className="username">{item.username}</p>
                    <Star starNum={item.star}/>
                    <p>{item.comment}</p>
                    <div className="photos clearfix">
                        {item.photo?
                            item.photo.map((value,index)=>{
                                return (
                                    <img key={index} src={value} alt="photo" />
                                );
                            }):<div></div>
                        }

                    </div>

                </div>

            </div>
        );
    }
}

export default CommentItem;

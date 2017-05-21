/*
*    star评分
*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './star.less';


class Star extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        // 获取star的数目  最多5星;
        let starNum = this.props.starNum || 0;
        let starArr = [1,2,3,4,5];
        //>5  取模
        if(starNum>5){
            starNum%=5;
        }
        return (
            <div className = "star">
                {
                    starArr.map((value,index)=>{
                        const isLight = starNum>=value?' light':'';
                        return (<i key={index} className={'icon-star  '+ isLight}></i>);
                    })
                }

            </div>
        );
    }
}

export default Star;

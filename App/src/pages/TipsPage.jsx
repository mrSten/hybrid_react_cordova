import React, { Component } from 'react';
import { Page, LazyList, ListItem } from 'react-onsenui';
import { platform } from 'onsenui';

class TipsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };

    }
//TODO: Get places depending on position, in order of relevance to user
    renderRow(index) {
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis, et .';
        const items = [
            <div className='item-container'><div className='leftItem'> </div><div className='rightItem'>{text}</div></div>,
            <div className='item-container'><div className='leftItem'></div><div className='rightItem'>{text}</div></div>,
            <div className='item-container'><div className='leftItem'></div><div className='rightItem'>{text}</div></div>,
            <div className='item-container'><div className='leftItem'></div><div className='rightItem'>{text}</div></div>,
            <div className='item-container'><div className='leftItem'></div><div className='rightItem'>{text}</div></div>,
            <div className='item-container'><div className='leftItem'></div><div className='rightItem'>{text}</div></div>,
            <div className='item-container'><div className='leftItem'></div><div className='rightItem'>{text}</div></div>,
            <div className='item-container'><div className='leftItem'></div><div className='rightItem'>{text}</div></div>,
            <div className='item-container'><div className='leftItem'></div><div className='rightItem'>{text}</div></div>
        ];
        return (
            <ListItem key={index}>
                {items[index]}
            </ListItem>
        );
    }


    render() {
        return (
            <Page>
                <div className='tips-container'>
                
                    <LazyList
                        length={9}
                        renderRow={this.renderRow}
                        calculateItemHeight={() => platform.isAndroid() ? 48 : 44}
                    />
                </div>
            </Page>
        )
    }
}
export const TIPS_ROUTE = {
    key: 'TIPS_PAGE',
    component: TipsPage
}
export default TipsPage;
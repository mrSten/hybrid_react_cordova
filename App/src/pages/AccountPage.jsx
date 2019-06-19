import React, { Component } from 'react';
import { Page, List, ListHeader, ListItem, Icon, Switch, Toast } from 'react-onsenui';
import { notification } from 'onsenui';
import {signOutFunction} from '../components/MyTabbar';

class AccountPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Your account',
            username: 'Fredrik Bogren',
            adress: 'Volontärgatan 83 621 37 Vi...',
            toastShown: false
        };
        this.signOut = this.signOut.bind(this);
        this.contactUs = this.contactUs.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changeAdress = this.changeAdress.bind(this);
    }

    changeUsername() {
        notification.prompt({
            title: '',
            message: 'fill in your name',
            callback: function(name) {
                this.setState({username: name});
            }.bind(this)
        });
    }
   
    changeAdress() {
        notification.prompt({
            title: '',
            message: 'fill in your adress',
            callback: function(userAdress) {
                this.setState({adress: userAdress});
            }.bind(this)
        });
    }

    signOut() {
        //TODO: set state of myTabbar signedIn: false
        this.setState({ toastShown: !this.state.toastShown });
        setTimeout(() => {
            this.setState({ toastShown: !this.state.toastShown });
        }, 2000);
    }

    contactUs() {
        this.setState({ toastShown: !this.state.toastShown });
        setTimeout(() => {
            this.setState({ toastShown: !this.state.toastShown });
        }, 2000);
    }


    render() {
        return (
            <Page >
                <div className='account-container'>
                    <div className='account-info-container'>
                        <List modifier="inset">
                            <ListHeader>Your account</ListHeader>
                            <ListItem modifier="longdivider" tappable onTouchStart={this.changeUsername}>
                                <div className=".left-image">
                                    <img className="list-item__thumbnail" />
                                </div>
                                <div className="center">
                                    <span className="list-item__title">{this.state.username}</span>
                                </div>
                            </ListItem>
                            <ListItem modifier="longdivider" tappable onTouchStart={this.changeAdress}>
                                <div className="center">
                                    <span className="list-item__title">{this.state.adress}</span>
                                </div>
                            </ListItem>
                        </List>
                        <div className='social-media-container'>
                            <List modifier="inset">
                                <ListHeader>Social media connections</ListHeader>
                                <ListItem modifier="longdivider">
                                    <div className="left">
                                        <Icon icon="md-facebook" className="list-item__icon"></Icon>
                                    </div>
                                    <div className="center">
                                        Facebook
                                    </div>
                                    <div className="right">
                                        <Switch></Switch>
                                    </div>
                                </ListItem>
                                <ListItem modifier="longdivider">
                                    <div className="left">
                                        <Icon icon="md-instagram" className="list-item__icon"></Icon>
                                    </div>
                                    <div className="center">
                                        Instagram
                                    </div>
                                    <div className="right">
                                        <Switch></Switch>
                                    </div>
                                </ListItem>
                            </List>
                        </div>
                        <div className='alternatives-container'>
                            <List modifier="inset">

                                <ListItem modifier="longdivider" tappable onTouchStart={this.signOut}>
                                    <div className="center">
                                        Sign me out
                                      </div>
                                </ListItem>
                                <ListItem modifier="longdivider" tappable onTouchStart={this.contactUs}>
                                    <div className="center">
                                        Contact us
                                      </div>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </div>
                <Toast isOpen={this.state.toastShown}>
                    <div className="message">
                        Not available in beta
                    </div>
                </Toast>
            </Page>
        )
    }
}
export const ACCOUNT_ROUTE = {
    key: 'ACCOUNT_PAGE',
    component: AccountPage
}
export default AccountPage;
import { Page, Input, Button, Navigator, Tabbar, Tab, Toolbar, Splitter, SplitterSide, SplitterContent, List, ListItem } from 'react-onsenui';
import React from 'react';
import MapPage from '../pages/MapPage';
import ChatbotPage from '../pages/ChatbotPage';
import TipsPage from '../pages/TipsPage';
import AccountPage from '../pages/AccountPage';
import CameraPage from '../pages/CameraPage';

export default class MyTabbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            isOpen: false,
            username: '',
            password: '',
            signedIn: false,
            toastShown: false,
            accountPageVisible: false
        };
        this.accountClick = this.accountClick.bind(this);
        this.splitterClick = this.splitterClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signInTry = this.signInTry.bind(this);
        this.renderToolbar = this.renderToolbar.bind(this);
    }

    splitterClick(title) {
        //Can do various commands depending on what is clicked on the sidebar, nothing yet.
    }




    renderTabs() {
        const PAGES = [
            <MapPage key="map-page" />,
            <TipsPage key="tips-page" />,
            <ChatbotPage key="chatbot-page" />,
            <CameraPage key="camera-page" />
        ]

        return [
            {
                content: <Page>{PAGES[0]}</Page>,
                tab: <Tab label='Map' icon='md-map' />
            },
            {
                content: <Page>{PAGES[1]}</Page>,
                tab: <Tab label='Tips' icon='md-label-heart' />
            },
            {
                content: <Page>{PAGES[2]}</Page>,
                tab: <Tab label='Chatbot' icon='md-comments' />
            },
            {
                content: <Page>{PAGES[3]}</Page>,
                tab: <Tab label='Camera' icon='md-camera' />
            }
        ];
    }


    accountClick() {
        if (this.state.signedIn) {
            this.setState({ accountPageVisible: !this.state.accountPageVisible });
        } else {
            this.setState({ isOpen: !this.state.isOpen });
        }

    }

    signInTry() {
        //TODO: sign in 

        if (this.state.username == "testuser" && this.state.password == 123) {
            this.setState({ signedIn: true });
            this.setState({ isOpen: !this.state.isOpen });
        }
        else {
            alert('felaktigt användarnamn eller lösenord'); //TODO: toa
        }

    }
    signUp() {
        //TODO: skapa användare
        alert('Inte tillgängligt i Beta');
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className="toolbarContainer">
                    <div className="center">
                        E-tour 1.0
                    </div>
                    <div className="right" onTouchStart={this.accountClick}>

                    </div>
                </div>
            </Toolbar>
        );
    }

    render() {
        const pageHolder = [<Tabbar
            swipeable={true}
            position='bottom'
            index={this.state.index}
            onPreChange={(event) => {
                if (event.index != this.state.index) {
                    this.setState({ index: event.index });
                }
            }
            }
            renderTabs={this.renderTabs}
        />,
        <AccountPage key="account-page" />
        ]

        return (
            <Splitter>
                <SplitterSide
                    style={{
                        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
                    }}
                    side='right'
                    width={200}
                    collapse={true}
                    swipeable={false}
                    isOpen={this.state.isOpen}
                    onClose={this.accountClick}
                >
                    <Page>
                        <List className='testList'
                            dataSource={[<section className='side-container' style={{ textAlign: 'center' }}>
                                <div className='first-side'>
                                    <p>
                                        <Input
                                            value={this.state.username}
                                            onChange={this.handleUsernameChange}
                                            modifier='underbar'
                                            float
                                            placeholder='Username' />
                                    </p>
                                    <p>
                                        <Input
                                            value={this.state.password}
                                            onChange={this.handlePasswordChange}
                                            modifier='underbar'
                                            type='password'
                                            float
                                            placeholder='Password' />
                                    </p>
                                    <p>
                                        <Button onTouchStart={this.signInTry}>Sign in</Button>
                                    </p>
                                    <p>
                                        <Button onTouchStart={this.signUp}>Sign up</Button>
                                    </p>
                                </div>
                            </section>]}
                            renderRow={(title) => (
                                <ListItem key={title} onTouchStart={this.splitterClick.bind(this, title)}>{title}</ListItem>
                            )}
                        />
                    </Page>
                </SplitterSide>
                <SplitterContent>
                    <Page renderToolbar={this.renderToolbar}>
                        <div className="content-container">

                            {(this.state.accountPageVisible ? pageHolder[1] : pageHolder[0])}

                        </div>
                    </Page>
                </SplitterContent>
            </Splitter>
        )
    }

}
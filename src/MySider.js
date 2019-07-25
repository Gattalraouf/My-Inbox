import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Button } from 'antd';

const { Sider } = Layout;


export default class MySider extends React.Component {

    constructor(props) {
        super(props);
        this.menuClick = this.menuClick.bind(this);
        this.openComposer = this.openComposer.bind(this);
    }

    menuClick(event) {
        this.props.action(event.key);
    }

    openComposer() {
        this.props.composer();
    }


    render() {
        return (
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >


                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={this.menuClick}>
                        <Icon type="inbox" />
                        <span className="nav-text">Inbox</span>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={this.menuClick}>
                        <Icon type="form" />
                        <span className="nav-text">Drafts</span>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={this.menuClick}>
                        <Icon type="select" />
                        <span className="nav-text">Sent</span>
                    </Menu.Item>
                    <Menu.Item key="4" onClick={this.menuClick}>
                        <Icon type="delete" />
                        <span className="nav-text">Trash</span>
                    </Menu.Item>
                </Menu>



                <Button type="primary" block icon="edit" size="large" onClick={this.openComposer} style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%'
                }}>
                    Compose
                </Button>

            </Sider>
        );
    }
}
import React from 'react';
import { Layout } from 'antd';
import reqwest from 'reqwest';
import { Button } from 'antd';

import { Input } from 'antd';


const { TextArea } = Input;

const { Header, Content } = Layout;


export default class MailContent extends React.Component {

    constructor(props) {
        super(props)
        this.onNewMsg = this.onNewMsg.bind(this)
        this.onChangeMsg=this.onChangeMsg.bind(this)
        this.onSend=this.onSend.bind(this)
    }
    state = {
        initLoading: true,
        loading: false,
        data: '',
        msg: false,
        msgContent:''
    };




    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res,
            });
        });
    }

    getData = callback => {
        var dataUrl = `https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/${this.props.id}`;

        reqwest({
            url: dataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };

    onChangeMsg = e => {
        this.setState({
            msgContent: e.target.value
        })
    };

    onNewMsg() {
        this.setState({
            msg: true
        })
    }

    onSend = () => {
        const dataUrl = `https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/${this.props.id}`;
        var json = '{ "message": "' + this.state.msgContent + '" , "creator" : "'+this.state.data.creator.email+'"}'
        reqwest({
            url: dataUrl,
            type: 'json',
            method: 'post',
            data: json,
            contentType: 'application/json',
            success: res => {
                console.log("sent with sucess")
            },
        });
    }

    render() {

        return (
            <Layout style={{ margin: '0 24px', background: '#fff' }}>
                <Header style={{ background: '#fef3f3' }} >
                    <p>{this.state.data.subject}</p>

                </Header>

                <Content className="Mail">
                    {this.state.data !== '' && <p>{this.state.data.creator.username}</p>}
                    {this.state.data !== '' && <p>{this.state.data.time}</p>}
                    {this.state.data !== '' && <p>{this.state.data.messages[0].body}</p>}

                    <Button onClick={this.onNewMsg} type="link">New Message</Button>
                    {this.state.msg && <TextArea placeholder="message" onChange={this.onChangeMsg} rows={4} />}
                    {this.state.msg && <Button type="link" onClick={this.onSend}>Send</Button>}


                </Content>
            </Layout>
        );
    }
}
import { Drawer, Button } from 'antd';
import React from 'react'
import { Input } from 'antd';
import reqwest from 'reqwest';


const { TextArea } = Input;
const dataUrl = `https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/`;

export default class Compose extends React.Component {
    state = {
        visible: this.props.compose,
        subject: "",
        recipient: "",
        msg: ""
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
        this.props.cancel()
    };

    onSend = () => {

        var json = '{ "subject": "' + this.state.subject + '","recipient": "' + this.state.recipient + '","message": "' + this.state.msg + '"}'
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
        this.onClose()
    }

    componentDidUpdate(prevProps) {

        console.log(prevProps.compose)

        if (this.props.compose !== prevProps.compose) {
            this.setState({
                visible: this.props.compose
            })
        }

    }

    onChangeResipent = e => {
        this.setState({
            recipient: e.target.value
        })
    };

    onChangeSubject = e => {
        this.setState({
            subject: e.target.value
        })
    };

    onChangeMsg = e => {
        this.setState({
            msg: e.target.value
        })
    };

    render() {
        return (
            <Drawer
                title="Compose new email"
                width={720}
                onClose={this.onClose}
                visible={this.state.visible}
            >

                <Input placeholder="recipient" onChange={this.onChangeResipent} style={{ margin: '24px 0' }} />
                <Input placeholder="subject" onChange={this.onChangeSubject} style={{ margin: '24px 0' }} />
                <TextArea placeholder="message" onChange={this.onChangeMsg} rows={4} />
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '10px 16px',
                        background: '#fff',
                        textAlign: 'right',
                    }}
                >
                    <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                    <Button onClick={this.onSend} type="primary">
                        Submit
                    </Button>
                </div>
            </Drawer>

        );
    }
}

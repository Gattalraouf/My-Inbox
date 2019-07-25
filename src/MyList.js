import { List, Skeleton } from 'antd';
import React from 'react';
import reqwest from 'reqwest';

const fakeDataUrl = `https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/`;

export default class LoadMoreList extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res,
                list: res,
            });
        });
    }

    getData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };

    render() {
        const { initLoading, list } = this.state;

        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item actions={[ <div >{item.time}</div>, <a onClick={(event) => this.props.action(item.id)} >More</a>]}>>
                        <Skeleton title loading={item.loading} active>
                            <List.Item.Meta
                                title={item.subject}
                                description={item.creator.username}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        );
    }
}
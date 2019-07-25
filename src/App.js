import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import MySider from './MySider.js';
import LoadMoreList from './MyList';
import MailContent from './MailContent';
import Compose from './Compose';

const { Content, Footer, Sider } = Layout;



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuItem: 1,
      compose: false,
      threadId:""
    };
    this.menuChoice = this.menuChoice.bind(this)
    this.composeEmail = this.composeEmail.bind(this)
    this.cancel = this.cancel.bind(this)
    this.choseThread=this.choseThread.bind(this)
  }

  menuChoice(id) {
    console.log(id)
    this.setState({
      menuItem: id
    });
  }

  composeEmail() {
    this.setState({
      compose: true
    });
  }

  cancel() {
    this.setState({
      compose: false
    });
  }

  choseThread(id){
    console.log(id)
    this.setState({
      threadId: id
    });
  }

  render() {
    return (
      <Layout>

        <Compose compose={this.state.compose} cancel={this.cancel} />

        <MySider action={this.menuChoice} composer={this.composeEmail} />

        <Layout className="MainScreen" style={{ marginLeft: 200 }}>

          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={600} style={{ background: '#fff' }}>
                  <LoadMoreList action={this.choseThread}/>
                </Sider>
                {this.state.threadId!=="" && <MailContent id={this.state.threadId} />}
              </Layout>
            </div>
          </Content>

    
        </Layout>

      </Layout >
    );
  }
}

export default App;



import React from 'react'

import {Layout, Menu, Button} from 'antd'

const {Header, Content, Footer, Sider} = Layout

export default class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = { salary: 10000};
    //     // this.increase = this.increase.bind(this);
    //     // this.decrease = this.decrease.bind(this);
    // }

    // increase() {
    //     this.setState({salary: this.state.salary +1000});
    // }
    // decrease() {
    //     this.setState({salary: this.state.salary - 1000})
    // }

    render() {
        var {salary, DoIncrease, DoDecrease} = this.props;
        console.log(this.props);
        return (
            <Layout>
                <Header>
                    <div className="logo">2</div>
                    <Menu theme="white" mode="horizontal" style={{lineHeight: '64px'}}>
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2">视频</Menu.Item>
                        <Menu.Item key="3">web前端</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{textAlign: 'center'}}>
                    <h1>搬砖工资：</h1>
                    <div>{salary}</div>
                    <Button type='primary' onClick={DoIncrease}>加薪</Button>
                    <Button type='danger' onClick={DoDecrease}>降薪</Button>
                </Content>
            </Layout>
        )
    }
}
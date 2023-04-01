import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { menuItems } from '../menuItems';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import '../assets/css/Header.css';
import avatar from '../assets/images/avatar.jpg';
import flag from '../assets/images/flag_en.svg';
import logo from '../assets/images/logo.png';
import PayrollForm from './PayrollForm';
import TableData from './TableData';
import SlideShow from './SlideShow';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MainLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const renderMenuItem = ({ id, title, url, icon, subMenu }) => {
        if (subMenu) {
            return (
                <SubMenu key={id} title={title} icon={icon}>
                    {subMenu.map((menu) => renderMenuItem(menu))}
                </SubMenu>
            );
        }
        return (
            <Menu.Item key={id} icon={icon}>
                {title}
            </Menu.Item>
        );
    };

    return (
        <Layout>
            <Header style={{ backgroundColor: colorBgContainer }} className="header">
                <div className="header-left">
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="header-right">
                    <div className="header-search">
                        <button>
                            <SearchOutlined />
                        </button>
                    </div>
                    <div className="header_nav">
                        <button>
                            <img src={flag} alt="" />
                        </button>
                        <button>
                            <BellOutlined />
                        </button>
                        <button>
                            <img src={avatar} alt="" className="avatar" />
                        </button>
                    </div>
                </div>
            </Header>

            <Layout className="site-layout">
                <Sider breakpoint="lg" width={'16%'} style={{ height: '100%', backgroundColor: 'white' }}>
                    <Menu style={{ height: '100%' }}>{menuItems.map((menu) => renderMenuItem(menu))}</Menu>
                    <div className="help">
                        <img src="https://minimals.cc/assets/illustrations/illustration_docs.svg" alt="" />
                        <h4>Hi, HieuBC</h4>
                        <p>Need help? Please check our docs.</p>
                        <button>Document</button>
                    </div>
                </Sider>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Payroll services in bank' }]} />

                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <PayrollForm />
                        <TableData />
                    </div>
                </Content>
            </Layout>
            <SlideShow />
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by HIEUBC
                <span style={{ float: 'right' }}>Version: 1.1.1</span>
            </Footer>
        </Layout>
    );
};
export default MainLayout;

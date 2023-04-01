import {
    HomeOutlined,
    ContainerOutlined,
    MoneyCollectOutlined,
    WalletOutlined,
    TransactionOutlined,
    SettingOutlined,
    WarningOutlined,
} from '@ant-design/icons';

export const menuItems = [
    {
        id: '1',
        title: 'Home',
        url: '/',
        icon: <HomeOutlined />,
    },
    {
        id: '2',
        title: 'Contract',
        url: '/contract',
        icon: <ContainerOutlined />,
        subMenu: [
            {
                id: '2.1',
                title: 'Contract List',
            },
            {
                id: '2.2',
                title: 'Create New Contract',
            },
            {
                id: '2.3',
                title: 'Approve Contract',
            },
            {
                id: '2.4',
                title: 'Approve User',
            },
            {
                id: '2.5',
                title: 'Unblock Contract',
            },
            {
                id: '2.6',
                title: 'Unblock User',
            },
            {
                id: '2.7',
                title: 'Reset pin/ Password',
            },
        ],
    },
    {
        id: '3',
        title: 'Fee Management',
        url: '/feemanagement',
        icon: <MoneyCollectOutlined />,
        subMenu: [
            {
                id: '3.1',
                title: 'Set fee',
            },
            {
                id: '3.2',
                title: 'Transaction fee',
                subMenu: [
                    {
                        id: '3.2.1',
                        title: 'Product fee',
                    },
                    {
                        id: '3.2.2',
                        title: 'Contract fee',
                    },
                    {
                        id: '3.2.3',
                        title: 'OTC fee',
                    },
                ],
            },
            {
                id: '3.3',
                title: 'Set fee share',
            },
        ],
    },
    {
        id: '4',
        title: 'Limit Management',
        url: 'limitmanagement',
        icon: <WalletOutlined />,
        subMenu: [
            {
                id: '4.1',
                title: 'Product limit',
                url: '',
            },
            {
                id: '4.2',
                title: 'Contract limit',
                url: '',
            },
            {
                id: '4.3',
                title: 'Wallet balance limit',
                url: '',
            },
        ],
    },
    {
        id: '5',
        title: 'Transaction',
        url: '/transaction',
        icon: <TransactionOutlined />,
        subMenu: [
            {
                id: '5.1',
                title: 'Transaction history',
                url: '',
            },
            {
                id: '5.2',
                title: 'Top Up to E-wallet',
                url: '',
            },
            {
                id: '5.3',
                title: 'Withdrawal from E-wallet',
                url: '',
            },
            {
                id: '5.4',
                title: 'Cash back',
                url: '',
            },
            {
                id: '5.5',
                title: 'Payroll',
                url: '',
            },
            {
                id: '5.6',
                title: 'Admin transaction',
                url: '',
            },
            {
                id: '5.7',
                title: 'Reversal transaction',
                url: '',
            },
        ],
    },
    {
        id: '6',
        title: 'System',
        url: '/system',
        icon: <SettingOutlined />,
        subMenu: [
            {
                id: '6.1',
                title: 'Group management',
                url: '',
            },
            {
                id: '6.2',
                title: 'User management',
                url: '',
            },
            {
                id: '6.3',
                title: 'System parameter',
                url: '',
            },
        ],
    },
    {
        id: '7',
        title: 'Report',
        url: '/report',
        icon: <WarningOutlined />,
        subMenu: [
            {
                id: '7.1',
                title: 'Report list',
                url: '',
            },
        ],
    },
];

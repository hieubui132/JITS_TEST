import { Table } from 'antd';
import { Select } from 'antd';
import '../assets/css/Table.css';

const { Option } = Select;
function TableData() {
    const dataSource = [
        {
            requestNo: 123456,
            requestTime: '3/6/2022 2:04:00 PM',
            createduser: 'bichdtn',
            approvalTime: '3/6/2022 1:51:00 PM',
            debitAccount: '0001010200027395',
            amountApprover: '6000',
            approver: 'VuTT',
            reasontoreject: '',
            status: 'Pending',
        },
        {
            requestNo: 573756,
            requestTime: '3/6/2022  11:33:00 AM',
            createduser: 'bichdtn',
            approvalTime: '3/6/2022 1:51:00 PM',
            debitAccount: '0001010200027395',
            amountApprover: '6001',
            approver: 'VuTT',
            reasontoreject: '',
            status: 'Incompleted',
        },
        {
            requestNo: 573757,
            requestTime: '3/7/2022  11:33:00 AM',
            createduser: 'bichdtn',
            approvalTime: '3/6/2022  11:26:00 AM',
            debitAccount: '0001010200027395',
            amountApprover: '6002',
            approver: 'VuTT',
            reasontoreject: '',
            status: 'Completed',
        },
        {
            requestNo: 573758,
            requestTime: '3/8/2022  11:33:00 AM',
            createduser: 'bichdtn',
            approvalTime: '3/7/2022  11:26:00 AM',
            debitAccount: '0001010200027395',
            amountApprover: '6003',
            approver: 'VuTT',
            reasontoreject: '',
            status: 'Failed',
        },
        {
            requestNo: '',
            requestTime: '',
            createduser: '',
            approvalTime: '',
            debitAccount: '',
            amountApprover: '',
            approver: '',
            reasontoreject: '',
            status: '',
        },
        {
            requestNo: '',
            requestTime: '',
            createduser: '',
            approvalTime: '',
            debitAccount: '',
            amountApprover: '',
            approver: '',
            reasontoreject: '',
            status: '',
        },
    ];

    const columns = [
        {
            title: 'Request No',
            dataIndex: 'requestNo',
            key: 'requestNo',
        },
        {
            title: 'Request Time',
            dataIndex: 'requestTime',
            key: 'requestTime',
        },
        {
            title: 'Created user',
            dataIndex: 'createduser',
            key: 'createduser',
        },
        {
            title: 'Approval time',
            dataIndex: 'approvalTime',
            key: 'approvalTime',
        },
        {
            title: 'Debit account',
            dataIndex: 'debitAccount',
            key: 'debitAccount',
        },
        {
            title: 'Amount',
            dataIndex: 'amountApprover',
            key: 'amountApprover',
        },
        {
            title: 'Approver',
            dataIndex: 'approver',
            key: 'approver',
        },
        {
            title: 'Reason to reject',
            dataIndex: 'reasontoreject',
            key: 'reasontoreject',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];
    return (
        <div className="payroll_table">
            <Table dataSource={dataSource} columns={columns} />
            <div className="option">
                <div className="option-item">
                    <label className="option_title">Page Size: </label>
                    <Select defaultValue="1">
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                    </Select>
                </div>
                <div className="option-item">
                    <label className="option_title">Displaying: </label>
                    <span>
                        1 to 6 of <strong>6</strong>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TableData;

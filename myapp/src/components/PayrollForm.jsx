import { Select, Form, Input, DatePicker, Button, Upload } from 'antd';
import { UploadOutlined, SearchOutlined } from '@ant-design/icons';
import '../assets/css/FormInfo.css';

const { Option } = Select;
function PayrollForm() {
    return (
        <div>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 8 }} className="form">
                <div className="form-group">
                    <Form.Item label="Request No" name="RequestNo">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Debit account" name="DebitAccount">
                        <Input />
                    </Form.Item>

                    <Form.Item name="select" label="Status">
                        <Select defaultValue="all">
                            <Option value="all">All</Option>
                            <Option value="pending">Pending</Option>
                            <Option value="completed">Completed</Option>
                            <Option value="failed">Failed</Option>
                            <Option value="inCompleted">InCompleted</Option>
                        </Select>
                    </Form.Item>

                    <Upload>
                        <Button icon={<UploadOutlined />} className="upload-btn">
                            Click to Upload
                        </Button>
                    </Upload>
                </div>
                <div className="form-group form-right">
                    <Form.Item label="Request Time" name="requesTime">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Approval date" name="approvalDate">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Button className="search-btn">
                        <SearchOutlined />
                        Search
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default PayrollForm;

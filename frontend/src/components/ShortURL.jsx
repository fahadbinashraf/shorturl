import { CopyOutlined, LinkOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, message } from "antd";
import React from "react";

const ShortURL = ({ url }) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Form.Item
        label={
          <span>
            <LinkOutlined /> ShortURL
          </span>
        }
      >
        <Input readOnly value={url} />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button size="middle" type="default">
            <a href={url} target="_blank">
              Visit
            </a>
          </Button>
          <Button
            icon={<CopyOutlined />}
            size="middle"
            type="primary"
            onClick={() => {
              navigator.clipboard.writeText(url);
              messageApi.open({
                type: "success",
                content: "ShortURL copied to clipboard!",
              });
            }}
          >
            Copy
          </Button>
        </Space>
      </Form.Item>
    </>
  );
};

export default ShortURL;

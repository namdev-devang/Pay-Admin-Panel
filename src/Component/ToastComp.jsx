import { message } from 'antd'
import React from 'react'

const ToastComp = (type, content) => {
    const [messageApi] = message.useMessage();
    messageApi.open({
        type: type,
        content: content,
    });
}

export default ToastComp
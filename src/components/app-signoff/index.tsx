import React from 'react';
import { Button, Tooltip, Popconfirm } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { useI18nMessage } from 'src/i18n';
import { useAuth } from 'src/authentication';

export function Signoff() {
  const t = useI18nMessage();
  const { session, authOff } = useAuth();

  return (
    <Tooltip
      title={session?.displayName || session?.email}
      placement="bottomRight"
    >
      <Popconfirm
        title={t('app_signoff-confirm')}
        onConfirm={authOff}
        okText={t('app_signoff-ok')}
        cancelText={t('app_signoff-cancel')}
        placement="bottomRight"
      >
        <Button
          type="text"
          shape="circle"
          data-testid="sign-out"
          icon={<LogoutOutlined />}
        />
      </Popconfirm>
    </Tooltip>
  );
}

export default Signoff;
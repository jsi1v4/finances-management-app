import React from 'react';
import { Button, Popover, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import { useI18n } from '../../i18n';

function Icon({ count }) {
  return (
    <Badge count={count}>
      <BellOutlined data-testid="icon" />
    </Badge>
  );
}

function Content({ data }) {
  return (
    <div data-testid="content">
      {data.map((n) => (
        <p data-testid="content-item">{n}</p>
      ))}
    </div>
  );
}

export function Notifications({ data }) {
  const t = useI18n();

  return (
    <Popover
      content={<Content data={data} />}
      title={t('app_notification')}
      trigger="click"
      placement="leftBottom"
    >
      <Button
        type="text"
        shape="circle"
        icon={<Icon count={data.length} />}
        data-testid="notes"
      />
    </Popover>
  );
}

Notifications.Icon = Icon;
Notifications.Content = Content;

export default Notifications;

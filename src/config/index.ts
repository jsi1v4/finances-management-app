import { HomeOutlined, StockOutlined } from '@ant-design/icons';

import { Locale } from 'src/i18n/types';

export const INIT_LOCALE = Locale.EN_US;
export const CURRENCY = 'BRL';
export const TIMEZONE = 'America/Sao_Paulo';
export const ICON =
  'https://raw.githubusercontent.com/jsi1v4/jsi1v4/main/assets/favicon.ico';
export const LOGO =
  'https://raw.githubusercontent.com/jsi1v4/jsi1v4/main/assets/logo192.png';

export const MENU_OPTIONS = [
  {
    name: 'home',
    route: '/',
    icon: HomeOutlined
  },
  {
    name: 'finances',
    route: '/finances',
    icon: StockOutlined
  }
];

import { defaultNS } from "#/lib/i18n/settings";
import chAccountList from  "#/locales/ch/account-list.json"
import enCommon from  "#/locales/en/common.json"
const resources = {
  ch: {
    trans: {
      "account-list":chAccountList
    }
  },
  en: {
    trans: {
      "common": enCommon
    }
  }
};

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}
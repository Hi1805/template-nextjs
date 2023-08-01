import { useTranslation } from 'react-i18next';
import japan from '@/translation/locales/japan.json';
/* eslint-disable */

export type NestedKeyOf<ObjectType extends Object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends Object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

/* eslint-enable */

const useAppTranslate = () => {
  const translation = useTranslation();

  const translate = (key: NestedKeyOf<typeof japan>, params?: Object) => {
    return translation.t(key as unknown as string, params);
  };
  return {
    ...translation,
    translate,
  };
};

export default useAppTranslate;

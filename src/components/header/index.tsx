import { useTranslation } from 'react-i18next';

function HeaderContents() {
  const { t } = useTranslation();

  return (
    <div>
      {t('header')}
    </div>
  );
}

export default HeaderContents;

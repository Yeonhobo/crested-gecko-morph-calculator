import { useTranslation } from 'react-i18next';

function HeaderContents() {
  const { t } = useTranslation();

  return (
    <div className='header'>
      {t('header')}
    </div>
  );
}

export default HeaderContents;

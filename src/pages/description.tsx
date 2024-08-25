import { Container, List } from '@mantine/core';
import { useTranslation } from 'react-i18next';

function DescriptionList() {
  const { t } = useTranslation();
  return (
    <Container>
      <List spacing={12}>
        <List.Item>
          {t('what is morph')}
          <span style={{ fontWeight: 'bold', color: '#228be6' }}>
            {t('allele')}
          </span>
          {t('morph which cannot calc')}
          {t('can not calc')}
        </List.Item>
        <List.Item>
          {t('if input nothing')}
          <span style={{ fontWeight: 'bold', color: '#228be6' }}>
            {t('normal')}
          </span>
          {t('will be calc')}
        </List.Item>
        <List.Item>
          {t('het is')}
          <span style={{ fontWeight: 'bold', color: '#228be6' }}>
            {t('having a morph')}
          </span>
          {t('as')}
          <span style={{ fontWeight: 'bold', color: '#228be6' }}>
            {t('can not calc')}
          </span>
        </List.Item>
        <List.Item>{t('list occurred by')}</List.Item>
        <List.Item>
          {t('is not affected sex')}
          {t('free to type it')}
        </List.Item>
        <List.Item style={{ marginBottom: '12px' }}>
          {t('reporting')}
        </List.Item>
      </List>
    </Container>
  );
}

export default DescriptionList;

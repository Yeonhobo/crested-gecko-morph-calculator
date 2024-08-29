import { Divider, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import Main from './pages';
import DescriptionList from './pages/description';

function App() {
  const { t } = useTranslation();

  return (
    // <AppShell
    //   header={
    //     <Header height={60} sx={{ borderBottom: 'none' }}>
    //       <HeaderContents />
    //     </Header>
    //   }
    // >
    <>

      <Text size='lg' fw={500} align='center' sx={{ paddingTop: '12px' }}>
        {t('header')}
      </Text>
      <Divider my="sm" sx={{ paddingBottom: '12px' }} />
      <Main />
      <DescriptionList />
    </>
  );
}

export default App;

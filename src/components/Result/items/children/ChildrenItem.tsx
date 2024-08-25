import { Text } from '@mantine/core';
// import { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function ChildrenItem({
  result,
}: {
  result: {
    gene: string[];
    value: string;
  }[];
}) {
  const { t } = useTranslation();
  // const [isMount, setIsMount] = useState(false);

  // useLayoutEffect(() => {
  //   setIsMount(true);
  // }, []);

  return result.length === 0 ? (
    <Text sx={{ paddingLeft: '30px' }}>{t('normal')} 100%</Text>
  ) : (
    <>
      {result.map((value, i) => (
          <Text
            sx={i === 0 ? { padding: '30px' } : { paddingBottom: '30px', paddingLeft: '30px' }}
            key={`${value.value}-${i + 1}`}
          >
            {value.gene.length === 0
              ? `${t('normal')} `
              : value.gene.map((gene) => `${t(gene)} `)}
            {value.value}
          </Text>
      ))}
    </>
  );
}

export default ChildrenItem;

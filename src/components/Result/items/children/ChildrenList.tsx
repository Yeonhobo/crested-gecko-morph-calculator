import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { Card, Box } from '@mantine/core';
// import { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { useTranslation } from 'react-i18next';
import useGenesStore from '../../../../store/store';
import ChildrenItem from './ChildrenItem';

function ChildrenList() {
  // const { t } = useTranslation();
  const { result } = useGenesStore();
  Chart.register(ArcElement, Tooltip, Legend);

  // const [labels, setLabels] = useState<string[]>([]);
  // const [data, setData] = useState<number[]>([]);
  // const [color, setColor] = useState<string[]>([]);
  Chart.register(ArcElement, Tooltip, Legend);

  // useEffect(() => {
    // if (typeof result === 'undefined') return;
    // if (result.length === 0) {
    //   setLabels([t('normal')]);
    //   setData([100]);
    //   setColor(['rgba(255, 99, 132']);
    // } else {
    //   console.log('result is the following ', result);
    //   setLabels(
    //     result
    //       .filter((trait) => Number.parseFloat(trait.value) > 3)
    //       .map((filteredTrait) => {
    //         return filteredTrait.gene.length === 0
    //           ? t('normal')
    //           : filteredTrait.gene.map((gene) => t(gene)).join(' ');
    //       }),
    //   );
    //   setData(result.map((trait) => Number.parseFloat(trait.value)));
    //   setColor(
    //     result.map(
    //       () =>
    //         `rgba(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(
    //           Math.random() * (255 + 1),
    //         )}, ${Math.floor(Math.random() * (255 + 1))}`,
    //     ),
    //   );
    // }
  // }, [result, t]);

  return (

    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
      <Card
        shadow='sm'
        p='lg'
        radius='md'
        withBorder
        sx={{ width: '100%', margin: '20px', padding: '20px 20px 0 20px' }}
      >
        <Card.Section>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10px',
            }}
          >
            <Box sx={{ width: '100%', maxHeight: '100%' }}>
              {typeof result === 'undefined'
                ? null
                : (
                    <ChildrenItem result={result} />
              )}
            </Box>
          </Box>
        </Card.Section>
      </Card>
    </Box>
  );
}

export default ChildrenList;

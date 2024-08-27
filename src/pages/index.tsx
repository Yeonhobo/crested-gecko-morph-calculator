import { Box, Container, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CalcButton from '../components/Button';
import DropdownList from '../components/dropdownList';
import Result from '../components/Result';
import useGenesStore from '../store/store';
import { injectNoneGenes } from '../utils/inheritance';

export default function Main() {
  const { t } = useTranslation();
  const [maleGenes, setMaleGenes] = useState<string[]>([]);
  const [femaleGenes, setFemaleGenes] = useState<string[]>([]);
  const [wholeMaleGenes, setWholeMaleGenes] = useState<string[]>([]);
  const [wholeFemaleGenes, setWholeFemaleGenes] = useState<string[]>([]);

  const { result, setMaleGene, setFemaleGene, setResult } = useGenesStore();

  useEffect(() => {
    setWholeMaleGenes(
      [
        ...maleGenes,
        ...injectNoneGenes(maleGenes, femaleGenes).noneMaleGenes,
      ].sort((prev, cur) => {
        const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()];
        if (upperPrev > upperCur) return 1;
        if (upperPrev < upperCur) return -1;
        return 0;
      }),
    );
    setWholeFemaleGenes(
      [
        ...femaleGenes,
        ...injectNoneGenes(maleGenes, femaleGenes).noneFemaleGenes,
      ].sort((prev, cur) => {
        const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()];
        if (upperPrev > upperCur) return 1;
        if (upperPrev < upperCur) return -1;
        return 0;
      }),
    );
  }, [maleGenes, femaleGenes]);

  return (
    <Container
      size='sm'
      sx={{
        boxShadow: '0 0 2px 1px rgb(0 0 0 / 10%)',
        padding: result ? '20px 30px 0 30px' : '20px 30px 30px 30px',
        borderRadius: '8px',
      }}
    >
      <Grid sx={{ paddingBottom: '20px' }}>
        <Grid.Col xs={12} sm={6}>
          <DropdownList title={t('male')} setGenes={setMaleGenes} />
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <DropdownList title={t('female')} setGenes={setFemaleGenes} />
        </Grid.Col>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <CalcButton
          wholeMaleGenes={wholeMaleGenes}
          wholeFemaleGenes={wholeFemaleGenes}
          onClick={() => {
            setMaleGene(maleGenes);
            setFemaleGene(femaleGenes);
          }}
          setResult={setResult}
        />
      </Box>
      <Result />
    </Container>
  );
}

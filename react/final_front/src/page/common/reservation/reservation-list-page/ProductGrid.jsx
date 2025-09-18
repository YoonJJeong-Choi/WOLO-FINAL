import { styled } from '@mui/material';
import ProductCard from './ProductCard';

const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const ProductGrid = ({ products, price }) => (
  <Grid>
    {products.map((p) => (
      <ProductCard key={p.id} product={p} price={price} />
    ))}
  </Grid>
);

export default ProductGrid;

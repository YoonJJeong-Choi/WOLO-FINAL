import { styled } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Rating from '@mui/material/Rating';

const Card = styled('div')`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.36);
  }
`;
const ImgBox = styled('div')`
  position: relative;
  width: 100%;
  padding-top: 62%;
  overflow: hidden;
  & img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CardBody = styled('div')`
  padding: 14px 16px 16px;
`;
const ThumbBox = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -4px;
`;
const LocationText = styled('div')`
  font-size: 12px;
  color: #7a7a7a;
  margin-bottom: 4px;
`;
const Title = styled('div')`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
`;
const Price = styled('div')`
  font-size: 20px;
  font-weight: 800;
  color: #4a2db3;
  margin-bottom: 10px;
`;
const DiscountPrice = styled('div')`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;
const OriginalPrice = styled('span')`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
`;
const FinalPrice = styled('span')`
  font-size: 20px;
  font-weight: 800;
  color: #4a2db3;
`;
const ReviewBox = styled('div')`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`;
const ReviewText = styled('span')`
  font-size: 12px;
  color: #7a7a7a;
`;
const TagRow = styled('div')`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  & span {
    font-size: 12px;
    font-weight: 600;
    color: #7a3fe0;
    background: #f2eaff;
    padding: 6px 10px;
    border-radius: 999px;
  }
`;

const ProductCard = ({ product, price }) => (
  <Card>
    <ImgBox>
      <img src={product.img} alt={product.title} />
    </ImgBox>
    <CardBody>
      <ThumbBox>
        <LocationText>{product.regionPath}</LocationText>
        <FavoriteBorderOutlinedIcon />
      </ThumbBox>
      <Title>{product.title}</Title>
      {product.discount ? (
        <DiscountPrice>
          <OriginalPrice>{price(product.price)}</OriginalPrice>
          <FinalPrice>{price(product.price - product.discount)}~</FinalPrice>
        </DiscountPrice>
      ) : (
        <Price>{price(product.price)}~</Price>
      )}
      <ReviewBox>
        <Rating value={product.rating} precision={0.1} readOnly size="small" />
        <ReviewText>({product.reviews} reviews)</ReviewText>
      </ReviewBox>
      <TagRow>
        {product.hashtags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagRow>
    </CardBody>
  </Card>
);

export default ProductCard;

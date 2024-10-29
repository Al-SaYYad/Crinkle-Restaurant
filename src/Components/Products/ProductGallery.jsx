import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import cardImage1 from "../../Images/card-18.jpg";
import cardImage2 from "../../Images/card-1.jpg";
import cardImage3 from "../../Images/card-4.jpg";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";
import "../../Styles/productGallery.css";

const ProductGallry = () => {
  const images = [
    {
      original: `${cardImage1}`,
    },
    {
      original: `${cardImage2}`,
    },
    {
      original: `${cardImage3}`,
    },
  ];

  return (
    <div className="product-gallery-card">
      <ImageGallery
        items={images}
        defaultImage={cardImage1}
        showFullscreenButton={true}
        showPlayButton={false}
        showThumbnails={false}
        lazyLoad
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallry;

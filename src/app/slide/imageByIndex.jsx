import image1 from "/public/images/img-iphone-14_20230322.jpg";
import image2 from "/public/images/img-iphone-14-pro_20221017.jpg";
import image3 from "/public/images/img-google-pixel-6-pro-20220809.jpg";
import image4 from "/public/images/img_agm_20230620.jpg";

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;

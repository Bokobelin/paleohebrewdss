import fs from "fs";
import Image from "next/image";
import path from "path";

interface ImageGalleryProps {
  folder: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ folder }) => {
  const imagesFolder = `/${folder}`;
  const images = fs
    .readdirSync(path.join(process.cwd(), "public", folder))
    .filter((file: string) => /\.(png|jpe?g|gif|webp)$/.test(file));

  return (
    <div className="grid grid-cols-6 gap-4">
      {images.map((image, index) => (
        <Image
          key={index}
          src={`${imagesFolder}/${image}`}
          alt={`Image ${index + 1}`}
          className="w-50 h-50 object-cover rounded shadow"
        />
      ))}
    </div>
  );
};

export default ImageGallery;

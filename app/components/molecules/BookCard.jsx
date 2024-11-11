import Image from 'next/image';
import React, { useContext } from 'react';
import Button from '../atoms/Button';
import { faStore, faEye } from '@fortawesome/free-solid-svg-icons';
import Card from '../atoms/Card';
import { useRouter } from 'next/navigation';
import { BookContext } from '../../context/BookContext';

const BookCard = ({
    id, 
    title, 
    author,
    authorKey,
    subject,
    image, 
    publishYear, 
    description, 
    amazonId,
    rating,
    ia,
    numPage,
    language,
}) => {
  const { setSelectedBook } = useContext(BookContext);
  const router = useRouter();

  const handleClick = () => {
    setSelectedBook({ 
      id, 
      title, 
      author, 
      authorKey, 
      subject, 
      image, 
      publishYear, 
      description, 
      rating, 
      ia, 
      numPage, 
      language, 
      amazonId 
    });
    router.push(`/pages/search-book/${id.split("/").pop()}`);
  };

  return (
    <Card>
      <div className="flex overflow-hidden h-[250px] w-[345px]">
        {image && (
          <Image 
              className="rounded-lg" 
              src={image} 
              alt={`Portada de ${title}`} 
              width={150} 
              height={200}
              layout="fixed"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/placeholder.png"
          />
        )}
        <div className="w-full flex flex-col justify-between pl-6">
          <div className="flex flex-col space-y-3">
            <div>
              {title && <h2 className="text-xl font-bold">{title}</h2>}
              {author && <p>{author}</p>}
              {publishYear && <p className="text-gray-600">{publishYear}</p>}
            </div>
            {description && (
              <p className="font-light text-justify pr-2 text-xs line-clamp-5">
                {description}
              </p>
            )}
          </div>
          <div className="flex items-end justify-end gap-4 mb-1">
          {amazonId &&
            <Button 
                  icon={faStore} 
                  iconSize="h-5"
                  onClick={() => window.open(`${process.env.AMAZON_URL}/${amazonId}`, "_blank")} 
              />
          } 
            <Button 
                variant="secondary" 
                icon={faEye} 
                iconSize="h-5"
                onClick={handleClick}
            /> 
          </div>
        </div>
      </div>
    </Card>
  );
}

export default BookCard;

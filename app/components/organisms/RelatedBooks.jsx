"use client";
import Image from 'next/image';
import React from 'react';
import Card from '../atoms/Card';
import Button from '../atoms/Button';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const RelatedBooksSection = ({ relatedBySubject = [] }) => {

  return (
    <div className="mt-20">
      {relatedBySubject.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Libros relacionados</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedBySubject.map((relatedBook) => (
                <Card 
                  key={relatedBook.id} 
                  className="w-72 flex flex-col items-center justify-between gap-4 py-10"
                >
                  {relatedBook.coverId ? (
                    <Image
                      className="rounded-lg min-h-[200px]" 
                      src={`${process.env.IMAGE_URL}/${relatedBook.coverId}-L.jpg`} 
                      alt={`Portada de ${relatedBook.title}`} 
                      width={150} 
                      height={200}
                      layout="fixed"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL="/placeholder.png"
                    />
                  ):
                  <Image
                  className="rounded-lg min-h-[200px]" 
                  src="/placeholder.png" 
                  alt={`Portada de ${relatedBook.title}`} 
                  width={150} 
                  height={200}
                  layout="fixed"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                />
                  }
                  <p className='font-semibold text-center'>{relatedBook.title}</p>
                  <Button
                    className="w-full"
                    icon={faBook}
                    iconSize="h-5"
                    onClick={() => window.open(`${process.env.BOOK_URL}${relatedBook.ia}`, "_blank")}
                    disabled={!relatedBook.ia}
                  >
                    Leer
                  </Button>
                </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RelatedBooksSection;

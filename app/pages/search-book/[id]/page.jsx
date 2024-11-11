"use client";
import { use, useContext, useEffect, useState } from "react";
import { fetchRelatedBooks } from "../../../services/services";
import Image from "next/image";
import { BookContext } from "../../../context/BookContext";
import Card from "../../../components/atoms/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faMagnifyingGlass, faPoo, faStar, faStore } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/atoms/Button";
import Back from "../../../components/molecules/BackHome";
import RelatedBooks from "../../../components/organisms/RelatedBooks"
import { useRouter } from "next/navigation";
import Spinner from "../../../components/atoms/Spinner";

export default function BookDetailPage({ params }) {

  const router = useRouter()

  const { id } = use(params);
  const { books, selectedBook, setSelectedBook } = useContext(BookContext);
  const [relatedBySubject, setRelatedBySubject] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const book = selectedBook || books.find((b) => b.id === id);

  useEffect(() => {
    const loadBookDetails = async () => {
      if (!book) {
        router.push('/pages/search-book');
      } else {
        setSelectedBook(book);
        try {
          if (book.subject?.[0]) {
            const { relatedBySubject } = await fetchRelatedBooks(
              book.subject[0]
            );
            setRelatedBySubject(relatedBySubject);
          }
        } catch (error) {
          console.error("Error al obtener los detalles del libro:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (!book) {
      setLoading(false);
    } else {
      loadBookDetails();
    }
  }, [id, book, setSelectedBook]);

  if (loading) return (
    <div className="flex flex-col w-full items-center mt-32 justify-center gap-12 opacity-55">
      <Spinner size={24} />
      <p className="font-semibold text-2xl text-center">
        Cargando información ...
      </p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <Back route="/pages/search-book" icon={faMagnifyingGlass} />
      {book ? (
        <div>
          <Card className="mt-20 px-20 py-16 flex gap-12 max-lg:flex-col max-lg:items-center">
            {book.image && (
              <Image
                className="rounded-lg max-h-fit" 
                src={book.image} 
                alt={`Portada de ${book.title}`} 
                width={250} 
                height={300}
                layout="fixed"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/placeholder.png"
            />
            )}
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-bold">{book.title}</h1>
                  <p className="text-lg font-semibold">{book.author}</p>
                  <p className="text-secondary font-light">Publicado en {book.publishYear}</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <FontAwesomeIcon className="text-primary" icon={faStar} />
                  <p>{book.rating ? book.rating.toFixed(2) : "No calificación"}</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Número de Páginas</p>
                  <p>{book.numPage || "No definido."}</p>
                </div>
                { book.language && (
                    <div>
                      <p className="font-semibold text-primary">Idiomas</p>
                      <div className="flex gap-2 flex-wrap">
                      {
                        book.language.map((language, index) => {
                          return (
                          <div key={index} className="bg-secondary-100 py-1 px-2 rounded-md">
                            <p>{language}</p>
                          </div>
                          )
                        })
                      }
                      </div>
                    </div>
                )}
                <div>
                  <p className="font-semibold text-primary">Descripción</p>
                  <p className="text-justify">{book.description || "No hay descripción disponible."}</p>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-4">
              <Button 
              variant="secondary"
                  icon={faStore}
                  conSize="h-5"
                  onClick={() => window.open(`${process.env.AMAZON_URL}/${book.amazonId}`, "_blank")}
                  disabled={book.amazonId === undefined}
                >
                  Amazon
                </Button>
                <Button 
                  icon={faBook}
                  conSize="h-5"
                  onClick={() => window.open(`${process.env.BOOK_URL}${book.ia[0]}`, "_blank")}
                  disabled={book.ia === undefined}
                >
                  Leer
                </Button>
              </div>
            </div>
          </Card>
          <RelatedBooks relatedBySubject={relatedBySubject}/>
        </div>
      ) : 
        <div className="flex flex-col w-full items-center mt-20 justify-center gap-12 opacity-55">
          <FontAwesomeIcon className="h-24" icon={faPoo} />
          <p className="font-semibold text-2xl text-center">
            404 | Información no encontrada
          </p>
        </div>
      }
    </div>
  );
}
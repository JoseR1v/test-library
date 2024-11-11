"use client";
import Image from "next/image";
import Button from "./components/atoms/Button";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();  

  return (
      <div className="flex justify-between pt-20 max-lg:flex-col-reverse max-lg:pt-4">
        <div className="flex flex-col justify-center w-2/5 gap-10 max-lg:w-full max-lg:mt-10">
          <h2 className="font-bold text-6xl max-lg:text-4xl">¡Bienvenido!</h2>
          <p className="text-justify text-xl max-lg:text-base">Explora una amplia variedad de libros con facilidad. Aquí podrás buscar por título, autor o género, accediendo rápidamente a información detallada sobre cada libro, incluyendo descripciones, año de publicación y más. Nuestro objetivo es ayudarte a descubrir y encontrar los libros que te interesan de forma rápida y sencilla.</p>
          <Button 
            className="w-72 py-5 mt-10 max-lg:w-64" 
            icon={faArrowRightLong} 
            onClick={() => router.push("/pages/search-book")} 
          >
            Empieza a buscar
          </Button>
        </div>
        <div className="relative">
          <div className="absolute rounded-md top-[-15rem] left-2/3 transform -translate-x-1/2 h-screen w-4/6 bg-[#001d14] z-[-1] max-lg:hidden"></div>
          <Image
            src="/books.webp"
            width={650}
            height={600}
            alt="Imagen ilustrativa de libros"
            priority={true}
          />
        </div>
      </div>

  );
}

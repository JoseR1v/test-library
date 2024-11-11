import "./globals.css";
import {BookProvider} from  "./context/BookContext"
import NavBar from "./components/organisms/NavBar"


export const metadata = {
  title: "Book Search",
  description: "Buscador de libros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-52 py-12 max-lg:px-16">
          <BookProvider>
            <NavBar/>
            {children}
          </BookProvider>

      </body>
    </html>
  );
}

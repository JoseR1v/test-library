export const fetchBooks = async (query, theme) => {
    if (!query) return [];
  
    try {
      const params = "fields=key,title,author_name,subject_key,first_publish_year,cover_i,first_sentence,id_amazon,ratings_average,ia,language,number_of_pages_median&offset=0&limit=100&lang=es"
      const url = `${process.env.SEARCH_URL}${theme === "Título" ? "title" : "author"}=${query}&${params}`;
      const response = await fetch(url);
      const data = await response.json();

      return data.docs.map((book) => ({
        id: book.key,
        title: book.title,
        author: book.author_name ? book.author_name[0] : "Autor desconocido",
        authorKey: book.author_key,
        subject: book.subject_key,
        publishYear: book.first_publish_year || "Año desconocido",
        image: book.cover_i ? `${process.env.IMAGE_URL}/${book.cover_i}-L.jpg` : '/placeholder.png',
        description: book.first_sentence ? book.first_sentence[0] : "Sin descripción disponible",
        amazonId: book.id_amazon ? book.id_amazon[0] : undefined,
        rating: book.ratings_average ? book.ratings_average : 0,
        ia: book.ia,
        language: book.language,
        numPage: book.number_of_pages_median,
      }));
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  };

  export const fetchRelatedBooks = async (subject) => {
    let relatedBySubject = [];
  
    if (subject?.length) {
      const subjectResponse = await fetch(`${process.env.SUBJECT_URL}/${subject.toLowerCase()}.json?limit=5`);
      const subjectData = await subjectResponse.json();
      relatedBySubject = subjectData.works.map(book => ({
        id: book.key,
        title: book.title,
        coverId: book.cover_id,
        ia: book.ia,
      }));
    }
  
    return { relatedBySubject };
  };
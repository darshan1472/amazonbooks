import React from 'react';



const booksData = [
  {
    title: "The Psychology of money",
    author: "Morgan Housel",
    price: "RS.275",
    image: "https://images-eu.ssl-images-amazon.com/images/I/61-hMfd7NGL._AC_UL600_SR600,400_.jpg",
    rating: "4.5 out of 5",
   
  },
  {
    title: "Ikigai",
    author: "Fransces Miralllis",
    price: "RS.319",
    image: "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg",
    rating: "4.8 out of 5",
    
  },
  {
    title: "My first liabrary",
    author: "Wonder House Books",
    price: "RS.419",
    image: "https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL600_SR600,400_.jpg",
    rating: "4.7 out of 5",
    
  }
  ,
  {
    title: "Indian Polity",
    author: "M.Lakshmikanth",
    price: "RS.419",
    image: "https://images-eu.ssl-images-amazon.com/images/I/71CrTyKsazL._AC_UL600_SR600,400_.jpg",
    rating: "4.7 out of 5",
    
  },
  {
    title: "I don't love u Anymore",
    author: "Ritvik Singh",
    price: "RS.235",
    image: "https://images-eu.ssl-images-amazon.com/images/I/512lI7+2SjL._AC_UL600_SR600,400_.jpg",
    rating: "4 out of 5",
    
  },
  {
    title: "11 Rules for Life",
    author: "Chetan Bhagat",
    price: "RS.185",
    image: "https://images-eu.ssl-images-amazon.com/images/I/61E0unKRIZL._AC_UL600_SR600,400_.jpg",
    rating: "4.1 out of 5",
    
  }
];



const Book = ({ title, author, price, image, rating  }) => {
  const showBookName=()=>{
  alert(author)
}
  return (
    <div className="book">
      <img src={image} alt={title} />
      <div className="book-info">
        <h2>{title}</h2>
        {/* <p>by {author}</p> */}
        <p> Price: { price}</p>
        <p>Rating: {rating}</p>
       <button type='button'  className='btn' onClick={showBookName}>Author</button>
      </div>
    </div>
  );
};


const BestSellerBooks = ({ books }) => {
  return (
    <div className="best-sellers">
      <h1 style={{textAlign:"center",background:"radial-gradient(#0a99af,#057586)"}}>Amazon Best Sellers</h1>
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

// App component to render BestSellerBooks
const App = () => {
  return (
    <div>
      <BestSellerBooks books={booksData} />
    </div>
  );
};

export default App;

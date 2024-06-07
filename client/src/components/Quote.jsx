// client/src/components/Quote.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quote.css';
import CircularProgress from '@mui/material/CircularProgress';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentAuthor, setcurrentAuthor] = useState(''); 
  const [Loading, setLoading] = useState(false); 
  

  const fetchQuote = async (authorName) => {
    setLoading(true); 
    try {
      const response = await axios.get('https://quotesapp-l33h.onrender.com/api/quote', {
        params: { author: authorName }
      });
      setQuote(response.data.content);
      setcurrentAuthor(response.data.author); 
    } catch (error) {
      console.error('Error fetching the quote', error);
      setQuote('No quotes found for this author.');
      
    }
    setLoading(false); 
  };

  useEffect(() => {
    fetchQuote(author);
    
  }, [author]);

  const handleSearch = (e) => {
    e.preventDefault();
    setAuthor(searchTerm);
  };

  return (
    <div className="quote-container">
        <div className="main-text">
            {Loading ? 
                (<div className='loading-overlay'>
                    <CircularProgress/>
                </div>
                ):
                (<>
                <p className="quote-text">{quote}</p>
                <p className = "quote-author">~{currentAuthor}</p>
                </>
                
            )

            }
        </div>
        <div className="rest-text">
            {author===''?(<button className="quote-button" onClick={() => fetchQuote(author)}>Next Quote</button>)
            :
            (<button className="quote-button" onClick={() => fetchQuote(author)}>{`Next Quote by ${author}`}</button>)
            }
            
            <button className = "quote-button" onClick = {() =>{setAuthor('')}}>Randomize Author</button>
            <form onSubmit={handleSearch} className="search-form">
                <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by author"
                className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
        
      
      
      
    </div>
  );
};

export default Quote;

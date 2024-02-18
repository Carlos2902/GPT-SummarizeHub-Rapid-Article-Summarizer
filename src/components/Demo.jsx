import React, { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from '../assets';


const Demo = () => {
    const [article, setArticle] = useState({
      url: '',
      summary: '',
    });

    // function to make the API request
    const handleSubmit = async (e) => {
        // make API request
        
    }

  return (  
    <section className="mt-16 w-full max-w-xl">
      {/* Search input */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Enter URL"
            value={article.url}
            // When onChange happens, we update the setArticle state,
            // and return: all the fragments of 'article' and the URL value
            onChange={(e) => setArticle({...article, url: e.target.value})}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            // The peer classname function is to focus the button, and its text 
            // if the user focus on the whole input
            className="submit_btn
            peer-focus:border-gray-700
            peer-focus:text-gray-700"
          >
            ↵
          </button>
        </form>

        {/* Browser URL History: Which URL have we seen? */}
      </div>

        {/* Display results */}
    </section>
  )
}

export default Demo
'use client';

import { useEffect, useState } from "react"
import PromptCard from "./PromptCard";


const PromptCardList = ({data, handleTagClick})=>{
  return (
    <div className="mt16 prompt_layout">
        {data.map((post)=>(
          <PromptCard 
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
    </div>
  )
}

const Feed = () => {

  //for search implemetation
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [searchedResults, setSearchedResults] = useState([]);

  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) =>{
            clearTimeout(searchTimeout)
            setSearchText(e.target.value)

            //debounce method
            setSearchTimeout(setTimeout(()=> {
              const searchResult = filterPrompts(e.target.value)
              setSearchedResults(searchResult)
            }, 500)
            );
  }

  useEffect(()=>{
      const fetchPosts = async ()=>{
        const response = await fetch('/api/prompt');
        const data  = await response.json();

        setPosts(data)
      }
      fetchPosts();
  },[])

  const filterPrompts = (searchText)=>{
    const regex = new RegExp(searchText, "i")//i means insensitivity to case
    return posts.filter((item) =>
      regex.test(item.creator.username) || 
      regex.test(item.tag) || 
      regex.test(item.prompt)
    )
  };


  const handleTagClick = (tagName) =>{
      setSearchText(tagName);

      const searchResult = filterPrompts(tagName);
      setSearchedResults(searchResult)
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
      <input type="text"
      placeholder="Search for a tag or a username"
      value={searchText}
      onChange={handleSearchChange}
      required
      className="search_input peer"
      />
      </form>

      {/* all prompts */}

      {searchText? (searchedResults.length>0 ? (
        <PromptCardList  data={searchedResults}
                      handleTagClick={handleTagClick}
      />
      ): ( <p>No prompts found for "{searchText}" </p>)
      ):
      (
        <PromptCardList data={posts}
          handleTagClick={handleTagClick}
          />
          )
      }

    </section>
  )
}

export default Feed
import { useState } from "react"

const BlogForm = () => {

  const [title, setTitle] = useState(``);
  const [articles, setArticles] = useState([]);


  return(
    <div>
    <h1>Blog Articles</h1>
    <form>
      <input
        type="text"
        placeholder="Enter article title"
      />
      <button type="submit">
        Add Article
      </button>
    </form>
    <ul>
      {articles.map((article, index) => (
        <li
          key={index}
        >
          {article}
          <button>
            ❌
          </button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default BlogForm
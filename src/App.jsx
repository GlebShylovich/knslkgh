import { useState } from 'react'
import posts from './posts.json'
import Post from './Components/Post/Post'
import './App.css'

function App() {
  const [arr, setArr] = useState(posts);
  console.log(posts)

  function delPost(id) {
    const arrCopy = [...arr]
    const resultArr = arrCopy.filter(item => item.id != id)
    setArr(resultArr)
  }
  function addPost() {
    const arrCopy = [...arr]
    const obj = {
      "userId": 1,
      "id": 1,
      "title": "eto novii element",
      "body": "eto novii element kotorii dobavilsua cherez useState"
    }
    arrCopy.push(obj)
    setArr(arrCopy)
  }
  return <div>
    <button onClick={addPost}>Add Post</button>
    {arr.map((item, index) => (
      <Post item={item} index={index} delPost={delPost} />
    ))}
  </div>;
}

export default App

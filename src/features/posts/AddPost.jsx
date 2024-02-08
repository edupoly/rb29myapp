import React from 'react'
import { useAddPostMutation, useLazyGetAllPostsQuery } from '../../services/postsApi'
import { useNavigate } from 'react-router-dom'

function AddPost() {
    var navigate = useNavigate();
    const [newpost, setnewpost] = React.useState({
        title:'',
        views:0
    })
    var [getPostsFn] = useLazyGetAllPostsQuery();
    var [addFn]=useAddPostMutation()
    function addNewPost(){
        addFn(newpost).then(()=>{
            alert("Post added Success")
            getPostsFn();
            navigate('/posts')
        })
    }
    return (
        <div className='border border-5 border-secondary m-2 p-2'>
            <h1>AddPost</h1>
            <input type="text" placeholder='Enter title' onChange={(e)=>{setnewpost({...newpost,title:e.target.value})}}/>
            <br />
            <input type="number" placeholder='Enter Views' onChange={(e)=>{setnewpost({...newpost,views:e.target.value})}}/>
            <br />
            <button onClick={addNewPost}>Add Post</button>
        </div>
    )
}

export default AddPost
import React, { useEffect } from 'react'
import { useAddPostMutation, useLazyGetAllPostsQuery, useLazyGetPostByIdQuery, useUpdatePostMutation } from '../../services/postsApi'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    var navigate = useNavigate();
    var params=useParams()
    const [post, setpost] = React.useState({
        id:0,
        title:'',
        views:0
    })
    var [getPostFn] = useLazyGetPostByIdQuery();
    var [getAllPosts] = useLazyGetAllPostsQuery()
    var [updatePostFn] = useUpdatePostMutation();
    useEffect(()=>{
        getPostFn(params.id).then(({data:{title,views}})=>{
            setpost({title:title,views:views,id:params.id})
        })
    },[])
    function updatePost(){

        updatePostFn(post).then(()=>{
            getAllPosts();
            alert("POst Updated")
            navigate("/posts")
        })
    }
    return (
        <div className='border border-5 border-secondary m-2 p-2'>
            <h1>Edit Post</h1>
            <input type="text" placeholder='Enter title' value={post.title} onChange={(e)=>{setpost({...post,title:e.target.value})}}/>
            <br />
            <input type="number" placeholder='Enter Views' value={post.views} onChange={(e)=>{setpost({...post,views:e.target.value})}}/>
            <br />
            <button onClick={updatePost}>Update Post</button>
        </div>
    )
}

export default EditPost
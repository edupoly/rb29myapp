import React from 'react'
import { useDeletePostMutation, useGetAllPostsQuery,useLazyGetAllPostsQuery } from '../../services/postsApi'
import AddPost from './AddPost'
import { useNavigate } from 'react-router-dom'

function Posts() {
    var {isLoading,data}=useGetAllPostsQuery()
    var [delPostFn]=useDeletePostMutation()
    var [getPostsFn] = useLazyGetAllPostsQuery();
    var navigate = useNavigate()
    function delPost(id){
        delPostFn(id).then(()=>{
            getPostsFn();
        })
    }
    function editPost(id){
        navigate(`/editPost/${id}`)
    }
  return (
    <div className='border border-5 border-danger m-2 p-2 d-flex flex-wrap'>
        
        <div className='w-100'>
            <div className='d-flex flex-wrap justify-content-between'>
                <h1>Posts</h1>
                <button className='btn btn-success' onClick={()=>{navigate("/addPost")}}> +Add Post</button>
            </div>
            <div className='card-group'>
            
            {
                !isLoading && data.map((post)=>{
                    return  <>
                                
                                    <div class="card text-white bg-primary m-3 ">
                                        <div class="card-header">{post.title}</div>
                                        <div class="card-body">
                                        <h5 class="card-title">{post.views}</h5>
                                        <p class="card-text">
                                            <button onClick={()=>{delPost(post.id)}}>Delete</button>
                                            <button onClick={()=>{editPost(post.id)}}>Edit</button>
                                        </p>
                                        </div>
                                    </div>
                                
                            </>
                })
            }
            </div>

        </div>
        
    </div>
  )
}

export default Posts
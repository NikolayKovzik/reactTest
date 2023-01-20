import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetching } from "../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    console.log(params)
    const navigate = useNavigate();
    const [post, setPost] = useState({ id: '', title: '' });
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })


    useEffect(() => {
        fetchPostById(params.id)
        // fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
            <button onClick={() => navigate('comments')}>
                Открыть Комментарии
            </button>
            {/*isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            } */}
        </div>
    );
};

export default PostIdPage;
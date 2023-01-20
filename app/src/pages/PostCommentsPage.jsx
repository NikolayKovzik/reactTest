import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetching } from "../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostCommentsPage = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data);
  })

  useEffect(() => {
    fetchComments(params.id)
  }, [])
  return (
    <div>
      {isComLoading
        ? <Loader />
        : <div>
          {comments.map(comm =>
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default PostCommentsPage
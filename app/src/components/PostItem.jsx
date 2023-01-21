import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate } from 'react-router-dom';

const PostItem = ({ number, post, deletePost }) => {

    const navigate = useNavigate ();
    return (
        <div className="post">
            <div className="post__content">
                {<strong>{post.id}. {post.title}</strong>}
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                {/* <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton> */}
                <MyButton onClick={() => deletePost(post.id)}>Удалить</MyButton>
                <MyButton onClick={() => {navigate(`${post.id}`)}}>Открыть</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
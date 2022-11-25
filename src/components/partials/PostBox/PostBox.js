import React from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';
import PostCategories from '../PostCategories/PostCategories';

const PostBox = ({ id, title, excerpt, uri, date, categories }) => {
  return(
    <div>
      {title ? <h2>{ title }</h2> : null}
      <PostCategories categories={categories} date={date}></PostCategories>
      <RoundedButton href={uri}></RoundedButton>
      {excerpt ? <p>{excerpt}</p> : null}
    </div>
  )
}

export default PostBox;
import React from 'react'

export const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  const data = await res.json();
  return data;
}

export default async function SinglePost({params}) {
    const p = await params
    const singlePost = await getSinglePost(p.id)
  return (
    <div>
      <p>{singlePost.id}</p>
      <p>{singlePost.title}</p>
      <p>{singlePost.body}</p>
      <button className='bg-blue-900 px-5 py-2 rounded-md font-bold'>Button</button>
    </div>
  )
}

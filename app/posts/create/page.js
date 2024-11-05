import Form from 'next/form'

import { createPost } from '../actions'
 
export default function Page() {
  return (
    <Form action={createPost}>
      <input 
        className="border rounded p-1 mx-1" 
        name="title" />
      <button 
        type="submit"
        className="bg-teal-700 text-white p-1 rounded-lg">
          Create Post
      </button>
    </Form>
  )
}
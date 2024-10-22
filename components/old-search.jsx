"use client"

import { useRouter } from 'next/navigation'
 
export default function OldSearch() {
  const router = useRouter()

  function handleSubmit(event) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const data = new URLSearchParams()
 
    for (const [name, value] of formData) {
      data.append(name, value)
    }
 
    router.push(`search?${data.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="border rounded p-1 mx-1" name="query" />
      <button className="bg-teal-700 text-white p-1 rounded-lg" type="submit">Submit</button>
    </form>
  )
}
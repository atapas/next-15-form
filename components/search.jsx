import Form from 'next/form'
 
export default function Search({query}) {
  return (
    <Form action="/search">
      <input className="border rounded p-1 mx-1" name="query" />
      <button className="bg-teal-700 text-white p-1 rounded-lg" type="submit">Submit</button>
    </Form>
  )
}
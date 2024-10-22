import Image from "next/image";

const ProductList = ({items}) => {
  return (
    <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
    {
      items.map(item => (
         <li
          className="flex flex-col mx-3 my-3 p-4 border border-black/10 shadow-sm rounded-xl" 
          key={item.id}>
            <Image 
              src={item.cover} 
              alt={item.title} 
              className="w-full object-cover"
              width={100}
              height={100} />
            <h2 className="text-3xl my-3">{item.title}</h2>
            <p>{item.description}</p>
          </li> 
      ))
    }
  </ul>
  )
}

export default ProductList
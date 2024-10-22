import Search from "@/components/search";
import OldSearch from "@/components/old-search";
import ProductList from "@/components/product-list";
import NoMatchingProducts from "@/components/no-matching-products";

import { getSearchResults } from '@/lib/search'
 
export default async function SearchPage({ searchParams }) {
  const { query } = await searchParams
  const results = await getSearchResults(query)
  
  return (
    <>
      <Search />
      {results.length > 0 ? <ProductList items={results}/> : <NoMatchingProducts query={query} /> }
    </>
  )
}
export function filterRestautrant(search,restaurants){
  let filterdata = restaurants.filter((element)=>{ 
    return(((element.info.name).toLowerCase()).includes(search.toLowerCase()))
  })
  return filterdata; 
}
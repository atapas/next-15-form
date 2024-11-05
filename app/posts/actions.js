'use server'

 
export async function createPost(formData) {

  const title = formData.get("title");

  console.log("The post title is", title);

}
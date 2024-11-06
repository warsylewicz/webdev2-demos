export default async function Page({ params }) {
  const { id } = await params;

  // check if the id is present
  if (!id) {
    return <h1>Blog Id not found</h1>;
  }

  // ensure the id is a number
  const blogId = parseInt(id);
  if (isNaN(blogId)) {
    return <h1>Blog Id is not valid</h1>;
  }

  // ensure the id is within the range
  if (blogId < 1 || blogId > 10) {
    return <h1>Blog Id is out of range</h1>;
  }

  return <h1>Blog Id: {id}</h1>;
}

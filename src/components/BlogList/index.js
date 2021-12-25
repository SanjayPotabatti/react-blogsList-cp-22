// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul>
      {blogsList.map(eachDetail => (
        <BlogItem blogDetails={eachDetail} />
      ))}
    </ul>
  )
}
export default BlogList

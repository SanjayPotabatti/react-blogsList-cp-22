// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="listItemContainer pr-2">
      <div className="d-flex flex-row justify-content-between">
        <h1 className="blogHeading">{title}</h1>
        <p className="blogDescription">{publishedDate}</p>
      </div>
      <p className="blogDescription">{description}</p>
      <hr className="hrStyling" />
    </li>
  )
}

export default BlogItem

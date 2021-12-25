// Write your JS code here
import './index.css'

const UserInfo = () => (
  <div className="d-flex flex-column justify-content-center align-items-center">
    <img
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      alt="profile"
      className="profileImg pb-2"
    />
    <h1 className="personHeading">Wade Warren</h1>
    <p className="profilePara">Software developer at UK</p>
  </div>
)

export default UserInfo

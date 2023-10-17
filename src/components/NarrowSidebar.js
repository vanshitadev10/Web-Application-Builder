import '../bootstrap.css';
import '../styles.css';
import PropTypes from "prop-types";

const NarrowSidebar = (props) => {
  return <div className="icons-wrapper bg-dark-blue d-flex flex-column justify-content-between">
    <div>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 0 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(0)}>
        <span className="material-icons">edit</span>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 2 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(2)}>
        <span class="material-icons">border_top</span>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 3 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(3)}>
        <span className="material-icons">subject</span>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 4 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(4)}>
        <span className="material-icons">auto_awesome_motion</span>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 5 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(5)}>
        <span className="material-icons">line_style</span>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 6 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(6)}>
        <span className="material-icons">insert_photo</span>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 7 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(7)}>
        <span className="material-icons">moving</span>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 8 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(8)}>
        <span className="material-icons">table_chart</span>
      </button>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 9 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(9)}>
        <span className="material-icons">border_bottom</span>
      </button>
    </div>
    <div>
      <button
        type="button"
        className={`btn btn-sidebar btn-block m-0 ${props.activeTab === 10 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(10)}>
        <span className="material-icons">save</span>
      </button>
    </div>
  </div>;
}

NarrowSidebar.propTypes = {
  onChangeActiveTab: PropTypes.func.isRequired
};

export default NarrowSidebar;

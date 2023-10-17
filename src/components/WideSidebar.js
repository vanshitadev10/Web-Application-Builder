import '../bootstrap.css';
import '../styles.css';

const WideSidebar = ({ children }) => {
  return <div className="mh-100 d-flex flex-column inspector-wrapper">
    <div className="sidebar-wrapper container-fluid p-2 pt-4">
      {children}
    </div>
  </div>;
}

export default WideSidebar;

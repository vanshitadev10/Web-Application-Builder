import PropTypes from 'prop-types';
import '../bootstrap.css';
import '../styles.css';

const Output = ({ display, html }) => {
  if (!display) return null;

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <h5>Export</h5>
      </div>
      <hr />
      <div>
        <label>Output HTML</label>
        <textarea readOnly className='form-control' rows={10} value={html}></textarea>
      </div>
    </div>
  );
};

Output.propTypes = {
  display: PropTypes.bool,
  html: PropTypes.bool,
};

export default Output;

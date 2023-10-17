import '../bootstrap.css';
import '../styles.css';
import PropTypes from 'prop-types';

const BlockPreview = (props) => {
  return (
    <div className='card card-body p-2 shadow-lg block-entry mb-2'>
      <img
        src={props.image}
        alt={props.name}
        className='img-fluid' />
      <div className='prompt' onClick={() => props.onPushBlock(props.blockId)}>
        <div className='prompt-inside'>
          <div>{props.name}</div>
          <button className='btn btn-outline-light btn-sm m-2'>Add block</button>
        </div>
      </div>
    </div>
  );
};

BlockPreview.propTypes = {
  blockId: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  onPushBlock: PropTypes.func,
};

export default BlockPreview;

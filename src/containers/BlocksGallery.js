import PropTypes from 'prop-types';
import BlockPreview from "../components/BlockPreview";
import blocks from '../views/blocks';
import '../bootstrap.css';
import '../styles.css';

const BlocksGallery = props => {
  if (!props.display) return null;

  return (
    <div>
      <h5>Category: {props.name}</h5>
      <hr />
      {Object.keys(blocks).map((blockId) => {
        const block = blocks[blockId];
        if (block.category === props.category) {
          return (
            <BlockPreview
              key={blockId}
              name={block.name}
              blockId={blockId}
              image={block.previewImageUrl}
              onPushBlock={props.onPushBlock}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

BlocksGallery.propTypes = {
  onPushBlock: PropTypes.func,
  block: PropTypes.object,
  display: PropTypes.bool
}

export default BlocksGallery;

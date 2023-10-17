import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import actionTypes from '../constants/actionTypes';
import blocks from '../views/blocks';
import '../bootstrap.css';
import '../styles.css';

const Inspector = ({ display }) => {
  const layout = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  if (!display) return null;

  const blockUuid = layout.selectedBlockUuid;
  const block = layout.blocks.find((el) => el.uuid === blockUuid);

  if (!block) return <div className="text-center">Please add and select an element first!</div>;

  const config = blocks[block.blockId].config;

  const handleChangeBlockData = (blockUuid, key, value) => {
    dispatch({
      type: actionTypes.CHANGE_BLOCK_DATA,
      blockUuid,
      key,
      value,
    });
  };

  const clearRadio = (blockUuid, key, value) => {
    dispatch({
      type: actionTypes.CHANGE_BLOCK_DATA,
      blockUuid,
      key,
      value,
    });
  }

  const handleDeleteBlock = (blockUuid) => {
    dispatch({
      type: actionTypes.DELETE_BLOCK,
      blockUuid,
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Inspector</h5>
        <button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteBlock(blockUuid)}>Delete block</button>
      </div>
      <hr />
      {Object.keys(config).map((el, index) => {
        if (config[el].type === 'string' && config[el].inputType === 'radio') {
          return (
            <div className="form-check" key={index}>
              <input
                type='radio'
                className="form-check-input"
                checked={block.data[el] === 'active'}
                onChange={e => handleChangeBlockData(blockUuid, el, e.target.value)}
                onClick={e => clearRadio(blockUuid, el, "")}
                value={'active'}
              />
              <label style={{ marginRight: "4rem" }}>Active</label>
              <input
                type='radio'
                className="form-check-input"
                checked={block.data[el] === 'disabled'}
                onChange={e => handleChangeBlockData(blockUuid, el, e.target.value)}
                onClick={e => clearRadio(blockUuid, el, "")}
                value={'disabled'}
              />
              <label>Disable</label>
            </div>
          );
        } else if (config[el].type === 'string') {
          return (
            <div className="form-group" key={index}>
              <label>{config[el].name}</label>
              <DebounceInput
                debounceTimeout={500}
                type="text"
                className="form-control"
                placeholder={config[el].name}
                value={block.data[el]}
                onChange={e => handleChangeBlockData(blockUuid, el, e.target.value)}
              />
            </div>
          );
        } else if (config[el].type === 'color') {
          return (
            <div className="form-group" key={index}>
              <label>{config[el].name}</label>
              <DebounceInput
                debounceTimeout={500}
                type="color"
                className="form-control"
                placeholder={config[el].name}
                value={block.data[el]}
                onChange={e => handleChangeBlockData(blockUuid, el, e.target.value)}
              />
            </div>
          );
        } else if (config[el].type === 'boolean') {
          return (
            <div className="form-check" key={index}>
              <label>
                <input
                  type='checkbox'
                  className="form-check-input"
                  checked={block.data[el]}
                  onChange={e => handleChangeBlockData(blockUuid, el, e.target.checked)}
                />
                {config[el].name}
              </label>
            </div>
          );
        } else if (config[el].type === 'radio') {
          return (
            <div className="form-group" key={index}>
              <label>{config[el].name}</label>
              <div className="form-check" style={{ display: 'flex' }}>
              {config[el].radioOptions.map(item => (
                <div>
                  <input
                    type='radio'
                    className="form-check-input"
                    checked={block.data[el] === item}
                    onChange={e => handleChangeBlockData(blockUuid, el, e.target.value)}
                    onClick={e => clearRadio(blockUuid, el, "")}
                    value={item}
                  />
                  <label style={{ marginRight: "4rem", textTransform: "capitalize" }}>{item}</label>
                </div>
              ))}
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

Inspector.propTypes = {
  display: PropTypes.bool,
};

export default Inspector;

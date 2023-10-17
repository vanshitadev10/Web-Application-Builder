import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './bootstrap.css';
import './styles.css';
import renderHandlebars from './utils/renderHandlebars';
import NarrowSidebar from './components/NarrowSidebar';
import WideSidebar from './components/WideSidebar';
import Preview from './containers/Preview';
import BlocksGallery from './containers/BlocksGallery';
import Inspector from './containers/Inspector';
import Output from './containers/Output';
import actionTypes from './constants/actionTypes';

const App = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);
  const layout = useSelector((state) => state.layout);

  const handleChangeActiveTab = (index) => {
    dispatch({
      type: actionTypes.CHANGE_ACTIVE_TAB,
      index,
    });
  };

  const handleChangePreviewMode = (mode) => {
    dispatch({
      type: actionTypes.CHANGE_PREVIEW_MODE,
      mode,
    });
  };

  const handlePushBlock = (blockId) => {
    dispatch({
      type: actionTypes.PUSH_BLOCK,
      blockId,
    });
  };

  const handleSetSelectedBlock = (blockUuid) => {
    dispatch({
      type: actionTypes.SET_SELECTED_BLOCK,
      blockUuid,
    });
  };

  const handleReorderLayout = (newOrder) => {
    const newBlocksLayout = [];
    newOrder.forEach((blockUuid) => {
      const block = layout.blocks.find((el) => {
        return el.uuid === blockUuid;
      });
      newBlocksLayout.push(block);
    });

    dispatch({
      type: actionTypes.REORDER_LAYOUT,
      newBlocksLayout,
    });
  };


  useEffect(() => {
    const handleMessage = (event) => {
      console.log(event.data);
      if (event.data.event) {
        if (event.data.blockId && event.data.event === 'click') {
          handleChangeActiveTab(0);
          handleSetSelectedBlock(event.data.blockId);
        } else if (event.data.newOrder && event.data.event === 'sorted') {
          handleReorderLayout(event.data.newOrder);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [handleChangeActiveTab, handleReorderLayout, handleSetSelectedBlock]);


  const innerHTML = renderHandlebars(layout.blocks, layout.documentId);
  const { activeTab, previewMode } = config;

  return (
    <Router>
      <div className="wrapper d-flex">
        <Switch>
          <Route path="/">
            <NarrowSidebar
              onChangeActiveTab={handleChangeActiveTab}
              activeTab={activeTab}
            />
            <WideSidebar>
              <Inspector display={activeTab === 0} />
              <BlocksGallery
                category="navbar"
                name="Navbar"
                display={activeTab === 2}
                onPushBlock={handlePushBlock}
              />
              <BlocksGallery
                category="article"
                name="Article"
                display={activeTab === 3}
                onPushBlock={handlePushBlock}
              />
              <BlocksGallery
                category="carousel"
                name="Carousel"
                display={activeTab === 4}
                onPushBlock={handlePushBlock}
              />
              <BlocksGallery
                category="section"
                name="Section"
                display={activeTab === 5}
                onPushBlock={handlePushBlock}
              />
              <BlocksGallery
                category="gallery"
                name="Gallery"
                display={activeTab === 6}
                onPushBlock={handlePushBlock}
              />
              <BlocksGallery
                category="progress"
                name="Progress Bar"
                display={activeTab === 7}
                onPushBlock={handlePushBlock}
              />
              <BlocksGallery
                category="list"
                name="List"
                display={activeTab === 8}
                onPushBlock={handlePushBlock}
              />
              <BlocksGallery
                category="footer"
                name="Footer"
                display={activeTab === 9}
                onPushBlock={handlePushBlock}
              />
              <Output display={activeTab === 10} html={innerHTML} />
            </WideSidebar>
            <Preview
              html={innerHTML}
              onChangePreviewMode={handleChangePreviewMode}
              previewMode={previewMode}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

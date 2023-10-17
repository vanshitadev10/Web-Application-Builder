const hbs = `
<div class="container" style="max-width:100%;">
  <div class="row">
    <div class="col-6" style="display:flex; justify-content:center; align-items:center;">
      <a href="#" class="d-block pb-4 pt-4 h-100">
        <img class="img-fluid img-thumbnail" src="{{img1}}" alt="{{alt1}}" style="aspect-ratio:{{aspectRatio}}">
      </a>
    </div>
    <div class="col-6" style="display:flex; justify-content:center; align-items:center;">
      <a href="#" class="d-block pb-4 pt-4 h-100">
        <img class="img-fluid img-thumbnail" src="{{img2}}" alt="{{alt2}}" style="aspect-ratio:{{aspectRatio}}">
      </a>
    </div>
  </div>
</div>
`;

const block = {
  hbs,
  name: '2 column gallery',
  previewImageUrl: 'https://i.imgur.com/sSdOVTw.png',
  category: 'gallery',
  defaultData: {
    img1: "https://via.placeholder.com/450x450",
    img2: "https://via.placeholder.com/450x450",
    alt1: "Sample image",
    alt2: "Sample image",
    aspectRatio: "1/1",
  },
  config: {
    img1: {
      type: "string",
      name: 'Url to Image #1',
    },
    img2: {
      type: "string",
      name: 'Url to Image #2',
    },
    alt1: {
      type: "string",
      name: 'Alt for Image #1',
    },
    alt2: {
      type: "string",
      name: 'Alt for Image #2',
    },
    aspectRatio: {
      type: "string",
      name: 'Aspect-Ratio Of Image'
    },
  }
};

export default block;

const hbs = `
<div class="container" style="max-width:100%;">
  <div class="row">
    <div class="col-lg-3 col-md-4 col-6" style="display:flex; justify-content:center; align-items:center;">
      <a href="#" class="d-block pb-4 pt-4 h-100">
        <img class="img-fluid img-thumbnail" src="{{img1}}" alt="{{alt1}}" style="aspect-ratio:{{aspectRatio}}">
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6" style="display:flex; justify-content:center; align-items:center;">
      <a href="#" class="d-block pb-4 pt-4 h-100">
        <img class="img-fluid img-thumbnail" src="{{img2}}" alt="{{alt2}}" style="aspect-ratio:{{aspectRatio}}">
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6" style="display:flex; justify-content:center; align-items:center;">
      <a href="#" class="d-block pb-4 pt-4 h-100">
        <img class="img-fluid img-thumbnail" src="{{img3}}" alt="{{alt3}}" style="aspect-ratio:{{aspectRatio}}">
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-6" style="display:flex; justify-content:center; align-items:center;">
      <a href="#" class="d-block pb-4 pt-4 h-100">
        <img class="img-fluid img-thumbnail" src="{{img4}}" alt="{{alt4}}" style="aspect-ratio:{{aspectRatio}}">
      </a>
    </div>
  </div>
</div>
`;

const block = {
  hbs,
  name: '4 column gallery',
  previewImageUrl: 'https://i.imgur.com/D1hw8YG.png',
  category: 'gallery',
  defaultData: {
    img1: "https://via.placeholder.com/450x450",
    img2: "https://via.placeholder.com/450x450.",
    img3: "https://via.placeholder.com/450x450",
    img4: "https://via.placeholder.com/450x450",
    alt1: "Sample image",
    alt2: "Sample image",
    alt3: "Sample image",
    alt4: "Sample image",
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
    img3: {
      type: "string",
      name: 'Url to Image #3',
    },
    img4: {
      type: "string",
      name: 'Url to Image #4',
    },
    alt1: {
      type: "string",
      name: 'Alt for Image #1',
    },
    alt2: {
      type: "string",
      name: 'Alt for Image #2',
    },
    alt3: {
      type: "string",
      name: 'Alt for Image #3',
    },
    alt4: {
      type: "string",
      name: 'Alt for Image #4',
    },
    aspectRatio: {
      type: "string",
      name: 'Aspect-Ratio Of Image'
    },
  }
};

export default block;

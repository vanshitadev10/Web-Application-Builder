const hbs = `
<div class="container" style="max-width:100%;">
  <div style="display:flex; justify-content:center; align-items:center;">
    <a href="#" class="d-block mb-4 mt-4 h-100 w-100">
      <img class="img-fluid img-thumbnail" src="{{img1}}" alt="{{alt1}}" style="width:100%; aspect-ratio:{{aspectRatio}};">
    </a>
  </div>
</div>
`;

const block = {
  hbs,
  name: '1 column gallery',
  previewImageUrl: 'https://i.imgur.com/kgnYt29.png',
  category: 'gallery',
  defaultData: {
    img1: "https://via.placeholder.com/450x450",
    alt1: "Sample image",
    alt2: "Sample image",
    aspectRatio: "1/1",
  },
  config: {
    img1: {
      type: "string",
      name: 'Url to Image #1',
    },
    alt1: {
      type: "string",
      name: 'Alt for Image #1',
    },
    aspectRatio: {
      type: "string",
      name: 'Aspect-Ratio Of Image'
    },
  }
};

export default block;

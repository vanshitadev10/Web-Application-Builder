const hbs = `
<div>
  <div class="container" style="padding:1rem; max-width:100%;">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center">{{title}}</h2>
        <p class="text-center">{{description}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-4 item">
        <a href="#">
            <img class="img-fluid" src="{{image1}}" />
        </a>
        <h4 class="name text-center">{{articleTitle1}}</h4>
      </div>
      <div class="col-sm-6 col-md-4 item">
        <a href="#">
            <img class="img-fluid" src="{{image2}}" />
        </a>
        <h4 class="name text-center">{{articleTitle2}}</h4>
      </div>
      <div class="col-sm-6 col-md-4 item">
        <a href="#">
            <img class="img-fluid" src="{{image3}}" />
        </a>
        <h4 class="name text-center">{{articleTitle3}}</h4>
      </div>
    </div>
  </div>
</div>
`;

const block = {
  hbs,
  name: 'Section #2',
  previewImageUrl: 'https://i.imgur.com/xwodNsu.png',
  category: 'section',
  defaultData: {
    title: 'Sample section',
    description: 'Lorem ipsum dolor sit amet.',
    image1: 'https://via.placeholder.com/450x450',
    image2: 'https://via.placeholder.com/450x450',
    image3: 'https://via.placeholder.com/450x450',
    articleTitle1: 'Hello World',
    articleTitle2: 'Hello World',
    articleTitle3: 'Hello World',
  },
  config: {
    title: {
      type: "string",
      name: 'Section title',
    },
    description: {
      type: "string",
      name: 'Section description',
    },
    image1: {
      type: "string",
      name: 'Url to image #1',
    },
    image2: {
      type: "string",
      name: 'Url to image #2',
    },
    image3: {
      type: "string",
      name: 'Url to image #3',
    },
    articleTitle1: {
      type: "string",
      name: 'Title for the article #1',
    },
    articleTitle2: {
      type: "string",
      name: 'Title for the article #2',
    },
    articleTitle3: {
      type: "string",
      name: 'Title for the article #3',
    },
  }
};

export default block;

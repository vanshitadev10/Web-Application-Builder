const hbs = `
<div class="container text-center pt-5 pb-5">
  <h5>{{title}}</h5>
  <h1 class="display-4">{{tagline}}</h1>
  <a class="btn btn-link" href="#">{{link}}</a>
</div>
`;

const block = {
  hbs,
  name: 'Article #2',
  previewImageUrl: 'https://i.imgur.com/JpSvR4m.png',
  category: 'article',
  defaultData: {
    title: "Hello World",
    tagline: "Lorem ipsum dolor sit amet.",
    link: "Read more",
  },
  config: {
    title: {
      type: "string",
      name: 'Title',
    },
    tagline: {
      type: "string",
      name: 'Tag Line',
    },
    link: {
      type: "string",
      name: 'Text on the link',
    }
  }
};

export default block;

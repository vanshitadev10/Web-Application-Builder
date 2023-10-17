const hbs = `
<div class="container text-center" style="max-width:100%;">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="{{link1}}" class="d-block w-100" alt="{{alt1}}">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{label1}}</h5>
          <p>{{text1}}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="{{link2}}" class="d-block w-100" alt="{{alt2}}">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{label2}}</h5>
          <p>{{text2}}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="{{link3}}" class="d-block w-100" alt="{{alt3}}">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{label3}}</h5>
          <p>{{text3}}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev" style="border:none; height:fit-content; background-color:transparent; margin:auto;">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next" style="border:none; height:fit-content; background-color:transparent; margin:auto;">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
</div>
`;


const block = {
  hbs,
  name: 'Carousel #3',
  previewImageUrl: 'https://i.imgur.com/fqOmM7q.png',
  category: 'carousel',
  defaultData: {
    link1: 'https://dummyimage.com/400x250/c/a&text=Slide+1',
    link2: 'https://dummyimage.com/400x250/c/a&text=Slide+2',
    link3: 'https://dummyimage.com/400x250/c/a&text=Slide+3',
    alt1: 'Sample Image',
    alt2: 'Sample Image',
    alt3: 'Sample Image',
    label1: 'First slide label',
    label2: 'Second slide label',
    label3: 'Third slide label',
    text1: 'Some representative placeholder content for the first slide.',
    text2: 'Some representative placeholder content for the second slide.',
    text3: 'Some representative placeholder content for the third slide.',
  },
  config: {
    link1: {
      type: "string",
      name: 'Url to Image #1',
    },
    link2: {
      type: "string",
      name: 'Url to Image #2',
    },
    link3: {
      type: "string",
      name: 'Url to Image #3',
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
    label1: {
      type: "string",
      name: 'Label for Image #1',
    },
    label2: {
      type: "string",
      name: 'Label for Image #2',
    },
    label3: {
      type: "string",
      name: 'Label for Image #3',
    },
    text1: {
      type: "string",
      name: 'Text for Image #1',
    },
    text2: {
      type: "string",
      name: 'Text for Image #2',
    },
    text3: {
      type: "string",
      name: 'Text for Image #3',
    },
  }
};

export default block;

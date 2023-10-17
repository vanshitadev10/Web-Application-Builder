const hbs = `
<div class="container text-center" style="max-width:100%;">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="{{link1}}" class="d-block w-100" alt="{{alt1}}">
      </div>
      <div class="carousel-item">
        <img src="{{link2}}" class="d-block w-100" alt="{{alt2}}">
      </div>
      <div class="carousel-item">
        <img src="{{link3}}" class="d-block w-100" alt="{{alt3}}">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev" style="border:none; height:fit-content; background-color:transparent; margin:auto;">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next" style="border:none; height:fit-content; background-color:transparent; margin:auto;">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
</div>
`;


const block = {
  hbs,
  name: 'Carousel #1',
  previewImageUrl: 'https://i.imgur.com/ysrFVQu.png',
  category: 'carousel',
  defaultData: {
    link1: 'https://dummyimage.com/400x250/c/a&text=Slide+1',
    link2: 'https://dummyimage.com/400x250/c/a&text=Slide+2',
    link3: 'https://dummyimage.com/400x250/c/a&text=Slide+3',
    alt1: 'Sample Image',
    alt2: 'Sample Image',
    alt3: 'Sample Image',
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
  }
};

export default block;

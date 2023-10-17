const hbs = `
<nav class="navbar navbar-expand-lg navbar-light {{#if useDarkTheme}}navbar-dark bg-dark{{else}}bg-light{{/if}}">
  <a class="navbar-brand" style="display:flex; align-items:center; gap:0.5rem;" href="#">
    <img src={{logo}} alt="Logo" width="30" height="24" style="padding-top:0;">
      <span style="">{{brand}}</span>
    </img>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link {{status1}}" href="#">{{link1}}
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link {{status2}}" href="#">{{link2}}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link {{status3}}" href="#">{{link3}}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link {{status4}}" href="#">{{link4}}</a>
      </li>
    </ul>
    {{#if showSearch}}
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
    {{/if}}
  </div>
</nav>
`;


const block = {
  hbs,
  name: 'Navbar #5',
  previewImageUrl: 'https://i.imgur.com/o6za3s5.png',
  category: 'navbar',
  defaultData: {
    logo: "https://img.icons8.com/material/24/000000/buysellads.png",
    brand: "Brand",
    link1: "Home",
    link2: "About",
    link3: "Feature",
    link4: "Pricing",
    showSearch: true,
    useDarkTheme: false,
  },
  config: {
    logo: {
      type: "string",
      name: 'Url to Logo',
    },
    brand: {
      type: "string",
      name: 'Brand',
    },
    link1: {
      type: "string",
      name: 'Link #1',
    },
    status1: {
      type: "string",
      name: "Status #1",
      inputType: "radio",
    },
    link2: {
      type: "string",
      name: 'Link #2',
    },
    status2: {
      type: "string",
      name: "Status #2",
      inputType: "radio",
    },
    link3: {
      type: "string",
      name: 'Link #3',
    },
    status3: {
      type: "string",
      name: "Status #3",
      inputType: "radio",
    },
    link4: {
      type: "string",
      name: 'Link #4',
    },
    status4: {
      type: "string",
      name: "Status #4",
      inputType: "radio",
    },
    showSearch: {
      type: "boolean",
      name: 'Show search',
      inputType: "checkbox",
    },
    useDarkTheme: {
      type: "boolean",
      name: 'Use dark theme',
      inputType: "checkbox",
    },
  }
};

export default block;

const hbs = `
  <nav class="navbar navbar-expand-lg navbar-light {{#if useDarkTheme}}navbar-dark bg-dark{{else}}bg-light{{/if}}">
    <a class="navbar-brand" style="padding-top:0;" href="#">
      <img src={{ logo }} alt="Logo" width="30" height="24" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link {{status1}}" href="#">{{link1}}
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link {{status2}}" href="#">{{link2}}</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          {{link3}}
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{{link4}}</a></li>
            <li><a class="dropdown-item" href="#">{{link5}}</a></li>
            <li><a class="dropdown-item" href="#">{{link6}}</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link {{status3}}" href="#">{{link7}}</a>
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
  name: 'Navbar #4',
  previewImageUrl: 'https://i.imgur.com/M3NogrD.png',
  category: 'navbar',
  defaultData: {
    logo: "https://img.icons8.com/material/24/000000/buysellads.png",
    link1: "Home",
    link2: "About",
    link3: "Dropdown",
    link4: "Action 1",
    link5: "Action 2",
    link6: "Action 3",
    link7: "Feature",
    showSearch: true,
    useDarkTheme: false,
  },
  config: {
    logo: {
      type: "string",
      name: 'Url to Logo',
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
      name: "Status #1",
      inputType: "radio",
    },
    link3: {
      type: "string",
      name: 'Link #3',
    },
    link4: {
      type: "string",
      name: 'Link #4',
    },
    link5: {
      type: "string",
      name: 'Link #5',
    },
    link6: {
      type: "string",
      name: 'Link #6',
    },
    link7: {
      type: "string",
      name: 'Link #7',
    },
    status3: {
      type: "string",
      name: "Status #1",
      inputType: "radio",
    },
    showSearch: {
      type: "boolean",
      name: 'Show search',
    },
    useDarkTheme: {
      type: "boolean",
      name: 'Use dark theme',
    },
  }
};

export default block;

const hbs = `
<div class="container text-center" style="max-width:100%; background-color:#e9ecef;">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 border-top" style="text-align:left;">
    <p class="col-md-4 mb-0 text-muted">© {{year}} {{companyName}}</p>
    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img src={{logo}} alt="Logo" width="30" height="24" />
    </a>
    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{{link1}}</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{{link2}}</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{{link3}}</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{{link4}}</a></li>
    </ul>
  </footer>
</div>
`;

const block = {
  hbs,
  name: 'Footer #1',
  previewImageUrl: 'https://i.imgur.com/hGQNkqg.png',
  category: 'footer',
  defaultData: {
    year: "2023",
    companyName: "Company, Inc",
    logo: "https://img.icons8.com/material/24/000000/buysellads.png",
    link1: "Home",
    link2: "About",
    link3: "Feature",
    link4: "Pricing",
  },
  config: {
    year: {
      type: "string",
      name: 'Current Year',
    },
    companyName: {
      type: "string",
      name: 'Company Name',
    },
    logo: {
      type: "string",
      name: 'Url to Logo',
    },
    link1: {
      type: "string",
      name: 'Link #1',
    },
    link2: {
      type: "string",
      name: 'Link #2',
    },
    link3: {
      type: "string",
      name: 'Link #3',
    },
    link4: {
      type: "string",
      name: 'Link #4',
    },
  }
};

export default block;

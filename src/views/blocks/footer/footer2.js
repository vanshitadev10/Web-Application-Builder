const hbs = `
<div class="container text-center" style="max-width:100%; background-color:#e9ecef;">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 border-top" style="text-align:left;">
    <div class="col-md-4 d-flex align-items-center" style="gap:0.5rem;">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src={{logo}} alt="Logo" width="30" height="24" />
      </a>
      <span class="mb-3 mb-md-0 text-muted">© {{year}} {{companyName}}</span>
    </div>
    <ul class="nav col-md-4 justify-content-end">
      <li class="ms-3"><a class="text-muted" href="#"><img width="24" height="24" src={{url1}} alt={{alt1}}/></li>
      <li class="ms-3"><a class="text-muted" href="#"><img width="24" height="24" src={{url2}} alt={{alt2}}/></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><img width="24" height="24" src={{url3}} alt={{alt3}}/></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><img width="24" height="24" src={{url4}} alt={{alt4}}/></a></li>
    </ul>
  </footer>
</div>
`;

const block = {
  hbs,
  name: 'Footer #2',
  previewImageUrl: 'https://i.imgur.com/M2gTGpj.png',
  category: 'footer',
  defaultData: {
    year: "2023",
    companyName: "Company, Inc",
    logo: "https://img.icons8.com/material/24/000000/buysellads.png",
    url1: "https://img.icons8.com/material/24/6c757d/twitter--v2.png",
    url2: "https://img.icons8.com/material/24/6c757d/instagram-new--v1.png",
    url3: "https://img.icons8.com/material/24/6c757d/facebook-new.png",
    url4: "https://img.icons8.com/material/24/6c757d/linkedin--v1.png",
    alt1: "Twitter",
    alt2: "Instagram",
    alt3: "Facebook",
    alt3: "Youtube",
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
    url1: {
      type: "string",
      name: 'Url to Icon #1',
    },
    url2: {
      type: "string",
      name: 'Url to Icon #2',
    },
    url3: {
      type: "string",
      name: 'Url to Icon #3',
    },
    url4: {
      type: "string",
      name: 'Url to Icon #4',
    },
    alt1: {
      type: "string",
      name: 'Alt to Icon #1',
    },
    alt2: {
      type: "string",
      name: 'Alt to Icon #2',
    },
    alt3: {
      type: "string",
      name: 'Alt to Icon #3',
    },
    alt4: {
      type: "string",
      name: 'Alt to Icon #4',
    },
  }
};

export default block;

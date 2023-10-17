const hbs = `
<div class="container text-center" style="max-width:100%; background-color:#e9ecef;">
  <footer class="py-4">
    <ul class="nav justify-content-center border-bottom pb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{{link1}}</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{{link2}}</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{{link3}}</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{{link4}}</a></li>
    </ul>
    <p class="text-center text-muted">© {{year}} {{companyName}}</p>
  </footer>
</div>
`;

const block = {
  hbs,
  name: 'Footer #3',
  previewImageUrl: 'https://i.imgur.com/PQ0q5pL.png',
  category: 'footer',
  defaultData: {
    link1: "Home",
    link2: "About",
    link3: "Feature",
    link4: "Pricing",
    year: "2023",
    companyName: "Company, Inc",
  },
  config: {
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
    year: {
      type: "string",
      name: 'Current Year',
    },
    companyName: {
      type: "string",
      name: 'Company Name',
    },
  }
};

export default block;

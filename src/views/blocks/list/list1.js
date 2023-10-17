const hbs = `
<div class="container py-4" style="max-width:100%;">
  <ul class="list-group" style="text-align:{{textAlignment}};">
    <li class="list-group-item">{{item1}}</li>
    <li class="list-group-item">{{item2}}</li>
    <li class="list-group-item">{{item3}}</li>
    <li class="list-group-item">{{item4}}</li>
    <li class="list-group-item">{{item5}}</li>
  </ul>
</div>
`;

const block = {
  hbs,
  name: 'List #1',
  previewImageUrl: 'https://i.imgur.com/7vFwvd1.png',
  category: 'list',
  defaultData: {
    item1: "First Item",
    item2: "Second Item",
    item3: "Third Item",
    item4: "Fourth Item",
    item5: "Fifth Item",
  },
  config: {
    item1: {
      type: "string",
      name: 'First Item',
    },
    item2: {
      type: "string",
      name: 'Second Item',
    },
    item3: {
      type: "string",
      name: 'Third Item',
    },
    item4: {
      type: "string",
      name: 'Fourth Item',
    },
    item5: {
      type: "string",
      name: 'Fifth Item',
    },
    textAlignment: {
      type: "radio",
      name: 'Align Text',
      radioOptions: ['left', 'center', 'right'],
    }
  }
};

export default block;

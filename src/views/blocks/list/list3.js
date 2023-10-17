const hbs = `
<div class="container py-4" style="max-width:100%;">
  <ul class="list-group list-group-horizontal" style="display:grid; grid-template-columns:1fr 1fr 1fr; text-align:{{textAlignment}};">
    <li class="list-group-item">{{item1}}</li>
    <li class="list-group-item">{{item2}}</li>
    <li class="list-group-item">{{item3}}</li>
  </ul>
  <ul class="list-group list-group-horizontal" style="display:grid; grid-template-columns:1fr 1fr 1fr; text-align:{{textAlignment}};">
    <li class="list-group-item">{{item4}}</li>
    <li class="list-group-item">{{item5}}</li>
    <li class="list-group-item">{{item6}}</li>
  </ul>
  <ul class="list-group list-group-horizontal" style="display:grid; grid-template-columns:1fr 1fr 1fr; text-align:{{textAlignment}};">
    <li class="list-group-item">{{item7}}</li>
    <li class="list-group-item">{{item8}}</li>
    <li class="list-group-item">{{item9}}</li>
  </ul>
  <ul class="list-group list-group-horizontal" style="display:grid; grid-template-columns:1fr 1fr 1fr; text-align:{{textAlignment}};">
    <li class="list-group-item">{{item10}}</li>
    <li class="list-group-item">{{item11}}</li>
    <li class="list-group-item">{{item12}}</li>
  </ul>
  <ul class="list-group list-group-horizontal" style="display:grid; grid-template-columns:1fr 1fr 1fr; text-align:{{textAlignment}};">
    <li class="list-group-item">{{item13}}</li>
    <li class="list-group-item">{{item14}}</li>
    <li class="list-group-item">{{item15}}</li>
  </ul>
</div>
`;

const block = {
  hbs,
  name: 'List #3',
  previewImageUrl: 'https://i.imgur.com/kSeqkWE.png',
  category: 'list',
  defaultData: {
    item1: "Item 1",
    item2: "Item 2",
    item3: "Item 3",
    item4: "Item 4",
    item5: "Item 5",
    item6: "Item 6",
    item7: "Item 7",
    item8: "Item 8",
    item9: "Item 9",
    item10: "Item 10",
    item11: "Item 11",
    item12: "Item 12",
    item13: "Item 13",
    item14: "Item 14",
    item15: "Item 15",
  },
  config: {
    item1: {
      type: "string",
      name: 'Item 1',
    },
    item2: {
      type: "string",
      name: 'Item 2',
    },
    item3: {
      type: "string",
      name: 'Item 3',
    },
    item4: {
      type: "string",
      name: 'Item 4',
    },
    item5: {
      type: "string",
      name: 'Item 5',
    },
    item6: {
      type: "string",
      name: 'Item 6',
    },
    item7: {
      type: "string",
      name: 'Item 7',
    },
    item8: {
      type: "string",
      name: 'Item 8',
    },
    item9: {
      type: "string",
      name: 'Item 9',
    },
    item10: {
      type: "string",
      name: 'Item 10',
    },
    item11: {
      type: "string",
      name: 'Item 11',
    },
    item12: {
      type: "string",
      name: 'Item 12',
    },
    item13: {
      type: "string",
      name: 'Item 13',
    },
    item14: {
      type: "string",
      name: 'Item 14',
    },
    item15: {
      type: "string",
      name: 'Item 15',
    },
    textAlignment: {
      type: "radio",
      name: 'Align Text',
      radioOptions: ['left', 'center', 'right'],
    }
  }
};

export default block;

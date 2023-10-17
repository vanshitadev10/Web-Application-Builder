const hbs = `
<div class="container text-center pt-4 pb-4" style="max-width:100%;">
  <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width:{{barWidth}}%">{{barWidth}}%</div>
  </div>
</div>
`;

const block = {
  hbs,
  name: 'Progress Bar #2',
  previewImageUrl: 'https://i.imgur.com/PBJeZ02.png',
  category: 'progress',
  defaultData: {
    barWidth: 30
  },
  config: {
    barWidth: {
      type: "string",
      name: 'Progress (in percentage)',
    },
  }
};

export default block;

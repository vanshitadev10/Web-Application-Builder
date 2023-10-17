const hbs = `
<div class="container text-center pt-4 pb-4" style="max-width:100%;">
  <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:{{barWidth}}%"></div>
  </div>
</div>
`;

const block = {
  hbs,
  name: 'Progress Bar #4',
  previewImageUrl: 'https://i.imgur.com/OAKTBXT.png',
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

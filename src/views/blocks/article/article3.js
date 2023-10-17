const hbs = `
<div class="container text-center pt-5 pb-5">
  <h3>{{title}}</h3>
  <p class="lead" style="text-align:{{textAlignment}};">{{text}}</p>
</div>
`;

const block = {
  hbs,
  name: 'Article #2',
  previewImageUrl: 'https://i.imgur.com/Mw7ZE3j.png',
  category: 'article',
  defaultData: {
    title: "Hello World",
    text: "Lorem ipsum dolor sit amet at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus",
  },
  config: {
    title: {
      type: "string",
      name: 'Title',
    },
    text: {
      type: "string",
      name: 'Text',
    },
    textAlignment: {
      type: "radio",
      name: 'Align Text',
      radioOptions: ['left', 'center', 'right'],
    }
  }
};

export default block;

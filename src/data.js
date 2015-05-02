
var cssnext = require('cssnext');
var colors = require('colors.css');

colors.darkgray = '#304650';

module.exports = {
  name: 'Brent Jackson',
  title: 'Jxnblk',
  username: 'jxnblk',
  baseUrl: '',
  favicon: 'favicon.png',
  styles: cssnext('@import "blk";', { compress: true }),
  stylesheet: 'http://d2v52k3cl9vedd.cloudfront.net/blk/1.0.1/blk.min.css',
  byline: 'Product designer at Etsy. Based in Brooklyn, NY.',
  homepage: '//jxnblk.com',
  headerLinks: [
    { href: '//twitter.com/jxnblk', title: 'Twitter' },
    { href: '//github.com/jxnblk', title: 'Github' },
  ],
  social_networks: [
    { name: 'Twitter', link: '//twitter.com/jxnblk' },
    { name: 'Github', link: '//github.com/jxnblk' },
    { name: 'Tumblr', link: '//jxnblk.tumblr.com' },
    { name: 'Soundcloud', link: '//soundcloud.com/jxnblk' }
  ],
  projects: {
    featured: [
      {
        name: 'Basscss',
        link: '//basscss.com',
        description: 'Low-level CSS toolkit',
        color: 'white',
        backgroundColor: colors.blue,
        //logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/bass-bolt.svg',
        logoSvg: [
          '<svg xmlns="http://www.w3.org/2000/svg" class="mr1" viewBox="0 0 40 16" width="80" height="32" fill="currentcolor">',
          '<path d="M20 0 L24 8 L40 6 L20 16 L16 8 L0 10 z"></path>',
          '</svg>',
        ].join(' '),
        customClass: 'caps left-align',
      },
      {
        name: 'CSS Stats',
        link: '//cssstats.com',
        description: 'CSS parsing tool',
        //logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/cssstats.svg',
        color: colors.black,
        backgroundColor: colors.silver,
        logoSvg: [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="64" height="64" fill="currentcolor">',
          '<g font-family="Helvetica" font-size="12px" font-weight="bold">',
          '<text x="0.5" y="11">{</text>',
          '<text x="15.5" y="11" text-anchor="end">}</text>',
          '</g>',
          '<rect x="4.5" y="7" width="2.5" height="4"/>',
          '<rect x="8.5" y="5" width="2.5" height="6"/>',
          '</svg>'
        ].join(' '),
        //customClass: 'border-gray',
      },
      {
        name: 'Geomicons',
        link: '//geomicons.com',
        description: 'Open source icons for the web',
        //logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/geomicons-heart.svg',
        logoSvg: '<svg id="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="currentcolor"> <path d="M0 10 C0 6, 3 2, 8 2 C12 2, 15 5, 16 6 C17 5, 20 2, 24 2 C30 2, 32 6, 32 10 C32 18, 18 29, 16 30 C14 29, 0 18, 0 10  "></path> </svg>',
        color: 'white',
        backgroundColor: colors.navy, //colors.darkgray,
        //backgroundImage: 'url(http://d2v52k3cl9vedd.cloudfront.net/assets/images/geomicons-grid.svg)',
      },
      {
        name: 'Colorable',
        link: '//jxnblk.com/colorable',
        description: 'Color palette contrast tester',
        color: colors.aqua,
        backgroundColor: colors.navy,
        logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="transparent"> <style> .colorable-text { font-family: "Avenir Next", "Helvetica Neue", Helvetica, sans-serif; font-size: 20px; font-weight: 600; text-anchor: middle; } </style> <rect width="32" height="32" rx="4" ry="4" fill="currentcolor" /> <text x="16" y="22" width="32" fill="' + colors.navy + '" class="colorable-text"> Aa </text> </svg>',
      },
      {
        name: 'Shade',
        link: '//jxnblk.com/shade',
        description: 'Mathematically-derived gradients',
        color: 'white',
        backgroundColor: '#FF00A1', //'#f6ff00',
        //backgroundImage: 'linear-gradient(-90deg, #F6FF00, #FF00A1)',
        customClass: 'border border-white',
      },
      {
        name: 'Spectral',
        link: '//jxnblk.com/Spectral',
        description: 'Click the Rainbow',
        //color: 'rgba(0,0,0,.875)',
        color: colors.navy,
        backgroundColor: colors.teal, // '#00c9fc',
      },
      {
        name: 'Fitter Happier Text',
        link: '//jxnblk.com/fitter-happier-text',
        description: 'Performant, Fully Fluid Headings',
        //color: 'rgba(255,255,255,.875)',
        color: colors.navy,
        backgroundColor: colors.orange,
        //backgroundColor: '#f40',
        //logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" overflow="visible" viewBox="0 0 222 22"> <text x="50%" y="16" font-family="inherit" font-size="1rem" font-weight="inherit" style="text-anchor:middle">Fitter Happier Text</text> </svg>',
      },
      {
        name: 'Loading',
        link: '//jxnblk.com/loading',
        description: 'Animated SVG Loading Indicators',
        //logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/loading-bubbles.svg',
        logoSvg: [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="currentcolor">',
          '<circle transform="translate(8 0)" cx="0" cy="16" r="0">',
          '<animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"',
          'keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />',
          '</circle>',
          '<circle transform="translate(16 0)" cx="0" cy="16" r="0">',
          '<animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"',
          'keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />',
          '</circle>',
          '<circle transform="translate(24 0)" cx="0" cy="16" r="0">',
          '<animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"',
          'keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />',
          '</circle>',
          '</svg>'
        ].join(' '),
        color: colors.aqua,
        backgroundColor: colors.maroon, //'#aa4f80',
      },
    ],
    other: [
      { name: 'Principles', link: '//jxnblk.com/principles', description: 'Web Design Principles' },
      { name: 'Reading List', link: '//jxnblk.com/reading-list', description: 'Recommended Reading' },
      { name: 'Ashley', link: '//jxnblk.com/Ashley', description: 'Readable Tumblr Theme' },
      { name: 'Heather', link: '//jxnblk.com/Heather', description: 'Hyperminimal Jekyll Theme' },
      { name: 'Twipster', link: '//jxnblk.com/Twipster', description: 'Simpler, Readabler Twitter' },
      { name: 'SoundRad', link: '//soundrad.com', description: 'Simple, Fast Soundcloud Player' },
      { name: 'MrsJxn', link: '//mrsjxn.com', description: 'Post-Future Beats' },
      { name: 'Microbeats', link: '//microbeats.cc', description: 'Beats Created in Under an Hour' },
      { name: 'Skullcat', link: '//jxnblk.com/skullcat', description: 'A Avatar fur Mrmrs' },
      { name: 'Gifolio', link: '//jxnblk.com/gifolio', description: 'GIF Portfolio' },
      { name: 'Papercraft', link: '//jxnblk.com/papercraft', description: 'Hand-Coded SVG Lettering' },
      { name: 'Stepkit', link: '//jxnblk.com/stepkit', description: 'Web Audio Step Sequencer' },
    ]
  },
  writing: {
    posts: [
      {
        title: 'It’s Okay to Look the Same',
        subheading: 'Why frameworks are actually pretty great',
        link: 'https://medium.com/p/e95e79f409b7',
        lead: 'Every once in a while I hear someone complain about the visual homogenization of the web, and front-end frameworks often get the brunt of the attack. This visual sameness isn’t necessarily a bad thing.'
      },
      {
        title: 'Designing in the Browser Faster',
        subheading: null,
        link: 'https://medium.com/p/bd413d2bc4f3',
        lead: 'I’ve been dabbling with HTML and CSS for years—building small websites for myself and friends and building prototypes to test designs. And, while I’ve been fascinated with the idea of designing in the browser for a long time, it wasn’t until recently that it’s become much, much faster for me than using traditional design software.'
      },
      {
        title: 'Hack Design: Using Icons in Interfaces',
        subheading: null,
        link: 'https://hackdesign.org/lessons/24',
        lead: 'With the proliferation of mobile devices, icons play an increasingly important role in interface design. Icons can help aid in scannability, save space at smaller screen sizes, and afford clear, tappable targets. That said, icons can cause user confusion and frustration when used poorly. A solid foundation of heuristic icon design principles will save a lot of time on user research and help lead to the success of a product.'
      },
      {
        title: 'An Update on the Hamburger Menu',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/82486816704/an-update-on-the-hamburger-menu',
        lead: null
      },
      {
        title: 'I’m Sick of Your Tiny, Tiny Type',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/41796724549/im-sick-of-your-tiny-tiny-type',
        lead: null
      },
      {
        title: 'Organizing Mobile Navigation Based on Information-Seeking Behavior',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/40693165132/organizing-mobile-navigation-based-on',
        lead: null
      },
      {
        title: 'Buckets & Jumpoffs: Using Content-Centric Contextual Navigation',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/37416765650/buckets-jumpoffs-using-content-centric-contextual',
        lead: null
      },
      {
        title: 'The Advantages of Table Views Over Left Nav Flyouts',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/36972301487/the-advantages-of-table-views-over-left-nav-flyouts',
        lead: null
      },
      {
        title: 'Hamburgers & Basements: Why Not to Use Left Nav Flyouts',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/36218805036/hamburgers-basements-why-not-to-use-left-nav-flyouts',
        lead: null
      },
    ]
  },
};

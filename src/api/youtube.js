const videos = [
  {
    kind: 'youtube#video',
    etag: '\'XI7nbFXulYBIpL0ayR_gDh3eu1k/Qs1KaPxpJRUPNLP5L0VJ0lKv0ek\'',
    id: 'jn9mHzXJIV0',
    snippet: {
      publishedAt: '2018-03-02T21:37:44.000Z',
      channelId: 'UCBJycsmduvYEL83R_U4JriQ',
      title: '18-core iMac Pro Review: Not a Trap!',
      description: 'iMac Pro. Turns out it\'s not a trap. It\'s pretty damn good.\n\nThat time I thought it was a trap: https://youtu.be/RvXmktAurSQ\n\nThat wallpaper: https://i.imgur.com/YO1xfwJ.jpg\n\nSatechi hub: http://amzn.to/2oE4VtP\nTwelvesouth stand: https://twelvesouth.com/product/hirise-pro-for-imac\n\nMKBHD Merch: http://shop.MKBHD.com\n\nVideo Gear I use: http://kit.com/MKBHD/video-gear#recommendation17959\nTech I\'m using right now: https://www.amazon.com/shop/influencer-0bfe542e\n\nIntro Track: More Better by Alltta\n\n~\nhttp://twitter.com/MKBHD\nhttp://snapchat.com/add/MKBHD\nhttp://google.com/+MarquesBrownlee\nhttp://instagram.com/MKBHD\nhttp://facebook.com/MKBHD',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/jn9mHzXJIV0/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/jn9mHzXJIV0/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/jn9mHzXJIV0/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/jn9mHzXJIV0/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Marques Brownlee',
      tags: [
        'iMac Pro',
        '18 core iMac',
        '18-core',
        '18-core iMac Pro',
        '18 core iMac Pro',
        'iMac',
        'iMac Pro review',
        'Apple desktop',
        'Mac Pro',
      ],
      categoryId: '28',
      liveBroadcastContent: 'none',
      localized: {
        title: '18-core iMac Pro Review: Not a Trap!',
        description: 'iMac Pro. Turns out it\'s not a trap. It\'s pretty damn good.\n\nThat time I thought it was a trap: https://youtu.be/RvXmktAurSQ\n\nThat wallpaper: https://i.imgur.com/YO1xfwJ.jpg\n\nSatechi hub: http://amzn.to/2oE4VtP\nTwelvesouth stand: https://twelvesouth.com/product/hirise-pro-for-imac\n\nMKBHD Merch: http://shop.MKBHD.com\n\nVideo Gear I use: http://kit.com/MKBHD/video-gear#recommendation17959\nTech I\'m using right now: https://www.amazon.com/shop/influencer-0bfe542e\n\nIntro Track: More Better by Alltta\n\n~\nhttp://twitter.com/MKBHD\nhttp://snapchat.com/add/MKBHD\nhttp://google.com/+MarquesBrownlee\nhttp://instagram.com/MKBHD\nhttp://facebook.com/MKBHD',
      },
    },
  },
];

export default {
  getVideos(cb) {
    setTimeout(() => cb(videos), 100);
  },
};


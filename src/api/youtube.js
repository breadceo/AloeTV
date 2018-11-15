const _videos = [
    {"id": 1, "title": "a"},
    {"id": 2, "title": "b"},
];

export default {
    getVideos(cb) {
        setTimeout(() => cb(_videos), 100);
    }
}
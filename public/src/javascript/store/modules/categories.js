let state = {
    categories: [
        {
            id: 1,
            name: '电子书',
            route: '/books',
            icon: 'fa-file-pdf-o'
        },
        {
            id: 2,
            name: '照片',
            route: '/photos',
            icon: 'fa-file-image-o'
        },
        {
            id: 3,
            name: '其他文件',
            route: '/otherfiles',
            icon: 'fa-file-text-o'
        }
    ]
}

export default {
    state,
    namespaced: true
}
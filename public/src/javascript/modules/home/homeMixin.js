const mixin = {
    methods: {
        convertFileType(fileType) {
            const MIMETYPES = {
                'image/png': 'png',
                'image/jpeg': 'jpg',
                'application/pdf': 'pdf'
            };
            return MIMETYPES[fileType] || '';
        }
    }
};

export default mixin;
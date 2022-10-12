
export const fileUpload = async(file) => {
    // if( !file) throw new Error('There is no file to upload')
    // if( !file) return null

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dj47dgn4w/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'journal-react');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            return null;
        }

    } catch (error) {
        // console.log(error);
        // throw new Error(error.message);
        return null
    }
}
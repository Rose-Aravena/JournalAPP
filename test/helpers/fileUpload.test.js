import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dj47dgn4w',
    api_key: '274984533127592',
    api_secret: 'ILqpJmd-E3YPODe0HpaPNQ5Mc8U',
    secure: true
});

describe('Tests on fileUpload', () => {
    test('you must upload the file correctly to cloudinary', async() => {
        const imageUrl = 'https://live.staticflickr.com/4275/34054354724_4234868b8f_b.jpg'
        const resp = await fetch(imageUrl);
        const blob= await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
        console.log(url)
        const segments = url.split('/');
        const imageId = segments[segments.length -1].replace('.jpg', '');

        await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });

    });

    test('should return null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    })
})
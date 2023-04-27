import { requestGeolocationPermission, reverseGeoCoding } from "../src/utils/apicalls"

describe('Test apicall file', () => {
    test('Test request geolocationPermission', async () => {
        const data = await requestGeolocationPermission()
        expect(data).toMatchObject({})
    })
    test('Test Reverse geocoding',async() => {
        try {
            const data = await reverseGeoCoding(12,12)
            console.log(data)
        }catch(err:any) {
            console.log(err?.message)
        }
    })
})
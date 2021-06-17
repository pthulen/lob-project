import axios from 'axios';

export const fetchAddresses = async () => {
    const res = await axios.get('/api')

    let addressArray = [];
    res.data.forEach(el => {
        let addressInfo = {
            name: el.name,
            address_city: el.address_city,
            address_country: el.address_country,
            address_line1: el.address_line1,
            address_state: el.address_state,
            address_zip: el.address_zip,
            id: el.id,
            address_full: `${el.name} ${el.address_line1} ${el.address_city}, ${el.address_state} ${el.address_country}`
        }
        addressArray.push(addressInfo)
    })
    return addressArray;
}

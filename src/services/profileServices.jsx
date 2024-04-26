import server from './server.tsx'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getProfile = async () => {
    const URL = `${server.server}/customer/get-profile-info`
    console.log('URL ', URL)
    let auth_token = await AsyncStorage.getItem('token')
    let res = await fetch(URL, {
        method: 'get',
        mode: 'cors',
        headers: {
            'Authorization': auth_token ? `Bearer ${auth_token}` : '',
            'Content-Type': 'application/json',
        }
    })
    let data = await res.json()
    console.log('DATA RECIVED ', data , data.data.phoneNo)
    return { status: res.status, data: data }
}
export const editProflie = async (formData)=>{
    const URL = `${server.server}/customer/edit-info`
    console.log('URL ', URL)
    let auth_token = await AsyncStorage.getItem('token')
    let res = await fetch(URL, {
        method: 'get',
        mode: 'cors',
        headers: {
            'Authorization': auth_token ? `Bearer ${auth_token}` : '',
            'Content-Type': 'application/json',
        }
    })
    let data = await res.json()
    console.log('DATA RECIVED ', data , data.data.phoneNo)
    return { status: res.status, data: data } 
}
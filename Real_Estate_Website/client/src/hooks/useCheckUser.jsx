import {useQuery} from 'react-query'
import {userExists} from '../utils/api'

const useCheckUser = (data) => {
    return useQuery("checkUser", userExists(data))
}

export default useCheckUser
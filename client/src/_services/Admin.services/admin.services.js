import { Api } from '../../_helper/service_helper/service_helper'
export const service = async (obj) => {
    let res =await Api('POST', '/service', obj)
    console.log("res",res)
    return res
}
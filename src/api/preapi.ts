/**
 * @Date: 2023/5/23
 */

import service from "../utils/request";

export function uploadFile(data: any) {
    return service({
        url: '/application/json',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function downFile( path: string) {
    return service({
        url: `/download/${path}`,
        method: 'post',
    })
}

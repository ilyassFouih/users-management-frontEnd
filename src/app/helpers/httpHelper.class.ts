import { HttpHeaders } from "@angular/common/http";

export class HttpHepler {

    public static getHttpHeaders(): HttpHeaders {
        let headers: HttpHeaders = new HttpHeaders(
            {'Content-Type':  'application/json; charset=utf-8'}
        )
        return headers
    }
}
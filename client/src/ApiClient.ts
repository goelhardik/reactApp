export interface IButtonResponse {
    value: string;
}

export interface IApiClient {
    getQuestions(): Promise<IButtonResponse>;
}
    
export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.getQuestions = this.getQuestions.bind(this);
    }

    public getQuestions(): Promise<IButtonResponse> {
        return this.makeRequest(this.baseUrl + 'home', 'GET');
    }

    private makeRequest(url: string, methodType: string) {
        return fetch(url, {
            method: methodType,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json());
    }
}
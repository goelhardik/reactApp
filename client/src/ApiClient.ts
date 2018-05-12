export interface IGitaResponse {
    id: string;
    sanskrit: string;
}

export interface IApiClient {
    getQuestions(): Promise<IGitaResponse>;
}
    
export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.getQuestions = this.getQuestions.bind(this);
    }

    public getQuestions(): Promise<IGitaResponse> {
        return this.makeRequest(this.baseUrl + 'gita/3.4', 'GET');
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
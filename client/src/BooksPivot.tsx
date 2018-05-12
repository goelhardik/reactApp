import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { BookNames } from './Common/Constants';
import { IApiClient } from './ApiClient';

export interface IBooksPivotProps {
    apiClient: IApiClient;
}

export interface IBooksPivotState {
    content: string;
}

export class BooksPivot extends React.Component<IBooksPivotProps, IBooksPivotState> {

    constructor(props: IBooksPivotProps) {
        super(props);
        this.state = { content: '' };
    }

    public render() {
        return (
            <div>
                <div className="leftNav">
                    <Nav
                        groups={this.getNavGroups()}
                    />
                </div>
                <div className="rightPane">
                    {this.state.content}
                </div>
            </div>
        );
    }

    private getNavGroups() {
        return [
            {
                links: [
                    {
                        name: BookNames.Gita,
                        key: BookNames.Gita,
                        url: '',
                        links: [
                            {
                                name: 'Child link',
                                key: 'Child link 1',
                                url: '',
                                onClick: () => {this.props.apiClient.getQuestions().then((response) => this.setState({
                                    content: response.sanskrit
                                })); }
                            },
                            {
                                name: 'Child link',
                                key: 'Child link 2',
                                url: '',
                                links: [
                                    {
                                        name: 'Child link',
                                        key: 'Child link 3',
                                        url: ''
                                    }
                                ]
                            },
                            {
                                name: 'Child link',
                                key: 'Child link 4',
                                url: ''
                            }
                        ]
                    },
                    {
                        name: BookNames.Aparokshanubhuti,
                        key: BookNames.Aparokshanubhuti,
                        url: '',
                        links: [
                            {
                                name: 'Child link',
                                key: 'Child link 5',
                                url: ''
                            },
                        ]
                    }
                ]
            }
        ];
    }
}
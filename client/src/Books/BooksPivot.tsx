import * as React from 'react';
// import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { BookNames } from '../Common/Constants';
import { IApiClient } from '../ApiClient';
import { IVerse } from './Models';
import { GitaVerseSelector } from './Gita/GitaVerseSelector';

export interface IBooksPivotProps {
    apiClient: IApiClient;
}

export interface IBooksPivotState {
    content: string;
    gitaVerses: IVerse[];
    showGitaVerseSelector: boolean;
}

export class BooksPivot extends React.Component<IBooksPivotProps, IBooksPivotState> {

    constructor(props: IBooksPivotProps) {
        super(props);
        this.state = {
            content: '',
            gitaVerses: [],
            showGitaVerseSelector: true
        };

        this.loadGitaVerses = this.loadGitaVerses.bind(this);
    }

    public render() {
        return (
            <div>
                <div className="leftNav">
                    <Nav
                        groups={this.getNavGroups()}
                    />
                </div>
                {this.state.showGitaVerseSelector &&
                    this.renderVerseSelector()
                }
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
                        onClick: () => {
                            this.loadGitaVerses();
                        }
                        // links: [
                        // {
                        //     name: 'Child link',
                        //     key: 'Child link 1',
                        //     url: '',
                        //     onClick: () => {
                        //         this.props.apiClient.getQuestions().then((response) => this.setState({
                        //             content: response.sanskrit
                        //         }));
                        //     }
                        // },
                        // {
                        //     name: 'Child link',
                        //     key: 'Child link 2',
                        //     url: '',
                        //     links: [
                        //         {
                        //             name: 'Child link',
                        //             key: 'Child link 3',
                        //             url: ''
                        //         }
                        //     ]
                        // },
                        // {
                        //     name: 'Verses',
                        //     key: 'verses',
                        //     url: '',
                        //     onClick: () => {
                        //         this.loadGitaVerses();
                        //     }
                        // }
                        // ]
                    },
                    {
                        name: BookNames.Aparokshanubhuti,
                        key: BookNames.Aparokshanubhuti,
                        url: '',
                        onClick: () => {
                            this.loadAparokshanubhutiVerses();
                        }
                        // links: [
                        //     {
                        //         name: 'Child link',
                        //         key: 'Child link 5',
                        //         url: ''
                        //     },
                        // ]
                    }
                ]
            }
        ];
    }

    private renderVerseSelector(): JSX.Element {
        return <GitaVerseSelector />;
    }

    private loadGitaVerses() {
        const verses = [
            {
                verseId: '1.1',
                sanskrit: 'blah 1.1'
            } as IVerse,
            {
                verseId: '1.2',
                sanskrit: 'blah 1.2'
            } as IVerse
        ];

        this.setState({
            gitaVerses: verses,
            showGitaVerseSelector: true
        });
    }

    private loadAparokshanubhutiVerses() {
        this.setState({
            showGitaVerseSelector: false
        });
    }
}
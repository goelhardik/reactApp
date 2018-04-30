import { IApiClient } from './ApiClient';
import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { PivotKeys } from './Common/Constants';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './css/AppPage.css';

export interface IAppPageProps {
    apiClient: IApiClient;
}

export interface IAppPageState {
    buttonText: string;
}

export class AppPage extends React.Component<IAppPageProps, IAppPageState> {

    constructor(props: IAppPageProps) {
        super(props);
        this.state = { buttonText: 'TEST' };
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    public render() {

        return (
            <Fabric>

                <Pivot>
                    {this.renderPivotBars()}
                </Pivot>
            </Fabric>
        );
    }

    private renderPivotBars() {
        return (
            [
                this.renderBooksPivot(),
                this.renderTalksPivot()
            ]
        );
    }

    private renderBooksPivot() {
        return (
            <PivotItem key={PivotKeys.Books} linkText={PivotKeys.Books}>
                {this.renderBooksContent()}
            </PivotItem>
        );
    }

    private renderTalksPivot() {
        return (
            <PivotItem key={PivotKeys.Talks} linkText={PivotKeys.Talks}>
                {this.renderBooksContent()}
            </PivotItem>
        );
    }

    private renderBooksContent() {
        return (
            <div className="ms-NavExample-LeftPane">
                <Nav
                    groups={
                        [
                            {
                                links:
                                    [
                                        {
                                            name: 'Home',
                                            url: 'http://example.com',
                                            links: [{
                                                name: 'Activity',
                                                url: 'http://msn.com',
                                                key: 'key1'
                                            },
                                            {
                                                name: 'News',
                                                url: 'http://msn.com',
                                                key: 'key2'
                                            }],
                                            isExpanded: true
                                        },
                                        { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                                        { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                                        { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                                        { name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
                                        {
                                            name: 'Edit',
                                            url: 'http://cnn.com',
                                            icon: 'Edit',
                                            key: 'key8'
                                        },
                                        {
                                            name: 'Delete',
                                            url: 'http://cnn.com',
                                            iconProps: { iconName: 'Delete' },
                                            key: 'key9'
                                        }
                                    ]
                            }
                        ]
                    }
                    expandedStateText={'expanded'}
                    collapsedStateText={'collapsed'}
                    selectedKey={'key3'}
                />
            </div>
        );

    }

    private buttonClicked() {
        this.props.apiClient.getQuestions().then((response) => {
            this.setState({
                buttonText: response.value
            });
        });
    }
}
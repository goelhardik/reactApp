import { IApiClient } from './ApiClient';
import * as React from 'react';
// import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import './css/AppPage.css';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { BooksPivot } from './BooksPivot';
import { TalksPivot } from './TalksPivot';
import { autobind } from '@uifabric/utilities/lib';
import { PivotKeys } from './Common/Constants';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

loadTheme({
    palette: {
        'themePrimary': 'red'
    }
});

export interface IAppPageProps {
    apiClient: IApiClient;
}

export interface IAppPageState {
    buttonText: string;
}

export class AppPage extends React.Component<IAppPageProps, IAppPageState> {

    constructor(props: IAppPageProps) {
        super(props);
        this.state = { buttonText: 'TST' };
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    public render() {

        return (
            <div className="container">
                <div className="grid breadcrumb">
                    <Breadcrumb
                        items={[
                            { text: 'Vedanta Reference', 'key': 'vedantaReference', isCurrentItem: true }
                        ]}
                        ariaLabel={'Website breadcrumb'}
                        onReduceData={this._returnUndefined}
                        className="breadcrumb"
                    />
                </div>
                {/* <div className="pivot-separator" /> */}
                <div className="grid searchBox">
                    <div className="item">
                        <SearchBox
                            placeholder="Search"
                            onFocus={() => console.log('onFocus called')}
                            onBlur={() => console.log('onBlur called')}
                            underlined={true}
                        />
                    </div>
                </div>
                <div className="grid pivots">
                    <Pivot>
                        {this.renderPivotBars()}
                    </Pivot>
                </div>
            </div>
        );
    }

    @autobind
    private _returnUndefined(): undefined {
        return undefined;
    }

    private renderPivotBars(): JSX.Element[] {
        return (
            [
                (
                    <PivotItem key={PivotKeys.Books} linkText={PivotKeys.Books}>
                        {<BooksPivot />}
                    </PivotItem>
                ),
                (
                    <PivotItem key={PivotKeys.Talks} linkText={PivotKeys.Talks}>
                        {<TalksPivot />}
                    </PivotItem>
                )
            ]
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
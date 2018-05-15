import * as React from 'react';
// import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export class GitaVerseSelector extends React.Component {

    public render() {
        const verseButtons = this.getVerseButtons();
        return (
            <div className="verseSelector">
                {verseButtons}
            </div>
        );
    }

    private getVerseButtons(): JSX.Element[] {
        return (
            [
                (
                    <DefaultButton
                        primary={true}
                        text="2.1"
                        key="2.1"
                        className="verseButton"
                    />
                ),
                (
                    <DefaultButton
                        primary={true}
                        text="2.2"
                        key="2.2"
                        className="verseButton"
                    />
                ),
                (
                    <DefaultButton
                        primary={true}
                        text="2.3"
                        key="2.3"
                        className="verseButton"
                    />
                ),
                (
                    <DefaultButton
                        primary={true}
                        text="2.4"
                        key="2.4"
                        className="verseButton"
                    />
                )
            ]
        );

    }
}
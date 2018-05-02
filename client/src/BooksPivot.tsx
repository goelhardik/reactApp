import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { BookNames } from './Common/Constants';

export class BooksPivot extends React.Component {

    public render() {
        return (
            <div>
                <div className="leftNav">
                    <Nav
                        groups={this.getNavGroups()}
                    />
                </div>
                <div className="rightPane">
                            This is the description of verse and verse itself. What's it look like
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
                url: ''
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
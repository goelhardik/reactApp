import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

export class BooksPivot extends React.Component {

    public render() {
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
}
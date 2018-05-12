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
                कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् |
इन्द्रियार्थान्विमूढात्मा मिथ्याचार: स उच्यते || 6||

                    धृतराष्ट्र उवाच |
                    धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |
                    मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||1||
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
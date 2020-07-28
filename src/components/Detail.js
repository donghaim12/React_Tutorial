import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Home extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <Card>
                <CardContent>
                    {this.props.match.params.textID}
                </CardContent>
            </Card>
        );
    }
}

export default Home;
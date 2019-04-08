import React from 'react';

class Close extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
        };
    }

    hide() {
        this.setState({
            isActive: false,
        });
    }

    render() {
        return(
            <div onClick={this.hide}>
                <span className="tag is-large">
                    <i className="fas fa-times"></i>
                </span>
            </div>
        );
    }
};

export default Close;
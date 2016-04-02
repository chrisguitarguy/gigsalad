import React from 'react';
import PerformerList from './PerformerList';

export default class Index extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <PerformerList
                    performers={this.props.performers}
                    loading={this.props.loading}
                    fetchPerformers={this.props.fetchPerformers} />
            </div>
        );
    }
}

Index.propTypes = {
    performers: React.PropTypes.array,
    loading: React.PropTypes.bool.isRequired,
    fetchPerformers: React.PropTypes.func.isRequired

};

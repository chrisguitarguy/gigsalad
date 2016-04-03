import React from 'react';
import FilteredPerformerList from './FilteredPerformerList';
import ConnectedFilter from './ConnectedFilter';
import Error from './Error';

export default class Index extends React.Component {
    render() {
        if (this.props.errored) {
            return <Error title="Something Went Wrong" />
        }

        return (
            <div className="container-fluid">
                <ConnectedFilter />
                <FilteredPerformerList />
            </div>
        );
    }
}

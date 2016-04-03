import React from 'react';
import FilteredPerformerList from './FilteredPerformerList';
import ConnectedFilter from './ConnectedFilter';

export default class Index extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <ConnectedFilter />
                <FilteredPerformerList />
            </div>
        );
    }
}

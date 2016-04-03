import React from 'react';
import FilteredPerformerList from './FilteredPerformerList';

export default class Index extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <FilteredPerformerList />
            </div>
        );
    }
}

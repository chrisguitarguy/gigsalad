import React from 'react';

class SingleFilter extends React.Component {
    onChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <select onChange={this.onChange.bind(this)} value={this.props.value} className="form-control">
                <option value="">{this.props.allMessage}</option>
                {this.props.values.map((v, i) => <option value={v} key={i}>{v}</option>)}
            </select>
        );
    }
}

SingleFilter.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    values: React.PropTypes.array.isRequired,
    allMessage: React.PropTypes.string.isRequired
};

export default class PerformerFilter extends React.Component {
    render() {
        return (
            <div className="row performer-filter">
                <div className="col-md-4">
                    <SingleFilter
                        value={this.props.categoryFilter}
                        values={this.props.categories}
                        allMessage="All Categories"
                        onChange={this.props.onCategoryChange} />
                </div>
                <div className="col-md-4">
                    <SingleFilter
                        value={this.props.countryFilter}
                        values={this.props.countries}
                        allMessage="All Countries"
                        onChange={this.props.onCountryChange} />
                </div>
                <div className="col-md-4">
                    <SingleFilter
                        value={this.props.stateFilter}
                        values={this.props.states}
                        allMessage="All States"
                        onChange={this.props.onStateChange} />
                </div>
            </div>
        );
    }
}

PerformerFilter.propTypes = {
    categories: React.PropTypes.array.isRequired,
    countries: React.PropTypes.array.isRequired,
    states: React.PropTypes.array.isRequired,
    categoryFilter: React.PropTypes.string,
    countryFilter: React.PropTypes.string,
    stateFilter: React.PropTypes.string,
    onCategoryChange: React.PropTypes.func.isRequired,
    onCountryChange: React.PropTypes.func.isRequired,
    onStateChange: React.PropTypes.func.isRequired
};

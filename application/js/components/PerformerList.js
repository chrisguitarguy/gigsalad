import React from 'react';
import { Link } from 'react-router'
import chunk from 'lodash.chunk';
import LazyLoad from 'react-lazy-load';

class GridPerformer extends React.Component {
    render() {
        const p = this.props.performer;
        return (
            <div className="col-xs-6 col-sm-3 grid-performer">
                <LazyLoad>
                    <Link to={`${p.id}/${p.slug}`} className="grid-performer-content">
                            <img src={p.thumbnail.url} width="100%" />
                        <div className="performer-info">
                            <p>{p.name}</p>
                            <p>{p.city}, {p.statename}, {p.country}</p>
                            <p><small>{p.category}</small></p>
                        </div>
                    </Link>
                </LazyLoad>
            </div>
        );
    }
}

GridPerformer.propType = {
    perform: React.PropTypes.object.isRequire
};

export default class PerformerList extends React.Component {
    componentDidMount() {
        this.props.fetchPerformers();
    }

    render() {
        const { performers, loading } = this.props;
        if (loading) {
            return (
                <div className="performers loading text-center">
                    <p className="lead">Fetching Performers...</p>
                    <p>
                        <img src="/assets/img/loading.svg" width="100" height="100" alt="Loading" />
                    </p>
                </div>
            );
        }

        return (
            <div className="performers">
                {chunk(performers, 4).map(this.performerRow.bind(this))}
            </div>
        );
    }

    performerRow(chunk, idx) {
        return (
            <div className="row" key={idx}>
                {chunk.map(p => <GridPerformer performer={p} key={p.id} />)}
            </div>
        );
    }
}

PerformerList.propTypes = {
    performers: React.PropTypes.array,
    loading: React.PropTypes.bool.isRequired,
    fetchPerformers: React.PropTypes.func.isRequired
};

import React from 'react';
import { Link } from 'react-router'
import Error from './Error';

export default class SinglePerformer extends React.Component {
    componentDidMount() {
        this.props.fetchPerformer(this.props.routeParams.id);
    }

    render() {
        if (this.props.loading) {
            return (
                <div className="single-performer loading text-center">
                    <p className="lead">Fetching Performer...</p>
                    <p>
                        <img src="/assets/img/loading.svg" width="100" height="100" alt="Loading" />
                    </p>
                </div>
            );
        }

        if (this.props.errored) {
            return <Error title="Performer Not Found" />;
        }

        const p = this.props.performer;

        return (
            <div className="single-performer container-fluid">
                <ol className="breadcrumb">
                    <li><Link to="/">Performers</Link></li>
                    <li className="active">{p.name}</li>
                </ol>
                <img src={p.thumbnail.url} width={p.thumbnail.width} height={p.thumbnail.height} />
                <h1>{p.name} <small>{p.category}</small></h1>
                <p className="lead">{p.city}, {p.statename}, {p.country}</p>
            </div>
        );
    }
}

SinglePerformer.propTypes = {
    performer: React.PropTypes.object,
    loading: React.PropTypes.bool.isRequired,
    fetchPerformer: React.PropTypes.func.isRequired
};

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions = () => (
		<>
			<button
				className="ui button negative"
				onClick={() => this.props.deleteStream(this.props.match.params.id)}
			>
				Delete
			</button>
			<Link to="/" className="ui button">Cancel</Link>
		</>
	)

	renderContent = () => {
		if (!this.props.stream) {
			return `Are you sure you want to delete this stream?`;
		}
		return `Are you sure you want to delete the stream with title ${this.props.stream.title}?`;
	}

	render() {
		return (
			<Modal
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDissmis={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);

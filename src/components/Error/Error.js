import PropTypes from 'prop-types';
import errorImage from '../../images/no_results_found.png';
import './Error.css';

export default function ErrorComponent({ message }) {
  return (
    <div role="alert" className="wrapper">
      <img src={errorImage} width="400" alt="no results found" />
      <p text={message} className="text">
        {message}
      </p>
    </div>
  );
}

ErrorComponent.propTypes = {
  textError: PropTypes.string.isRequired,
};

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ArrowUp() {
  return (
    <div className="absolute right-20 mb-5 cursor-pointer">
      <FontAwesomeIcon icon={faArrowUp} bounce size="2xl" />
    </div>
  );
}

export default ArrowUp;

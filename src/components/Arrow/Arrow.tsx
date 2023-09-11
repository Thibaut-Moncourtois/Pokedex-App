import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Arrow() {
  return (
    <div className="absolute right-20">
      <FontAwesomeIcon
        icon={faArrowUp}
        bounce
        size="2xl"
        className="max-w-lg cursor-pointer"
      />
    </div>
  );
}

export default Arrow;

import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const TaskDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <IoIosArrowBack
          className="text-3xl mt-3 text-green-600 cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default TaskDetails;

import PropTypes from "prop-types";

function LoanCard({ loan, onApprove, onReject }) {
  return (
    <div className="p-4 border rounded">
      <p>
        <strong>Amount:</strong> ${loan.amount}
      </p>
      <p>
        <strong>Status:</strong> {loan.status}
      </p>

      {loan.status === "pending" && (
        <div className="mt-2">
          <button
            onClick={() => onApprove(loan._id)}
            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
          >
            Approve
          </button>
          <button
            onClick={() => onReject(loan._id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}

// Define PropTypes for the component
LoanCard.propTypes = {
  loan: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default LoanCard;

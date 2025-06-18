export default function DeleteModal({ show, onClose, onConfirm, todo }) {
  return (
    <>
      <div
        className={`modal fade  ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex="-1"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Deletion</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body bg-dark">
              <p>
                Are you sure you want to delete{" "}
                <strong>{todo?.title}</strong>?
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={onConfirm}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {show && <div className="modal-backdrop fade show"></div>}
    </>
  );
}

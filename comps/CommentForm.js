const CommentForm = () => {
  return (
    <div className="mb-5">
      <form method="post">
        <div className="row px-3" style={{ height: "3.5rem" }}>
          <div className="d-none d-sm-flex justify-content-end align-items-center col-2">
            <div
              className="position-relative bg-primary rounded-circle"
              style={{ height: "3.5rem", width: "3.5rem" }}
            >
              <div
                role="img"
                alt=""
                className="position-absolute top-50 start-50 translate-middle display-6 text-light font-monospace fw-lighter"
              >
                B
              </div>
            </div>
          </div>
          <div className="col-9">
            <textarea
              className="form-control h-100 w-100 fs-4"
              placeholder="Add a comment"
            ></textarea>
          </div>
          <div className="col-3 col-sm-1">
            <button className="btn btn-primary h-100" type="submit">
              Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;

const Comments = () => {
  return (
    <>
      <h2 className="mb-4">Comments</h2>
      <div>
        <div className="d-flex gap-5 px-3 mb-3">
          <div className="d-flex justify-content-start align-items-start">
            <div
              className="position-relative bg-primary rounded-circle"
              style={{ height: "3.5rem", width: "3.5rem" }}
            >
              <div
                role="img"
                alt=""
                className="position-absolute top-50 start-50 translate-middle display-6 text-light font-monospace fw-lighter"
              >
                D
              </div>
            </div>
          </div>
          <div>
            <h3 className="d-inline-block me-3 fs-5 fw-bold">David</h3>
            <span className="fs-5">Posted on 07/07/2022 21:14</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              impedit sunt dignissimos molestiae aperiam voluptatum ad voluptate
              quia earum expedita, iste iusto velit sit accusantium. Mollitia
              blanditiis asperiores doloremque eaque.
            </p>
          </div>
        </div>
        <div className="d-flex gap-5 px-3 mb-3">
          <div className="d-flex justify-content-start align-items-start">
            <div
              className="position-relative bg-primary rounded-circle"
              style={{ height: "3.5rem", width: "3.5rem" }}
            >
              <div
                role="img"
                alt=""
                className="position-absolute top-50 start-50 translate-middle display-6 text-light font-monospace fw-lighter"
              >
                K
              </div>
            </div>
          </div>
          <div>
            <h3 className="d-inline-block me-3 fs-5 fw-bold">Kim</h3>
            <span className="fs-5">Posted on 07/07/2022 21:14</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              impedit sunt dignissimos molestiae aperiam voluptatum ad voluptate
              quia earum expedita, iste iusto velit sit accusantium. Mollitia
              blanditiis asperiores doloremque eaque.
            </p>
          </div>
        </div>
        <div className="d-flex gap-5 px-3 mb-3">
          <div className="d-flex justify-content-start align-items-start">
            <div
              className="position-relative bg-primary rounded-circle"
              style={{ height: "3.5rem", width: "3.5rem" }}
            >
              <div
                role="img"
                alt=""
                className="position-absolute top-50 start-50 translate-middle display-6 text-light font-monospace fw-lighter"
              >
                P
              </div>
            </div>
          </div>
          <div>
            <h3 className="d-inline-block me-3 fs-5 fw-bold">Peter</h3>
            <span className="fs-5">Posted on 07/07/2022 21:14</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              impedit sunt dignissimos molestiae aperiam voluptatum ad voluptate
              quia earum expedita, iste iusto velit sit accusantium. Mollitia
              blanditiis asperiores doloremque eaque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;

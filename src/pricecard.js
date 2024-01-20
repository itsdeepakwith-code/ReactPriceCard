function Pricecard(prop) {
  return (
    <div class="card" style={{ width: "18rem", borderRadius: "15px" }}>
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-body-secondary">{prop.data.name}</h6>
        <h1 class="card-title mb-3">{prop.data.cost}</h1>
        {prop.data.features.map((feature) => {
          return feature.enabled ? (
            <h6 class="card-title mb-4 text-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="16px"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>

              {feature.name}
            </h6>
          ) : (
            <h6
              class="card-subtitle mb-4 text-body-secondary text-start"
              style={{ opacity: "70%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
              {feature.name}
            </h6>
          );
        })}
        {/* <h6 class="card-subtitle mb-3 text-body-secondary text-start">
          {prop.data.privateProj}
        </h6>
        <h6 class="card-subtitle mb-3 text-body-secondary text-start">
          {prop.data.support}
        </h6>
        <h6 class="card-subtitle mb-3 text-body-secondary text-start">
          {prop.data.freeDomain}
        </h6>
        <h6 class="card-subtitle mb-3 text-body-secondary text-start" style={{opacity:"50%"}}>
    {prop.data.report}
        </h6> */}
        <button
          type="button"
          class="btn btn-primary"
          style={{ width: "100%", borderRadius: "20px" }}
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default Pricecard;

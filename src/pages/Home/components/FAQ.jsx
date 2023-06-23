const AccordionCard = ({ title, description, target }) => {
  return (
    <div className="accordion-item overflow-hidden border border-1 rounded mb-3">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${target}`}
          aria-expanded="true"
          aria-controls={target}
        >
          {title}
        </button>
      </h2>
      <div
        id={target}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{description}</div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section className="mb-3" id="faq">
      <div className="container">
        <div className="row pb-2">
          <div className="col-lg-6 col-sm-12">
            <div className="text-center text-lg-start fw-bold">
              <h3 className="fw-bold">Frequently Asked Questions</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing
                <p>elit.</p>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="accordion" id="accordionExample">
              <AccordionCard
                title="Apa saja syarat yang dibutuhkan?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
                nesciunt eligendi temporibus veniam quis odit eveniet doloremque ex
                culpa facilis, blanditiis nisi reprehenderit modi nam nemo totam
                ratione voluptas repudiandae illum ullam eum non! Sed distinctio
                vero ullam et rem debitis itaque, tempore labore incidunt ea illum
                necessitatibus? Ipsam libero corporis totam sunt, aperiam tenetur a
                quibusdam itaque similique mollitia accusamus ex reprehenderit
                officiis quas facere quos quam sapiente?"
                target="collapseOne"
              />
              <AccordionCard
                title="Berapa hari minimal sewa mobil lepas kunci?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
                nesciunt eligendi temporibus veniam quis odit eveniet doloremque ex
                culpa facilis, blanditiis nisi reprehenderit modi nam nemo totam
                ratione voluptas repudiandae illum ullam eum non! Sed distinctio
                vero ullam et rem debitis itaque, tempore labore incidunt ea illum
                necessitatibus? Ipsam libero corporis totam sunt, aperiam tenetur a
                quibusdam itaque similique mollitia accusamus ex reprehenderit
                officiis quas facere quos quam sapiente?"
                target="collapseTwo"
              />
              <AccordionCard
                title="Berapa hari sebelumnya sabaiknya booking sewa mobil?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
                nesciunt eligendi temporibus veniam quis odit eveniet doloremque ex
                culpa facilis, blanditiis nisi reprehenderit modi nam nemo totam
                ratione voluptas repudiandae illum ullam eum non! Sed distinctio
                vero ullam et rem debitis itaque, tempore labore incidunt ea illum
                necessitatibus? Ipsam libero corporis totam sunt, aperiam tenetur a
                quibusdam itaque similique mollitia accusamus ex reprehenderit
                officiis quas facere quos quam sapiente?"
                target="collapseThree"
              />
              <AccordionCard
                title="Apakah ada biaya antar-jemput?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
                nesciunt eligendi temporibus veniam quis odit eveniet doloremque ex
                culpa facilis, blanditiis nisi reprehenderit modi nam nemo totam
                ratione voluptas repudiandae illum ullam eum non! Sed distinctio
                vero ullam et rem debitis itaque, tempore labore incidunt ea illum
                necessitatibus? Ipsam libero corporis totam sunt, aperiam tenetur a
                quibusdam itaque similique mollitia accusamus ex reprehenderit
                officiis quas facere quos quam sapiente?"
                target="collapseFour"
              />
              <AccordionCard
                title="Bagaimana jika terjadi kecelakaan?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
                nesciunt eligendi temporibus veniam quis odit eveniet doloremque ex
                culpa facilis, blanditiis nisi reprehenderit modi nam nemo totam
                ratione voluptas repudiandae illum ullam eum non! Sed distinctio
                vero ullam et rem debitis itaque, tempore labore incidunt ea illum
                necessitatibus? Ipsam libero corporis totam sunt, aperiam tenetur a
                quibusdam itaque similique mollitia accusamus ex reprehenderit
                officiis quas facere quos quam sapiente?"
                target="collapseFive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

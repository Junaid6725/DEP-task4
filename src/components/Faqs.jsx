import React from "react";

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      question: " Can I use displayed dummy before purchase?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Quae harum adipisci possimus et Iusto pariatur iste nam incidunt ratione modi",
    },
    {
      id: 2,
      question: "How are additional plan billed?",
      answer:
        "Sed urna felis, dapibus quis leo nec, luctus auctor augue. Nam gravida placerat sem vitae rutrum. Integer accumsan,enim et facilisis eleifend, ante ligula ornare nulla, sed pharetra tortor diam eget magna.",
    },
    {
      id: 3,
      question: "When should I change my plan?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore tenetur cum doloremque iusto molestiae. Minus beatae quam cumque modi quidem asperiores aliquam pariatur in iste.",
    },
    {
      id: 4,
      question: "What payment methods do you offer?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur cum doloremque iusto molestiae. Minus beatae quam cumque modi quidem asperiores aliquam pariaturin iste.",
    },
    {
      id: 5,
      question: "What is your refund policy?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur cum doloremque iusto molestiae. Minus beatae quam cumque modi quidem asperiores aliquam pariaturin iste.",
    },
    {
      id: 6,
      question: "How are paid plans billed when moving other plan?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur cum doloremque iusto molestiae. Minus beatae quam cumque modi quidem asperiores aliquam pariaturin iste.",
    },
  ];

  return (
    <>
      <section className="mb-xl-9 mb-4 container my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
              <h2 className="pb-2 border-bottom text-center">
                <a id="faq">Frequently Asked Question</a>
              </h2>
            </div>
          </div>

          <div className="row pt-4">
            {faqs.map((faq) => {
              return (
                <div
                  className="col-lg-10 offset-lg-1 col-md-12 col-12"
                  key={faq.id}
                >
                  <div className="accordion" id="accordionExample">
                    <div className="border mb-2 rounded-3 p-3">
                      <h2 className="h5 mb-0">
                        <a
                          href="#"
                          className="text-reset d-flex justify-content-between align-items-center faq-list"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${faq.id}`}
                          aria-expanded="false"
                          aria-controls={`collapse${faq.id}`}
                        >
                          {faq.question}
                          <span className="chevron-arrow">
                            <i className="bi bi-chevron-down"></i>
                          </span>
                        </a>
                      </h2>
                      <div
                        id={`collapse${faq.id}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="mt-3">{faq.answer}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;

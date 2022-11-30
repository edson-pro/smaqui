import { ChevronRightIcon } from "@heroicons/react/outline";
import { Button } from "@mantine/core";

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="bg-white">
      <div className="mx-auto  py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex w-full items-start flex-col md:flex-row   justify-between md:items-center ">
          <div className="max-w-2xl mb-3 md:mb-0 ">
            <h2
              id="faq-heading"
              className="text-2xl font-extrabold tracking-tight text-gray-900"
            >
              Ibibazo Bikunzwe kubazwa
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-500">
              Ibi nibimwe mubibazo Bikunzwe kubazwa biba byarabajijwe nabantu
              bafite ibibazo kumuryango cyangwa ubuzima bw' imyororokere.
              uramutse ufite igitekerezo cyawe wacyongereho
            </p>
          </div>
          <Button size="lg">Baza Ikibazo cyawe?</Button>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <h2 className="text-base font-medium text-gray-900">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm text-gray-500">{faq.answer}</p>
              <a className="flex text-primary items-center gap-3">
                Fungura ikibazo
                <ChevronRightIcon height={16} />
              </a>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

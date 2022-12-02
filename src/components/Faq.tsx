import { ChevronRightIcon } from "@heroicons/react/outline";
import { Button } from "@mantine/core";

const faqs = [
  {
    id: 1,
    question: "Ese amasohoro avura ibiheri?",
    answer:
      "oya, ibiheri biterwa n'ibintu byinshi harimo icyo twakita za allergy(imyivumbagatanyo y'umubiri),uburwayi runaka, ibiheri bivurwa nkizindi ndwara zisanzwe",
  },
  {
    id: 1,
    question: "Kuboneza urubyaro ni iki?",
    answer:
      "kuboneza urubyaro biba mugihe ababana bemeranyijwe kubyara abana bafite ubushobozi bwokurera, bikagendana kandi n'ikerekezo k'igihugu. ningombwa kuboneza urubyaro kuko bigabanya ubwiyongere bukabije mugihugu ariko kandi bikadufasha kuvamubukene.",
  },
  {
    id: 1,
    question: "virusi itera SIDA yandura gute ?",
    answer:
      "Virusi itera SIDA ishobora kwandurira mumatemba buzi aturuka ku muntu wanduye virusi itera SIDA. Aya matembabuzi ni amaraso, amasohoro na amashereka",
  },
  {
    id: 1,
    question: "Ese birashoboka gusama ukoze imibonano mpuzabitsina bwa mbere",
    answer:
      "ego birashoboka ! niba warakoze imibonano mpuzabitsina mugihe cyuburumbuke birashoboka ko uzasama nubwo ari ubwambere",
  },
  {
    id: 1,
    question: "Ese namenya gute ko nasamye ?",
    answer:
      ".Kutabona imihango  mu gihe usanzwe uyiboneramo: Hari impamvu nyinshi zishobora gutuma utabona imihango mu gihe wateganyaga. Zi...",
  },
  {
    id: 1,
    question: "Ese kubura imihango biravurwa?",
    answer:
      "Byaba kubura imihango by’ibanze, cyangwa warayigeze bishobora kuvurwa bitewe n’icyabiteye, kandi nanone bitewe n’uko ufite icyo kibazo yifuza kubyara cyangwa atabyifuza. ",
  },
  {
    id: 1,
    question: "uko wirinda umunuko mu gitsina",
    answer:
      "Bijya bibaho ko umugore agira impumuro itari nziza ituruka mu gitsina cye,kuburyo uwo yegereye wese ahita yumva ko hari umwuka udasanzwe umuturukaho kandi we ugasanga atabyitaho cyangwa",
  },
  {
    id: 1,
    question: "Igihe uherukira mu mihango bivuze iki?",
    answer:
      "Iyo kwa mu Muganga (Ndetse n’ahandi aho ariho hose) bakubajije igihe uherukira mu mihango, uba ugomba kubasubiza umunsi wa mbere w’imihango iheruka. Apana umunsi wayiviriyemo.",
  },
  {
    id: 1,
    question: " Ukwezi guhindagurika cyangwa se kudahindagurika?",
    answer:
      "Iyo iminsi ubonye muri ayo mezi atatu itandukanye cyane, urugero nka 23, 30, 35, gutyo gutyo, uba ufite ukwezi guhindagurika. Icyo gihe kumenya iminsi yawe y’uburumbuke.",
  },
];

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white">
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

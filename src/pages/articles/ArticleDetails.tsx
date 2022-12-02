import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { articles } from "../../components/Articles";

export default function ArticleDetails() {
  const { id } = useParams();
  return (
    <div className="relative max-w-5xl mx-auto py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              {articles[Number(id) - 1].category}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {articles[Number(id) - 1].title}
            </span>
          </h1>
        </div>
        <figure>
          <img
            className="w-full max-w-5xl my-4 mx-auto rounded-lg"
            src={articles[Number(id) - 1].image}
            alt=""
          />
        </figure>
        {/* <div className="mt-6 prose leading-8 prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong>{" "}
            sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet
            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus
            risus viverra tellus varius sit neque erat velit. Faucibus commodo
            massa rhoncus, volutpat. Dignissim sed eget risus enim.{" "}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>
              Cras cras lobortis vitae vivamus ultricies facilisis tempus.
            </li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque
            orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
            eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet,
            mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed
            elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
            in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
            mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
            Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
            diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>

          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>.
            Amet, massa quam varius orci dapibus volutpat cras. In amet eu
            ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
            viverra ridiculus non molestie. Gravida quis fringilla amet eget dui
            tempor dignissim. Facilisis auctor venenatis varius nunc, congue
            erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
        </div> */}
        <div className="ql-editor" data-gramm="false" contentEditable="false">
          <p>
            <span>
              Nyuma y’iminsi irindwi umugore akoze imibonano mpuzabitsina
              idakingiye ashobora kumenya ko yasamye iyo apimye inkari ze
              akoresheje akuma benshi bakunda kwita "Test de Grossesse”.{" "}
            </span>
            <span>
              “Test de grossesse/ pregnancy test” buri wese uzi gusoma, iyo
              akeka ko yasamye yakagura akagakoresha apima inkari, akamenya
              igisubizo.”
            </span>
          </p>

          <p>
            <strong>Test de grossesse ikora ite?</strong>
          </p>
          <p>
            <span>
              "Test de grossesse" ipima umusemburo witwa "gonadotrophine
              chorionique" ukorwa na nyababyeyi y’umugore wasamye inda. Uwo
              musemburo ntushobora gukorwa iyo umugore atasamye, ukaba uboneka
              mu nkari z’uwasamye hashyize iminsi 8 asamye inda. Icyo uwo
              musemburo umaze ni ukugira ngo ubuze umugore wasamye gusubira mu
              mihango, igi rizavamo umwana riba ryatangiye gufata munda ibyara
              ritavaho.
            </span>
          </p>

          <p>
            <span>
              "Uwo musemburo ugenda wikuba inshuro ebyiri buri minsi 2 cyangwa 3
              kugeza igihe inda igiriye amezi 3, nyuma yaho ugatangira
              kugabanuka. Uwo musemburo n’ubwo ugabanuka nyuma y’amezi atatu,
              uba ugishobora kugaragara mu maraso cyangwa mu nkari z’umugore
              utwite."
            </span>
          </p>

          <p>
            <strong>
              Ni ryari umugore akwiriye gukoresha test de grossesse?
            </strong>
          </p>
          <p>
            <span>
              Iyo imihango ya buri kwezi yatinze kuza, umugore uziko yakoze
              imibonano mpuzabitsina idakingiye aba akwiye gukoresha ubu buryo.
              "Ntacyo bimaze gukora test de grossesse ako kanya ukimara gukora
              imibonano mpuza bitsina idakingiye, ni byiza ko utegereza
              hagashira iminsi 10 kuko umusemburo upimwa n’iyo test ugaragara
              nibura ku munsi wa 7 cyangwa wa 8 kuva igihe umugore yasamiye
              inda. Ku mugore wakuyemo inda, test de grossesse ishobora
              kumubeshya ko yasamye kuko mu nkari ze haba hakirimo ya misemburo
              ya "gonadotrophine" yo ku nda yavuyemo iyo hatarashira igihe
              kinini ibyo bibaye."
            </span>
          </p>

          <p>
            <strong>Uko Test de grossesse ikoreshwa</strong>
          </p>
          <p>
            <span>
              Teste de grossesse ziriho iki gihe ziba zirimo abasirikare
              b’umubiri (anticorps) bashinzwe kumenya wa musemburo wavuzwe
              haruguru. Iyo ugeze muri farumasi bagusobanurira uko ikoreshwa
              wagera mu rugo ukabyikorera ukoresheje inkari z’igihe icyo ari cyo
              cyose n’ubwo bwose biba byiza iyo ukoresheje iza mu gitondo cyane
              cyane ku nda ikiri nto cyane.
            </span>
          </p>
          <p>
            <span>
              Mbere yo kwipima ugomba kwirinda kunywa amazi cyangwa ibindi
              binyobwa , kuko bishobora gutuma itagaragaza ibisubizo bizima.
              Ugomba kandi kubanza gusoma amabwiriza yabugenewe aba ari ku
              gakarito ifunitsemo warangiza ugafata iyo test ukayikoza mu nkari
              nturenze umurongo wabugenewe uba wanditseho "max". Iyo ibyo
              ubirangije urategereza hagashira iminota 3 kugera ku icumi , iyo
              itwite hazaho uturongo tubiri dutukura hagati. iyo udatwite haza
              akarongo kamwe gatukura hejuru. Iyo wakoze test nabi nta kintu
              kizamo cyangwa cyanazamo hakaza akarongo gatukura ariko kari hasi
              nkuko biba biri ku mashusho y’amabwiriza aba ku gikarito iyo
              "Test" ifunitsemo.
            </span>
          </p>

          <p>
            <span>
              Gukoresha test waguze muri farumasi biremewe kandi bitanga
              ibisubizo by’ukuri. Iyo ubonye igisubizo cya negatif ushobora
              kongera gukora test nyuma y’iminsi 3. Nyuma yo kumenya ko wasamye
              ukoresheje iyo test yo muri farumasi ugomba kujya no kwa muganga
              bagafata amaraso bakamenya igihe inda imaze.
            </span>
          </p>

          <p>
            <span>
              Twabibutsa ko Test de Grossesse ziri mu moko atandukanye bitewe
              n’inganda zazikoze, ibiciro byazo nabyo biratandukanye bitewe
              n’inganda zakorewemo, ariko imikorere yazo n’ibisubizo zitanga ni
              bimwe. Kandi aho wayigura ushobora kubasobanuza bakagusobanurira
              imikorere yayo.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

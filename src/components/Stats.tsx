export default function Stats() {
  return (
    <div className="bg-primary mx-3 rounded-md max-w-7xl md:mx-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Twizewe na abantu benshi mungeri zitandukanye
          </h2>
          <p className="mt-3 text-xl text-green-100 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <h4 className="order-2 mt-2 text-lg leading-6 font-medium text-green-100">
              Ababyeyi
            </h4>
            <span className="order-1 text-5xl font-extrabold text-white">
              100+
            </span>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <h4 className="order-2 mt-2 text-lg leading-6 font-medium text-green-100">
              Abana
            </h4>
            <span className="order-1 text-5xl font-extrabold text-white">
              240+
            </span>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <h4 className="order-2 mt-2 text-lg leading-6 font-medium text-green-100">
              Abandi
            </h4>
            <span className="order-1 text-5xl font-extrabold text-white">
              100+
            </span>
          </div>
        </dl>
      </div>
    </div>
  );
}

import { Button } from "@mantine/core";
import React from "react";

export default function Hero() {
  return (
    <div className="relative mt-1">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-md sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="/bg1.jpg"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
              <span className="block text-white mb-2">
                Teza imbere umuryango
              </span>
              <span className="block text-green-200">
                umubyeyi - abana n'ngimbi
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-green-50 sm:max-w-3xl">
              Uburyo bushya bugamije kuzamura ibiganiro hagati y'abana na
              ababyeyi kubuzima bw' imyororokere ndetse n' inzobere.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-5">
                <Button
                  radius="md"
                  className="w-full"
                  variant="white"
                  size="lg"
                >
                  Ukeneye Ubufasha
                </Button>
                <Button size="lg" className="w-full" radius="md">
                  Uko Bikora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

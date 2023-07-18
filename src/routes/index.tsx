import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const pokemonId = useSignal(1);

  const onChangePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;

    pokemonId.value += value;
  });

  return (
    <>
      <span class="text-2xl mb-4">Buscador Simple</span>
      <span class="text-9xl">{pokemonId}</span>
      <img
        width="96"
        height="96"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`}
        alt="image pokemon"
        style={{
          width: "200px",
        }}
      />
      <div class="flex gap-x-8 mt-6">
        <button onClick$={() => onChangePokemonId(-1)} class="btn btn-primary">
          Anterior
        </button>
        <button onClick$={() => onChangePokemonId(+1)} class="btn btn-primary">
          Siguiente
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to PokeQwik",
  meta: [
    {
      name: "description",
      content: "PokeQwik site description",
    },
  ],
};

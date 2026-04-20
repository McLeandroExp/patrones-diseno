/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Language = "es" | "en" | "fr";

function createGreeter(language: Language) {
  return function greet(name: string) {
    const greetings = {
      es: `Hola ${name}`,
      en: `Hello ${name}`,
      fr: `Bonjour ${name}`,
    };
    return console.log(greetings[language]);
  };
}

function main() {
  const greeterEs = createGreeter("es");
  const greeterEn = createGreeter("en");
  const greeterFr = createGreeter("fr");

  greeterEs("Leandro");
  greeterEn("Leandro");
  greeterFr("Leandro");
}

main();


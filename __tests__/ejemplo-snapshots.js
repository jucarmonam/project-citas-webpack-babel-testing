//Snapshot son datos que se almacenan es un string y nos pueden servir para testear por ejemplo un objeto completo
const cliente = {
  nombre: "Juan 2",
  balance: 500,
  tipo: "Premium",
};

describe("Testin al cliente", () => {
  test("Es Juan Pablo", () => {
    expect(cliente).toMatchSnapshot();
  });
});

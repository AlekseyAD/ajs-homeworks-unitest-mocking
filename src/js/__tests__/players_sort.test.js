import sortPlayers from "../players_sort";

test("Сортировка игроков - toEqual", () => {
  const received = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];
  ;
  expect(sortPlayers(received)).toEqual(expected);
});

test("Сортировка игроков - toStrictEqual", () => {
  const received = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];
  ;
  expect(sortPlayers(received)).toStrictEqual(expected);
});

test("Сортировка игроков - not.toBe", () => {
  const received = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];
  ;
  expect(sortPlayers(received)).not.toBe(expected);
});
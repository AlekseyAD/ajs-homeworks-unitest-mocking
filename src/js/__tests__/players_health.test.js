import getHealth from "../players_health";

test("Здоровье равно 0", () => {
  const health = getHealth({ name: "Маг", health: 0 });
  expect(health).toBe("critical");
});

test("Здоровье равно 14", () => {
  const health = getHealth({ name: "Маг", health: 14 });
  expect(health).toBe("critical");
});

test("Здоровье равно 15", () => {
  const health = getHealth({ name: "Маг", health: 15 });
  expect(health).toBe("wounded");
});

test("Здоровье равно 50", () => {
  const health = getHealth({ name: "Маг", health: 50 });
  expect(health).toBe("wounded");
});

test("Здоровье равно 70", () => {
  const health = getHealth({ name: "Маг", health: 70 });
  expect(health).toBe("healthy");
});

test("Здоровье равно 100", () => {
  const health = getHealth({ name: "Маг", health: 100 });
  expect(health).toBe("healthy");
});

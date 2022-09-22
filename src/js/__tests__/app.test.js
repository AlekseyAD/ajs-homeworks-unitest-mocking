import getLevel from "../app";
import fetchData from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("Получаем данные об уровне 150", () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(150);
  expect(fetchData).toBeCalledWith("https://server/user/150");
});

test("Получаем данные об уровне 1", () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith("https://server/user/1");
});

test("Данные об уровне не доступны", () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel();
  expect(fetchData).toBeCalledWith("https://server/user/undefined");
});

test("Cтатус 150 уровня", () => {
  fetchData.mockReturnValue({ status: "ok", level: 150 });
  const response = getLevel(150);

  expect(response).toBe("Ваш текущий уровень: 150");
});

test("Статус 1 уровня", () => {
  fetchData.mockReturnValue({ status: "ok", level: 1 });
  const response = getLevel(1);

  expect(response).toBe("Ваш текущий уровень: 1");
});

test("Статус уровня не доступен", () => {
  fetchData.mockReturnValue({ status: "not ok", level: 150 });
  const response = getLevel(150);

  expect(response).toBe("Информация об уровне временно недоступна");
});

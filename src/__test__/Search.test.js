import { act, fireEvent, render, screen } from "@testing-library/react";
import MainContainer from "../components/MainContainer/MainContainer";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "./mocks/resListMock.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
describe("Search Functionality", () => {
  it("should search for restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <MainContainer />
        </BrowserRouter>,
      ),
    );
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "d" } });
    fireEvent.click(searchBtn);
    const resCard = screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(4);
  });

  it("should get top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <MainContainer />
        </BrowserRouter>,
      ),
    );
    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);
    const resCard = screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(9);
  });
});

import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantDetails from "../components/RestaurantDetails/RestaurantDetails";
import MOCK_DATA from "./mocks/ResDetailMock.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Add to Cart", () => {
  it("should load res menu", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantDetails />
          </Provider>
        </BrowserRouter>,
      ),
    );

    const accordianHeader = screen.getByText("Recommended");
    fireEvent.click(accordianHeader);

    expect(screen.getByText("Margherita Pizza")).toBeInTheDocument();
    const addBtn = screen.getAllByText("Add +")[0];
    fireEvent.click(addBtn);
    expect(screen.getByText("Cart(1)")).toBeInTheDocument();
  });
});

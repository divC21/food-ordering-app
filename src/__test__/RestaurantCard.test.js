import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

console.log(MOCK_DATA);
describe("RestaurantCard", () => {
  it("should render the restaurant name", () => {
    render(<RestaurantCard resData={MOCK_DATA} onClick={() => {}} />);
    const name = screen.getByText("Pizza Paradise");
    expect(name).toBeInTheDocument();
  });
});

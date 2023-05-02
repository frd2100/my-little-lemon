import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

describe("initializeTimes", () => {
  it("should return an array of times", () => {
    const date = new Date("2023-05-01");
    const times = initializeTimes(date);
    expect(times).toEqual([
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ]);
  });
});

describe("updateTimes", () => {
  it("should return the same array of times when given the same state", () => {
    const state = [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ];
    const times = updateTimes(state);
    expect(times).toEqual(state);
  });
});

import { render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";

import Counter from "./index.jsx";

describe("Counter", () => {
  test("Should start with initial count", () => {
    render(<Counter initialCount={10} />);
    expect(screen.getByText("10")).toBeInTheDocument;
  });

  test("Should increase by one", async () => {
    render(<Counter initialCount={0} />);
    await userEvent.click(screen.getByLabelText("Increase"));
    expect(screen.getByText("1")).toBeInTheDocument;
    await userEvent.click(screen.getByLabelText("Increase"));
    expect(screen.getByText("2")).toBeInTheDocument;
  });

  test("Should decrease by one", async () => {
    render(<Counter initialCount={10} />);
    await userEvent.click(screen.getByLabelText("Decrease"));
    expect(screen.getByText("9")).toBeInTheDocument;
    await userEvent.click(screen.getByLabelText("Decrease"));
    expect(screen.getByText("8")).toBeInTheDocument;
  });

  test("Should not decrease below 0", async () => {
    render(<Counter initialCount={0} />);
    await userEvent.click(screen.getByLabelText("Decrease"));
    expect(screen.getByText("0")).toBeInTheDocument;
  });
});

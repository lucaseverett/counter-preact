import { render } from "@testing-library/preact";

import App from "./index.jsx";

describe("Renders <App />", () => {
  test("Counter should start with 0", () => {
    const { getByText } = render(<App />);
    expect(getByText("0")).toBeInTheDocument;
  });
});

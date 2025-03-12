import { render, screen } from "@testing-library/react";
import App from "./App"; // ✅ Uses the default export

test("renders upload button", () => {
    render(<App />);
    const uploadButton = screen.getByText(/Upload/i);
    expect(uploadButton).toBeInTheDocument();
});

test("renders search input", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search data.../i);
    expect(searchInput).toBeInTheDocument();
});

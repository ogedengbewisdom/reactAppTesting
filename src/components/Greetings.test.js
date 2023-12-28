import { render, screen } from "@testing-library/react"
import Greetings from "./Greetings"
import userEvent from "@testing-library/user-event";

describe("greeting components", () => {
    test("testing greetings", () => {
    render(<Greetings />);
    const checkString = screen.getByText("Hello world");
    expect(checkString).toBeInTheDocument()
})

test("renders 'Nice to me you' when button is not clicked", () => {
    render(<Greetings/>)
    const outPutElement = screen.getByText("Nice to me you")
    expect(outPutElement).toBeInTheDocument()
})

test("renders 'changed' when button is clicked", () => {
    render(<Greetings/>)
    const button = screen.getByRole("button")
    userEvent.click(button)
    const changedOutput = screen.getByText("changed")
    expect(changedOutput).toBeInTheDocument()
})

test("remove 'Nice to me you' when button is clicked", () => {
    render(<Greetings/>)
    const button = screen.getByRole("button")
    userEvent.click(button)
    const changedOutput = screen.queryByText("Nice to me you")
    expect(changedOutput).toBeNull()
})
})

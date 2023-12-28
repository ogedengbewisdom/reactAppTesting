import { render, screen } from "@testing-library/react"
import Async from "./Async"

// describe("Async Test function", () => {
//     test("List items rendered", async () => {
//      render(<Async />);
//      const asyncList = await screen.findAllByRole("listitem");
//      expect(asyncList).not.toHaveLength(0)
//     });
// });

describe("Async Test function", () => {
    test("List items rendered", async () => {
     render(<Async />);
     const asyncList = await screen.findAllByRole("listitem");
     await expect(asyncList).not.toHaveLength(0)
    });
});
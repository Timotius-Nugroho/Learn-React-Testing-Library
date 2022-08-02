import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { loadSpells as mockLoadSpells } from "../services/api";
import CreateMagic from "../components/CreateMagic";

jest.mock("../services/api");

test("render Create Magic", async () => {
  const { getByText, getByLabelText, debug } = render(<CreateMagic />);
  const loadMagicButton = getByText(/Load Magic/i);

  const testSpells = "Expecto Patronum";
  mockLoadSpells.mockResolvedValueOnce({ data: { spells: testSpells } });

  expect(loadMagicButton).toBeInTheDocument();
  fireEvent.click(loadMagicButton);
  await wait(() => {
    expect(mockLoadSpells).toHaveBeenCalledTimes(1);

    const spellsContainer = getByLabelText(/magic/i);
    expect(spellsContainer).toHaveTextContent(testSpells);
  });

  // debug();
});

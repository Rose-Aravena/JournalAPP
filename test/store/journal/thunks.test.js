import { startNewNote } from "../../../src/store/journal/thunks";

describe('tests on journal thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('startNewNote should create a blank note', async() => {

        getState.mockReturnValue({auth: {uid: 'TEST-UID'}});
        await startNewNote()(dispatch, getState);
    })
})
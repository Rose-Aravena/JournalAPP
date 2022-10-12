import { authSlice } from "../../../src/store/auth/authSlice"
import { initialState } from "../../fixtures/authFixtures";

describe('Tests in the authSlice', () => {
    test('must return the initial state and be called "auth"', () => {

        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer( initialState, {});

        expect(state).toEqual(initialState);
    })
})
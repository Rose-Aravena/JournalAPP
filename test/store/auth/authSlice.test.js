import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Tests in the authSlice', () => {

    test('must return the initial state and be called "auth"', () => {

        const state = authSlice.reducer(initialState, {});

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);
    });

    test('You must authenticate', () => {

        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).toEqual(authenticatedState)
    });

    test('You must logout with no arguments', () => {
        const state = authSlice.reducer(authenticatedState, logout());

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })

    });

    test('It should log out and display an error message', () => {

        const errorMessage = 'Credentials are not correct'
        const state = authSlice.reducer(authenticatedState, logout({errorMessage}));

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        })
    });

    test('you must change the status to "checking"', () => {

        const state = authSlice.reducer(authenticatedState, checkingCredentials());

        expect(state.status).toBe('checking')
    });
})
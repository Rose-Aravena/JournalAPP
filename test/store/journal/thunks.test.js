import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "../../../src/store/journal/journalSlice";
import { startLoadingNotes, startNewNote } from "../../../src/store/journal/thunks";

describe('tests on journal thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('startNewNote should create a blank note', async() => {

        const uid = 'TEST-UID'
        getState.mockReturnValue({auth: {uid: uid}});
        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            imageUrls: [],
            date: expect.any(Number),
            id: expect.any(String),
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            imageUrls: [],
            date: expect.any(Number),
            id: expect.any(String),
        }));

        const collectionRef = collection( FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));

        await Promise.all(deletePromises);
    }, 10000);
})
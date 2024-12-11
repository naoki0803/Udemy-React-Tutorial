// POINT コンポーネント以外の関数をテストするには？
import { counterReducer } from "./counterReducer";

const initState = { count: 0, step: 1 }
describe('counterReducerの動作確認', () => {
    test('up', () => {
        const newState = counterReducer(initState, { type: 'up' });
        expect(newState).toEqual({ count: 1, step: 1});
    });
    test('down', () => {
        const newState = counterReducer(initState, { type: 'down' });
        expect(newState).toEqual({ count: -1, step: 1 });
    });
    test('changeStep -> up', () => {
        let newState = counterReducer(initState, { type: 'changeStep', payload: 2 });
        
        expect(newState).toEqual({ count: 0, step: 2 });

        newState = counterReducer(newState, { type: 'up' });

        expect(newState).toEqual({ count: 2, step: 2 });

        expect(newState.count).toBe(2);
        expect(newState.step).toBe(2);
    });
})
import localForage from 'localforage';

export async function test() {
    return [
        {
            name: 'yeet',
            done: true
        },
        {
            name: 'bucht with a very very long title',
            done: false
        }
    ];
}

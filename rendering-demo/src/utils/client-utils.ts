import 'client-only';

export function clientSideFunction() {
    console.log(`
        use window object,
        use localStorage
    `);
    return 'client result';
}
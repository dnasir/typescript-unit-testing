import { ModuleA } from './foo';

describe('Testing moduleA', () => {
    it('should return `bar`', () => {
        const moduleA = new ModuleA();

        expect(moduleA.foo()).toBe('bar');
    });

    it('should not return `baz`', () => {
        const moduleA = new ModuleA();

        expect(moduleA.foo()).not.toBe('baz');
    });
});

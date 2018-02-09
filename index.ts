import { ModuleA } from './components/moduleA/foo';

class MainApp {
    public moduleA: ModuleA;

    constructor() {
        this.moduleA = new ModuleA();
    }
}
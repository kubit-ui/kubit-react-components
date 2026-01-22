import { A as AxeMatchers } from './to-have-no-violations-e1679411.js';
import 'axe-core';

declare global {
    namespace Vi {
        interface Assertion<T = any> extends AxeMatchers {
        }
        interface AsymmetricMatchersContaining extends AxeMatchers {
        }
    }
}
